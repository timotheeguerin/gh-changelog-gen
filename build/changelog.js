"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const github_api_1 = require("./github-api");
const formatter_1 = require("./formatter");
const utils_1 = require("./utils");
function getFormatter(formatterName) {
    const formatters = {
        pretty: formatter_1.PrettyFormatter,
        markdown: formatter_1.MarkdownFormatter,
    };
    if (formatterName && formatterName in formatters) {
        return new formatters[formatterName]();
    }
    else {
        return new formatter_1.PrettyFormatter();
    }
}
exports.getFormatter = getFormatter;
function getLabels(labels) {
    if (!labels) {
        return ["feature", "bug"];
    }
    else if (Array.isArray(labels)) {
        return labels;
    }
    else {
        return labels.split(",");
    }
}
exports.getLabels = getLabels;
function getChangelog(repo, millestone, labels) {
    return __awaiter(this, void 0, void 0, function* () {
        const issuesAndPrs = yield github_api_1.listMillestoneIssues(repo, millestone.number);
        const issues = utils_1.filterPullRequest(issuesAndPrs);
        const groupedIssues = utils_1.groupByLabels(issues, labels);
        return {
            millestone: millestone,
            labels: ["feature", "bug", "other"],
            issues: groupedIssues,
        };
    });
}
exports.getChangelog = getChangelog;
function renderChangelog(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const formatter = getFormatter(options.formatter);
        const labels = getLabels(options.labels);
        const repoName = options.repo;
        const millestone = yield github_api_1.getMillestone(repoName, options.millestone);
        const changelog = yield getChangelog(repoName, millestone, labels);
        return formatter.format(changelog);
    });
}
exports.renderChangelog = renderChangelog;
