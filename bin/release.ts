import { exec } from "node:child_process";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";
import { inc } from "semver";

const exec_promise = promisify(exec);

export enum ReleaseEnum {
    Patch = "patch",
    Minor = "minor",
    Major = "major",
}

export async function release(release: ReleaseEnum) {
    const currentVersion = JSON.parse(
        await readFile(join(process.cwd(), "react/package.json"), "utf8"),
    ).version;
    const upcomingVersion = inc(currentVersion, release);
    try {
        // begin by incrementing packages properly
        await exec_promise(`cd react && npm version ${release}`);
        await exec_promise(`cd vue && npm version ${release}`);
        // finish off git
        await exec_promise(
            `git add . && git commit -m '⚡️ auto ${release}' && git push origin master`,
        );
        // release each package
        await exec_promise("cd react && npm publish");
        await exec_promise("cd vue && npm publish");
        console.log(`✅ ${release}. ${currentVersion} -> ${upcomingVersion}`);
    } catch (e) {
        console.log(e);
        console.log(`❌ Error performing release.`);
    }
}
