
import { Issue } from "./models";

export function groupByLabels(issues: Issue[], labels: string[]): { [key: string]: Issue[] } {
    const map = {};
    const others: Issue[] = [];
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

export function hasLabel(issue: Issue, label: string) {
    for (const issueLabel of issue.labels) {
        if (issueLabel.name === label) {
            return true;
        }
    }
    return false;
}


export function filterPullRequest(issues: Issue[]): Issue[] {
    return issues.filter(x => !x.pull_request);
}