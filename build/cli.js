"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
const constants_1 = require("./constants");
function program() {
    return commander
        .version(constants_1.version)
        .arguments("<milestone>")
        .option("-f, --formatter [formatter]", "Formatter for the changelog. [pretty,markdown]")
        .option("-r, --repo [repo]", "Full name of the repo(username/reponame)."
        + "By default will try to get the repo of current directory if applicable");
}
exports.program = program;
function run(args) {
    const options = program().parse(args);
    console.log("Options3; ", options);
}
exports.run = run;
run(process.argv);
