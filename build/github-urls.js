"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
function repoUrl(repo) {
    return `${constants_1.githubEndpoint}/repos/${repo}`;
}
exports.repoUrl = repoUrl;
function issuesUrl(repo) {
    return `${repoUrl(repo)}/issues`;
}
exports.issuesUrl = issuesUrl;
function milestonesUrl(repo) {
    return `${repoUrl(repo)}/milestones`;
}
exports.milestonesUrl = milestonesUrl;
function milestoneUrl(repo, milestone) {
    return `${repoUrl(repo)}/milestones/${milestone}`;
}
exports.milestoneUrl = milestoneUrl;
function milestoneIssuesUrl(repo, milestone) {
    const query = `milestone=${milestone}&state=all`;
    console.log("url", `${issuesUrl(repo)}?${query}`);
    return `${issuesUrl(repo)}?${query}`;
}
exports.milestoneIssuesUrl = milestoneIssuesUrl;
