import chalk from "chalk";
import fs from "node:fs";
import { join } from "node:path";
import { getFiles } from "./unique.js";

const buildTag = (index: number, text: string) => {
    if (index === 0) {
        return `### ${text.charAt(0).toUpperCase() + text.slice(1)}\n`;
    }
    if (index === 1) {
        return `#### ${text.charAt(0).toUpperCase() + text.slice(1)}\n`;
    }
    return `- [${text
        .split("/")
        .pop()
        .replace(".svg", "")}](https://github.com/snowytime/iconify/blob/master/src/${text})\n`;
};

export async function generateReadme() {
    try {
        // this is ALWAYS injected into the output
        const readmePath = join(process.cwd(), "README.md");
        // clear readme
        fs.truncateSync(readmePath);
        const base = await fs.promises.readFile(join(process.cwd(), "base.md"), "utf-8");
        const stream = fs.createWriteStream(readmePath, {
            flags: "a",
        });
        // insert the initial
        stream.write(base);
        // now we need to actually insert the table of contents
        const files = await getFiles(join(process.cwd(), "src"));
        const complete = files.map((file) => file.split("src/")[1]);
        const truncatedFiles = files
            .map((file) => file.split("src/")[1])
            .map((file) => file.split("/"))
            .map((file) => file.filter((_, i) => i !== file.length - 1))
            .flat();
        // keeps track of what has been made, and what has not been made
        const categorySet = new Set(truncatedFiles);
        // now we want to map over the files themselves and split them by '/', and from left to right
        // build the tree based on if that category has been built or not
        complete.forEach((file) => {
            const subArr = file.split("/");
            subArr.forEach((item, index) => {
                // check the category - index refers to the depth
                const lastIndex = subArr.length - 1;
                if (index === lastIndex) {
                    // actual item
                    stream.write(`${buildTag(2, file)}\n`);
                }
                if (categorySet.has(item)) {
                    // this category has never been encountered
                    stream.write(`${buildTag(index, item)}\n`);
                    categorySet.delete(item);
                }
            });
        });
        console.log(chalk.green("✅ Readme successfully generated"));
    } catch (e) {
        console.log(chalk.red("❌ Error building Readme"));
    }
}
