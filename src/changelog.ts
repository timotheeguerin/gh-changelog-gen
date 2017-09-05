
import { ChangelogFormatter, MarkdownFormatter, PrettyFormatter } from "./formatter";
import { getMilestone, listMilestoneIssues } from "./github-api";
import { Milestone, MilestoneChangelog } from "./models";
import { filterPullRequest, groupByLabels } from "./utils";

export interface ChangelogRenderOptions {
    repo: string;
    milestone: number;
    labels?: string;
    formatter?: string;
}

export function getFormatter(formatterName?: string): ChangelogFormatter {
    const formatters = {
        pretty: PrettyFormatter,
        markdown: MarkdownFormatter,
    };

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

export async function getChangelog(repo: string, milestone: Milestone, labels: string[]): Promise<MilestoneChangelog> {
    const issuesAndPrs = await listMilestoneIssues(repo, milestone.number);
    const issues = filterPullRequest(issuesAndPrs);
    const groupedIssues = groupByLabels(issues, labels);
    return {
        milestone: milestone,
        labels: ["feature", "bug", "other"],
        issues: groupedIssues,
    };
}

export async function renderChangelog(options: ChangelogRenderOptions) {
    const formatter = getFormatter(options.formatter);
    const labels = getLabels(options.labels);
    const repoName = options.repo;
    const milestone = await getMilestone(repoName, options.milestone);

    const changelog = await getChangelog(repoName, milestone, labels);
    return formatter.format(changelog);
}
