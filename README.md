# Github changelog generator
[![Build Status](https://travis-ci.org/timotheeguerin/gh-changelog-gen.svg?branch=master)](https://travis-ci.org/timotheeguerin/gh-changelog-gen)

Generate a changelog from a github milestone grouping issues using tags.

## Install

```bash
npm install -g gh-changelog-generator
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

## Example(Simple)
Running the following command
```bash
gh-changelog-generator 6 --repo=Azure/BatchLabs
```

Generate the following

```
============================================================
                           0.6.0
============================================================

feature:

  - Show pool estimated pricing (#595)
  - Job graphs (#591)
  - Download a file group (#589)
  - Task configuration show output files (#587)
  - Should reconnect to python server automatically (#581)
  - File(s) picker inside file group (#571)
  - File group picker (#569)
  - Add option to delete a node (#554)
  - Allow delete a job with a pool if same id (#543)
  - NCJ file groups (#530)

bug:

  - Notification bug when rebooting/reimaging node in the heatmap (#600)
  - Fix crash when changing pool graph history length (#585)
  - Show the resizing arrow only if the pool is resizing or has a resize error. (#583)
  - Connect to node add user as admin doesn't set it admin (#572)
  - Unknown validation issue for creating pool with "cloud service" (#563)
  - Heatmap not showing running task when too many nodes and maxTaskPerNode is high (#555)
  - Edit storage account needs to alter underlying observable (#539)
  - Open file on osx is broken (#534)
  - Downloading an encrypted output fails (#532)
  - navigating to a non-existent pool should show error/warning (#528)
  - Deleting 1 or more selected pools from quick-list has issues (#527)
  - bl-form-section has issues with step-index if subtitle too long (#525)
  - Delete items dialog has old buttons (#521)

other:

  - Prepare release 0.6.0 (#602)
  - Add V-Ray to the license picker (#566)
  - Add long running actions for the python rpc server so it doesn't timeout (#560)
  - Pass the AAD tokens to the python (#559)
  - Documentation fails to mention python version 3.6 or greater is required (#547)
  - Upgrade typescript to 2.4 (#540)
  - Investigate Batch Labs web view (#529)
```

## Example(Markdown)
Running the following command
```bash
gh-changelog-generator 6 --repo=Azure/BatchLabs --formatter=markdown
```

Generate the following markdown

# 0.6.0
[All items](https://github.com/Azure/BatchLabs/milestone/6?closed=1)

### feature:

* Show pool estimated pricing [\#595)](https://github.com/Azure/BatchLabs/issues/595)
* Job graphs [\#591)](https://github.com/Azure/BatchLabs/issues/591)
* Download a file group [\#589)](https://github.com/Azure/BatchLabs/issues/589)
* Task configuration show output files [\#587)](https://github.com/Azure/BatchLabs/issues/587)
* Should reconnect to python server automatically [\#581)](https://github.com/Azure/BatchLabs/issues/581)
* File(s) picker inside file group [\#571)](https://github.com/Azure/BatchLabs/issues/571)
* File group picker [\#569)](https://github.com/Azure/BatchLabs/issues/569)
* Add option to delete a node [\#554)](https://github.com/Azure/BatchLabs/issues/554)
* Allow delete a job with a pool if same id [\#543)](https://github.com/Azure/BatchLabs/issues/543)
* NCJ file groups [\#530)](https://github.com/Azure/BatchLabs/issues/530)

### bug:

* Notification bug when rebooting/reimaging node in the heatmap [\#600)](https://github.com/Azure/BatchLabs/issues/600)
* Fix crash when changing pool graph history length [\#585)](https://github.com/Azure/BatchLabs/issues/585)
* Show the resizing arrow only if the pool is resizing or has a resize error. [\#583)](https://github.com/Azure/BatchLabs/issues/583)
* Connect to node add user as admin doesn't set it admin [\#572)](https://github.com/Azure/BatchLabs/issues/572)
* Unknown validation issue for creating pool with "cloud service" [\#563)](https://github.com/Azure/BatchLabs/issues/563)
* Heatmap not showing running task when too many nodes and maxTaskPerNode is high [\#555)](https://github.com/Azure/BatchLabs/issues/555)
* Edit storage account needs to alter underlying observable [\#539)](https://github.com/Azure/BatchLabs/issues/539)
* Open file on osx is broken [\#534)](https://github.com/Azure/BatchLabs/issues/534)
* Downloading an encrypted output fails [\#532)](https://github.com/Azure/BatchLabs/issues/532)
* navigating to a non-existent pool should show error/warning [\#528)](https://github.com/Azure/BatchLabs/issues/528)
* Deleting 1 or more selected pools from quick-list has issues [\#527)](https://github.com/Azure/BatchLabs/issues/527)
* bl-form-section has issues with step-index if subtitle too long [\#525)](https://github.com/Azure/BatchLabs/issues/525)
* Delete items dialog has old buttons [\#521)](https://github.com/Azure/BatchLabs/issues/521)

### other:

* Prepare release 0.6.0 [\#602)](https://github.com/Azure/BatchLabs/issues/602)
* Add V-Ray to the license picker [\#566)](https://github.com/Azure/BatchLabs/issues/566)
* Add long running actions for the python rpc server so it doesn't timeout [\#560)](https://github.com/Azure/BatchLabs/issues/560)
* Pass the AAD tokens to the python [\#559)](https://github.com/Azure/BatchLabs/issues/559)
* Documentation fails to mention python version 3.6 or greater is required [\#547)](https://github.com/Azure/BatchLabs/issues/547)
* Upgrade typescript to 2.4 [\#540)](https://github.com/Azure/BatchLabs/issues/540)
* Investigate Batch Labs web view [\#529)](https://github.com/Azure/BatchLabs/issues/529)
