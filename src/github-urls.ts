import { githubEndpoint } from "./constants";

export function repoUrl(repo: string) {
    return `${githubEndpoint}/repos/${repo}`;
}

export function issuesUrl(repo: string) {
    return `${repoUrl(repo)}/issues`;
}

export function milestonesUrl(repo: string) {
    return `${repoUrl(repo)}/milestones`;
}

export function milestoneUrl(repo: string, milestone: number) {
    return `${repoUrl(repo)}/milestones/${milestone}`;
}

export function milestoneIssuesUrl(repo: string, milestone: string|number) {
    const query = `milestone=${milestone}&state=all`
    console.log("url",  `${issuesUrl(repo)}?${query}`);
    return `${issuesUrl(repo)}?${query}`;
}