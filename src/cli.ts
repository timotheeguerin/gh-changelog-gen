import * as commander from "commander";
import { version } from "./constants";
import { renderChangelog } from "./changelog";

export function program() {
    return commander
        .version(version)
        .arguments("<milestone>")
        .option("-f, --formatter [formatter]", "Formatter for the changelog. [pretty,markdown]")
        .option("-l, --labels [labels]", "List of labels comma separated to group issues(feature,bug)")
        .option("-r, --repo [repo]", "Full name of the repo(username/reponame)."
            + "By default will try to get the repo of current directory if applicable")
}

export async function run(args: string[]) {
    const options = program().parse(args);
    const changelog = await renderChangelog({
        repo: options.repo,
        labels: options.labels,
        formatter: options.formatter,
        millestone: 7,
    })
    console.log(changelog);
}

run(process.argv).then(() => {
    process.exit(0);  
}).catch((e) => {
    console.error("An error occurred", e);
    process.exit(1);
});