"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const separatorLength = 60;
const separator = "=".repeat(separatorLength);
class ChangelogFormatter {
}
exports.ChangelogFormatter = ChangelogFormatter;
class PrettyFormatter extends ChangelogFormatter {
    format(changelog) {
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
exports.PrettyFormatter = PrettyFormatter;
class MarkdownFormatter extends ChangelogFormatter {
    format(changelog) {
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
    _issueChangelogEntry(issue) {
        return `${issue.title} [\\#${issue.number})](${issue.html_url})`;
    }
}
exports.MarkdownFormatter = MarkdownFormatter;
