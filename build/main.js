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
const github_api_1 = require("./github-api");
const formatter_1 = require("./formatter");
const repo = "Azure/BatchLabs";
function filterPullRequest(issues) {
    return issues.filter(x => !x.pull_request);
}
function orderByLabels(issues, labels) {
    const map = {};
    const others = [];
    for (const label of labels) {
        map[label] = [];
    }
    for (const issue of issues) {
        for (const label of labels) {
            if (hasLabel(issue, label)) {
                map[label].push(issue);
                break;
            }
        }
        others.push(issue);
    }
    map["other"] = others;
    return map;
}
function hasLabel(issue, label) {
    for (const issueLabel of issue.labels) {
        if (issueLabel.name === label) {
            return true;
        }
    }
    return false;
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const issuesAndPrs = yield github_api_1.listMillestoneIssues(repo, 7);
        const issues = filterPullRequest(issuesAndPrs);
        const groupedIssues = orderByLabels(issues, ["feature", "bug"]);
        const changelog = {
            name: "0.0.1",
            labels: ["feature", "bug", "other"],
            issues: groupedIssues,
        };
        const formatter = new formatter_1.PrettyFormatter();
        console.log(formatter.format(changelog));
    });
}
run();
