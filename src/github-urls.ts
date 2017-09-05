import { githubEndpoint } from "./constants";

export function repoUrl(repo: string) {
    return `${githubEndpoint}/repos/${repo}`;
}

export function issuesUrl(repo: string) {
    return `${repoUrl(repo)}/issues`;
}

export function millestonesUrl(repo: string) {
    return `${repoUrl(repo)}/milestones`;
}

export function millestoneUrl(repo: string, millestone: number) {
    return `${repoUrl(repo)}/milestones/${millestone}`;
}

export function millestoneIssuesUrl(repo: string, millestone: string|number) {
    const query = `millestone=${millestone}&state=all`
    return `${issuesUrl(repo)}?${query}`;
}