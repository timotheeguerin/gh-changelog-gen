
import { MillestoneChangelog, Issue } from "./models";
import { listMillestoneIssues } from "./github-api";


function orderByLabels(issues: Issue[], labels: string[]): { [key: string]: Issue[] } {
    const map = {};
    const others: Issue[] = [];
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

function hasLabel(issue: Issue, label: string) {
    for (const issueLabel of issue.labels) {
        if (issueLabel.name === label) {
            return true;
        }
    }
    return false;
}


function filterPullRequest(issues: Issue[]): Issue[] {
    return issues.filter(x => !x.pull_request);
}

export async function getChangelog(repo: string, millestone: string): Promise<MillestoneChangelog> {
    const issuesAndPrs = await listMillestoneIssues(repo, 7);
    const issues = filterPullRequest(issuesAndPrs);
    const groupedIssues = orderByLabels(issues, ["feature", "bug"]);
    return {
        name: "0.0.1",
        labels: ["feature", "bug", "other"],
        issues: groupedIssues,
    }
}