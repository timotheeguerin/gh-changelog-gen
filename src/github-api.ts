import fetch from "node-fetch";
import { millestoneIssuesUrl, millestoneUrl } from "./github-urls";
import { Issue, Millestone } from "./models";

export async function get(url: string) {
    const response = await fetch(url);
    const data = response.json();
    return data;
}

export async function getMillestone(repo: string, number: number): Millestone {
    return get(millestoneUrl(repo, number)) as any;
}

export function listMillestoneIssues(repo: string, millestone: string | number): Issue[] {
    return get(millestoneIssuesUrl(repo, millestone)) as any;
}