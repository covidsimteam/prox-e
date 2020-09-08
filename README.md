# prox-e

Simple REST APIs and dashboard to showcase CST's core functionalities & simple cov-hub dashboard to demonstrate what the system and the APIs above can do.

## tp

TP stands for Transport Protocols and Transport Protobufs and Top Priority. It has three important sub-projects.

### channels

All pub-sub and stream channels are available under this single API and SDK.

### nginx

All the nginx conf for all the projects will be made available here. 

### protocols

All the OpenAPI specs and spec drafts will be made available here.

## hi

All sub-projects in the `hi` project group are of high priority. It has three distinct sub-projects.

### couch-potato

This is currently just a collection of geojson blobs for CDN and redundant blob storage on edge networks. 

### cov-hub

This is the dashboard and the central activity hub for all things related to covid for everyone as a member of any given organization or as an individual. 

### prox-e

This is the additional Open API server for communicating with our system and acts as a proxy to our single source of truth - core db.


## md

All sub-projects in the `md` project group are of medium priority. It has three distinct sub-projects.

### indy

This is currently just a collection of geojson based id blobs for CDN and redundant blob storage on edge networks. 

### indy-pay

This is the dashboard and the central activity hub for all things related to payments for everyone as a member of any given organization or as an individual. 

### indy-vot

This is the additional Open API server for communicating with our system and acts as a proxy to our single source of consensus - core kdb.


## lo

All sub-projects in the `lo` project group are of underground projects that serve as enablers for the other projects above. This group has three distinct sub-projects.

### khetala

This is currently just a collection of geojson based id-metadata blobs for CDN and redundant blob storage on edge networks. 

### medigai

This is the dashboard and the central activity hub for all things related to medical ikigai for everyone as a member of any given organization or as an individual. 

### indycol

This is the additional Open API server for communicating with our system and acts as a proxy to our single source of collaboration - curedit.

## sync.sh

First thing you should do to use this repository is run the `sync.sh` script, if you have not done so recently. The `./sync.sh` script utilizes the shell scripts in `sh` folder to update all the current branches with the latest commits from develop. We run this script before and after creating new commits. We have the luxury to do this because we have sensisble, segregated branching including specially segregated branches that show us any possible overlaps between two branches.

## build.sh

First thing you should do after running `./sync.sh` is run `./build.sh`. It contains the necessary steps to get your system ready to build and serve this project.

To serve this project after running `./build.sh`, run `yarn start-cov-hub`.

## sync.sh with a graph theoretic context

You can provide your sh folder and metab.sh script in your own folder e.g. `prox-e/sh-feature-x/sh` instead of `prox-e/sh` and run `../sync.sh` from `prox-e/sh-feature/` directory. It will cd into your `prox-e/sh-feature/` directory's `sh` folder instead of the the `sh` folder in `prox-e` root folder. This can be useful for having branch specific team-wide sync logic. Please skip this setup if you have any confusions.


## docs

Github pages driven by eleventy SSG.

## Repo Stats

The following is our git-cloc.sh script generated repo status without including our old Ionic project.

```Bash
--------------------------------------------------------------------------------
Language                      files          blank        comment           code
--------------------------------------------------------------------------------
JSON                             45             27              0          29769
TypeScript                      985           4721            333          24394
HTML                            153            561             11           4860
Sass                             60            460             19           2648
JavaScript                       25            410            576           1267
Bourne Shell                     28            166            128           1204
Markdown                         28            370              0            752
YAML                             10             15             39            211
SVG                               4              0              0            196
Dockerfile                        4             16              4             47
Bourne Again Shell                1             12              7             41
INI                               1             11             70             21
CSS                               4              0              0              4
--------------------------------------------------------------------------------
SUM:                           1348           6769           1187          65414
--------------------------------------------------------------------------------
```

The following is our repo status after including Ionic:
