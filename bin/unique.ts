import { promises as fs } from "node:fs";
import { join } from "node:path";
import chalk from "chalk";

export const recursiveSearch = async (directory: string, fileArr: string[]) => {
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
export const getFiles = async (dirPath: string) => {
	const files: string[] = [];
	await recursiveSearch(dirPath, files);
	return files;
};

const find_duplicate_icons = (paths: string[]) => {
	// this is the reference dictionary
	const dictionary = paths.map((path) => ({
		icon: path.split("/").pop()?.replace(".svg", ""),
		path
	}));
	// get the files to be parsed
	const names = paths.map((file) =>
		file.split("/").pop()?.replace(".svg", "")
	);
	// establish a set of keys
	const keys = new Set(names);
	const duplicates = dictionary.map((entry) => {
		// the first instance it deletes the entry, all good
		if (keys.has(entry.icon)) {
			keys.delete(entry.icon);
		} else {
			// we got a duplicate key
			const original = dictionary.filter(
				(item) => item.icon === entry.icon
			)[0];
			return {
				icon: entry.icon,
				origin: original.path,
				conflict: entry.path
			};
		}
	});
	return duplicates.filter((item) => item);
};

export const check_unique = async () => {
	console.log(chalk.gray("✅ Performing uniqueness check..."));
	const files = await getFiles(join(process.cwd(), "src"));
	const duplicates = find_duplicate_icons(files);
	if (duplicates.length) {
		throw () => {
			console.log(
				chalk.red(`\n\n😢 ${duplicates.length} conflicts found:`)
			);
			console.table(duplicates);
			console.log(chalk.grey("Resolve the conflicts and try again.\n\n"));
		};
	} else {
		console.log(chalk.green("✅ passed duplicate check"));
	}
};
