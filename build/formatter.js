"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const separatorLength = 60;
const separator = "=".repeat(separatorLength);
class ChangelogFormatter {
}
exports.ChangelogFormatter = ChangelogFormatter;
class PrettyFormatter extends ChangelogFormatter {
    format(changelog) {
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
                lines.push(`  - ${issue.title} (#${issue.number})`);
            }
        }
        return lines.join("\n");
    }
}
exports.PrettyFormatter = PrettyFormatter;
class MarkdownFormatter extends ChangelogFormatter {
    format(changelog) {
        return "";
    }
}
exports.MarkdownFormatter = MarkdownFormatter;
