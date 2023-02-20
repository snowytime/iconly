import { checkUnique } from "./unique.js";
import { generateReadme } from "./build_readme.js";
import { buildPackage, Frameworks } from "./build.js";
import { release, ReleaseEnum } from "./release.js";

const buildIconify = async (version: ReleaseEnum) => {
    // we need to first run the check
    try {
        await checkUnique();
        await generateReadme();
        await buildPackage(Frameworks.React);
        await buildPackage(Frameworks.Vue);
        release(version);
    } catch (e) {
        console.log(e);
    }
};

const [version] = process.argv.slice(2);

if (!version || !Object.values(ReleaseEnum).some((v) => v === version)) {
    throw new Error("Invalid version");
}

buildIconify(version as ReleaseEnum);
