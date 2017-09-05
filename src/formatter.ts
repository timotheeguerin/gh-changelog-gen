import { MillestoneChangelog } from "./models";

const separatorLength = 60;
const separator = "=".repeat(separatorLength);

export abstract class ChangelogFormatter {
    public abstract format(changelog: MillestoneChangelog): string;
}

export class PrettyFormatter extends ChangelogFormatter {
    public format(changelog: MillestoneChangelog): string {
        const paddingLeft = Math.floor((separatorLength - changelog.name.length) / 2);
        const lines = [
            separator,
            " ".repeat(paddingLeft) + changelog.name,
            separator,
        ];
        for (const label of changelog.labels) {
            lines.push("");
            lines.push(`${label}:`);
            lines.push("");
            
            for (const issue of changelog.issues[label]) {
                lines.push(`  - ${issue.title} (#${issue.number})`)
            }
        }
        return lines.join("\n");
    }
}

export class MarkdownFormatter extends ChangelogFormatter {
    public format(changelog: MillestoneChangelog) {
        return "";
    }

    // private _issueChangelogEntry(issue: Issue): string {
    //     return `${issue.title} [\\#${issue.number})](${issue.html_url})`
    // }
}