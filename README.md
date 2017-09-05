# Github changelog generator
Generate a changelog from a github milestone grouping issues using tags.

## Install 

```bash
npm install gh-changelog-generator
```

## Usage

```bash
# Basic(will use feature and bug for grouping labels) 
gh-changelog-generator <milestone> --repo=<repo>

# Format markdown
gh-changelog-generator <milestone> --repo=<repo> --formatter=markdown

# Custom labels
gh-changelog-generator <milestone> --repo=<repo> --labels=epic,critical
```