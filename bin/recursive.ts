import { promises } from "node:fs";
import { join } from "node:path";

export const recursiveSearch = async (directory: string, fileArr: string[]) => {
    const filesInDirectory = await promises.readdir(directory);
    for (const file of filesInDirectory) {
        const absolute = join(directory, file);
        const stat = await promises.stat(absolute);
        if (stat.isDirectory()) {
            await recursiveSearch(absolute, fileArr);
        } else {
            fileArr.push(absolute);
        }
    }
};
