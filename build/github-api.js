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
const node_fetch_1 = require("node-fetch");
const github_urls_1 = require("./github-urls");
function get(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield node_fetch_1.default(url);
        const data = response.json();
        return data;
    });
}
exports.get = get;
function getMillestone(repo, number) {
    return __awaiter(this, void 0, void 0, function* () {
        return get(github_urls_1.millestoneUrl(repo, number));
    });
}
exports.getMillestone = getMillestone;
function listMillestoneIssues(repo, millestone) {
    return get(github_urls_1.millestoneIssuesUrl(repo, millestone));
}
exports.listMillestoneIssues = listMillestoneIssues;
