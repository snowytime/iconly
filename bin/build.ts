import { promises as fs } from "node:fs";
import { dirname } from "node:path";
import camelcase from "camelcase";
import { transform as _transform } from "@svgr/core";
import * as babel from "@babel/core";
import rimraf from "rimraf";

import { compile as compileVue } from "@vue/compiler-dom";
import chalk from "chalk";
import { recursiveSearch } from "./recursive.js";

// recursor that handles traversing nested trees

// get all the files paths in the src folder
const getFiles = async (dirPath: string) => {
    const files: string[] = [];
    await recursiveSearch(dirPath, files);
    return files;
};

// get the icons and package them for processing
enum IconCategory {
    Programming = "programming",
    Countries = "countries",
    Credit = "credit",
    Ui = "ui",
}
interface PackagedIcon {
    componentName: string;
    svg: string;
}
const getIcons = async (category: IconCategory) => {
    const files = await getFiles(`./src/${category}`);
    const packaged: PackagedIcon[] = [];
    for (const file of files) {
        // repackage
        const arr = file.split("/");
        packaged.push({
            svg: await fs.readFile(`./${file}`, "utf8"),
            componentName: `${camelcase(arr[arr.length - 1].replace(/\.svg$/, ""), {
                pascalCase: true,
            })}Icon`,
        });
    }
    return packaged;
};

const exportIcons = (icons: PackagedIcon[], includeExtension = true) => {
    return icons
        .map(({ componentName }) => {
            const extension = includeExtension ? ".js" : "";
            return `export { default as ${componentName} } from './${componentName}${extension}'`;
        })
        .join("\n");
};

// handler to write the compiled index.js
const writeFile = async (file: string, text: string) => {
    await fs.mkdir(dirname(file), { recursive: true });
    await fs.writeFile(file, text, "utf8");
};

// handle the svg logic to create the components
const transform = {
    react: async (svg: string, componentName: string) => {
        const component = await _transform(
            svg,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            { ref: true, titleProp: true, props: { name: "string" } },
            { componentName },
        );
        const { code } = await babel.transformAsync(component, {
            plugins: [["@babel/plugin-transform-react-jsx", { useBuiltIns: true }]],
        });
        return code;
    },
    vue: (svg: string) => {
        const { code } = compileVue(svg, {
            mode: "module",
        });
        return code.replace("export function", "export default function");
    },
};

// the build function
export enum Frameworks {
    React = "react",
    Vue = "vue",
}
const build = async (framework: Frameworks, category: IconCategory) => {
    const outDir = `./${framework}/${category}`;
    // get the icons
    const icons = await getIcons(category);
    await Promise.all(
        icons.flatMap(async ({ componentName, svg }) => {
            const content = await transform[framework](svg, componentName);
            const types =
                framework === Frameworks.React
                    ? `import * as React from 'react';\ndeclare function ${componentName}(props: React.ComponentProps<'svg'> & { title?: string, titleId?: string; height?: string; color?: string }): JSX.Element;\nexport default ${componentName};\n`
                    : `import type { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';\ndeclare const ${componentName}: FunctionalComponent<HTMLAttributes & VNodeProps>;\nexport default ${componentName};\n`;

            return [
                writeFile(`${outDir}/${componentName}.js`, content),
                ...(types ? [writeFile(`${outDir}/${componentName}.d.ts`, types)] : []),
            ];
        }),
    );
    await writeFile(`${outDir}/index.js`, exportIcons(icons));
    await writeFile(`${outDir}/index.d.ts`, exportIcons(icons, false));
};

// main function
export const buildPackage = async (framework: Frameworks) => {
    try {
        console.log(`Building ${framework} package...`);

        await Promise.all([
            rimraf(`${framework}/programming`),
            rimraf(`${framework}/countries`),
            rimraf(`${framework}/credit`),
            rimraf(`${framework}/ui`),
        ]);

        await Promise.all([
            // programming
            build(framework, IconCategory.Programming),
            build(framework, IconCategory.Programming),
            // countries
            build(framework, IconCategory.Countries),
            build(framework, IconCategory.Countries),
            // credit
            build(framework, IconCategory.Credit),
            build(framework, IconCategory.Credit),
            // ui
            build(framework, IconCategory.Ui),
            build(framework, IconCategory.Ui),
        ]);
        console.log(chalk.green(`✅ Finished building ${framework} package.`));
    } catch (e) {
        console.log(chalk.red(`❌ Error building ${framework}`));
    }
};
