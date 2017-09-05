import * as commander from "commander";
import { renderChangelog } from "./changelog";
import { version } from "./constants";

export function program() {
    return commander
        .version(version)
        .arguments("<milestone>")
        .option("-f, --formatter [formatter]", "Formatter for the changelog. [pretty,markdown]")
        .option("-l, --labels [labels]", "List of labels comma separated to group issues(feature,bug)")
        .option("-r, --repo <repo>", "Full name of the repo(username/reponame)."
        + "By default will try to get the repo of current directory if applicable");
}

function checkValidOptions(options) {
    if (!options.repo) {
        process.stdout.write("You must provide a repository using the --repo option");
        process.exit(2);
    } else if (options.args.length === 0) {
        process.stdout.write("You must a milestone. gh-changelog-gen <milestone> ...");
        process.exit(2);
    }
}
export async function run(args: string[]) {
    const options = program().parse(args);
    checkValidOptions(options);
    const changelog = await renderChangelog({
        repo: options.repo,
        labels: options.labels,
        formatter: options.formatter,
        milestone: parseInt(options.args[0], 10),
    });
    process.stdout.write(changelog);
}

run(process.argv).then(() => {
    process.exit(0);
}).catch((e) => {
    process.stderr.write("An error occurred", e);
    process.exit(1);
});
