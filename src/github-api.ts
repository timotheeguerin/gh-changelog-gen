import fetch from "node-fetch";
import { millestoneIssuesUrl } from "./github-urls";
import { Issue } from "./models";

export async function get(url: string) {
    console.log("getting uri", url);
    const response = await fetch(url);
    const data = response.json();
    return data;
}

export function listMillestoneIssues(repo: string, millestone: string|number): Issue[] {
    return get(millestoneIssuesUrl(repo, millestone)) as any;
}