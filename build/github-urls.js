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
function millestoneIssuesUrl(repo, millestone) {
    const query = `millestone=${millestone}&state=all`;
    return `${issuesUrl(repo)}?${query}`;
}
exports.millestoneIssuesUrl = millestoneIssuesUrl;
