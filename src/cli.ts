import * as commander from "commander";
import { version } from "./constants";

export function program() {
    return commander
        .version(version)
        .arguments("<milestone>")
        .option("-f, --formatter [formatter]", "Formatter for the changelog. [pretty,markdown]")
        .option("-r, --repo [repo]", "Full name of the repo(username/reponame)."
            + "By default will try to get the repo of current directory if applicable")
}

export function run(args: string[]) {
    const options = program().parse(args);
    console.log("Options3; ", options)
}

run(process.argv);