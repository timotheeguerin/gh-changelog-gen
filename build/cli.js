"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
const constants_1 = require("./constants");
const changelog_1 = require("./changelog");
function program() {
    return commander
        .version(constants_1.version)
        .arguments("<milestone>")
        .option("-f, --formatter [formatter]", "Formatter for the changelog. [pretty,markdown]")
        .option("-l, --labels [labels]", "List of labels comma separated to group issues(feature,bug)")
        .option("-r, --repo [repo]", "Full name of the repo(username/reponame)."
        + "By default will try to get the repo of current directory if applicable");
}
exports.program = program;
function run(args) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = program().parse(args);
        const changelog = yield changelog_1.renderChangelog({
            repo: options.repo,
            labels: options.labels,
            formatter: options.formatter,
            millestone: 7,
        });
        console.log(changelog);
    });
}
exports.run = run;
run(process.argv).then(() => {
    process.exit(0);
}).catch((e) => {
    console.error("An error occurred", e);
    process.exit(1);
});
