
import { MillestoneChangelog, Millestone } from "./models";
import { listMillestoneIssues, getMillestone } from "./github-api";
import { ChangelogFormatter, PrettyFormatter, MarkdownFormatter } from "./formatter";
import { filterPullRequest, groupByLabels } from "./utils";



export interface ChangelogRenderOptions {
    repo: string;
    millestone: number;
    labels?: string;
    formatter?: string;
}

export function getFormatter(formatterName?: string): ChangelogFormatter {
    const formatters = {
        pretty: PrettyFormatter,
        markdown: MarkdownFormatter,
    }

    if (formatterName && formatterName in formatters) {
        return new formatters[formatterName]();
    } else {
        return new PrettyFormatter();
    }
}

export function getLabels(labels?: string | string[]): string[] {
    if (!labels) {
        return ["feature", "bug"];
    } else if (Array.isArray(labels)) {
        return labels;
    } else {
        return labels.split(",");
    }
}


export async function getChangelog(repo: string, millestone: Millestone, labels: string[]): Promise<MillestoneChangelog> {
    const issuesAndPrs = await listMillestoneIssues(repo, millestone.number);
    const issues = filterPullRequest(issuesAndPrs);
    const groupedIssues = groupByLabels(issues, labels);
    return {
        name: millestone.title,
        labels: ["feature", "bug", "other"],
        issues: groupedIssues,
    }
}

export async function renderChangelog(options: ChangelogRenderOptions) {
    const formatter = getFormatter(options.formatter);
    const labels = getLabels(options.labels);
    const repoName = options.repo;
    const millestone = await getMillestone(repoName, options.millestone);

    const changelog = await getChangelog(repoName, millestone, labels);
    return formatter.format(changelog);
}