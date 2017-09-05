"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function groupByLabels(issues, labels) {
    const map = {};
    const others = [];
    for (const label of labels) {
        map[label] = [];
    }
    for (const issue of issues) {
        let found = false;
        for (const label of labels) {
            if (hasLabel(issue, label)) {
                map[label].push(issue);
                found = true;
                break;
            }
        }
        if (!found) {
            others.push(issue);
        }
    }
    map["other"] = others;
    return map;
}
exports.groupByLabels = groupByLabels;
function hasLabel(issue, label) {
    for (const issueLabel of issue.labels) {
        if (issueLabel.name === label) {
            return true;
        }
    }
    return false;
}
exports.hasLabel = hasLabel;
function filterPullRequest(issues) {
    return issues.filter(x => !x.pull_request);
}
exports.filterPullRequest = filterPullRequest;
