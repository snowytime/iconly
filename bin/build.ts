import { promises as fs } from "node:fs";
import { join, dirname } from "node:path";
import camelcase from "camelcase";
import { transform as _transform } from "@svgr/core";
import * as babel from "@babel/core";
import rimraf from "rimraf";

import { compile as compileVue } from "@vue/compiler-dom";
import chalk from "chalk";

// recursor that handles traversing nested trees
const recursiveSearch = async (directory: string, fileArr: string[]) => {
    const filesInDirectory = await fs.readdir(directory);
    for (const file of filesInDirectory) {
        const absolute = join(directory, file);
        const stat = await fs.stat(absolute);
        if (stat.isDirectory()) {
            await recursiveSearch(absolute, fileArr);
        } else {
            fileArr.push(absolute);
        }
    }
};

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
            let extension = includeExtension ? ".js" : "";
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
let transform = {
    react: async (svg: string, componentName: string) => {
        let component = await _transform(
            svg,
            //  @ts-ignore
            { ref: true, titleProp: true, props: { name: "string" } },
            { componentName },
        );
        let { code } = await babel.transformAsync(component, {
            plugins: [["@babel/plugin-transform-react-jsx", { useBuiltIns: true }]],
        });
        return code;
    },
    vue: (svg: string, componentName: string) => {
        let { code } = compileVue(svg, {
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
    let outDir = `./${framework}/${category}`;
    // get the icons
    let icons = await getIcons(category);
    await Promise.all(
        icons.flatMap(async ({ componentName, svg }) => {
            let content = await transform[framework](svg, componentName);
            let types =
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
export const build_package = async (framework: Frameworks) => {
    try {
        console.log(`Building ${framework} package...`);

        await Promise.all([
            rimraf(`../${framework}/programming`),
            rimraf(`../${framework}/countries`),
            rimraf(`../${framework}/credit`),
            rimraf(`../${framework}/ui`),
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
        console.log(e);
        throw () => {
            console.log(chalk.red(`❌ Error building ${framework}`));
        };
    }
};
