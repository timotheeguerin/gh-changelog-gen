import { Issue, MilestoneChangelog } from "./models";

const separatorLength = 60;
const separator = "=".repeat(separatorLength);

export abstract class ChangelogFormatter {
    public abstract format(changelog: MilestoneChangelog): string;
}

export class PrettyFormatter extends ChangelogFormatter {
    public format(changelog: MilestoneChangelog): string {
        const paddingLeft = Math.floor((separatorLength - changelog.milestone.title.length) / 2);
        const lines = [
            separator,
            " ".repeat(paddingLeft) + changelog.milestone.title,
            separator,
        ];
        for (const label of changelog.labels) {
            lines.push("");
            lines.push(`${label}:`);
            lines.push("");

            for (const issue of changelog.issues[label]) {
                lines.push(`  - ${issue.title} (#${issue.number})`);
            }
        }
        return lines.join("\n");
    }
}

export class MarkdownFormatter extends ChangelogFormatter {
    public format(changelog: MilestoneChangelog) {
        const lines = [
            `# ${changelog.milestone.title}`,
            `[All items](${changelog.milestone.html_url}?closed=1)`,
        ];

        for (const label of changelog.labels) {
            lines.push("");
            lines.push(`### ${label}:`);
            lines.push("");

            for (const issue of changelog.issues[label]) {
                lines.push(`* ${this._issueChangelogEntry(issue)}`);
            }
        }
        return lines.join("\n");
    }

    private _issueChangelogEntry(issue: Issue): string {
        return `${issue.title} [\\#${issue.number})](${issue.html_url})`;
    }
}
