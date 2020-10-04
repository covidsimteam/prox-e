# prox-e Aurelius

First global release monorepo for cosys.work, just like prox-g for nep.work. Contains simple REST APIs and dashboard to showcase CST's core functionalities & simple cov-hub dashboard to demonstrate what the system and the APIs above can do.

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

All sub-projects in the `lo` project group are underground projects that serve as enablers for the other projects above. This group has three distinct sub-projects.

### khetala

This is currently just a collection of geojson based id-metadata blobs for CDN and redundant blob storage on edge networks.

### medigai

This is the dashboard and the central activity hub for all things related to medical ikigai for everyone as a member of any given organization or as an individual.

### indycol

This is the additional Open API server for communicating with our system and acts as a proxy to our single source of collaboration - curedit.

## sync.sh

First thing you should do to use this repository is run the `sync.sh` script, if you have not done so recently. The `./sync.sh` script utilizes the shell scripts in `sh` folder to update all the current branches with the latest commits from develop. We run this script before and after creating new commits.
We have the luxury to do this because we have sensisble, segregated branching, including specially segregated branches that show us any possible overlaps between two upcoming branches.

## build.sh

First thing you should do after running `./sync.sh`, if you have not done so recently, is run `./build.sh`. It contains the necessary steps to get your system ready to build and serve this project.

To serve this project after running `./build.sh`, run `yarn start-cov-hub`.

## sync.sh with a graph theoretic context

You can provide your sh folder and metab.sh script in your own folder e.g. `prox-e/sh-feature-x/sh` instead of `prox-e/sh` and run `../sync.sh` from `prox-e/sh-feature/` directory.
It will `cd` into your `prox-e/sh-feature/` directory's `sh` folder instead of the the `sh` folder in `prox-e` root folder. This can be useful for having branch specific team-wide sync logic.
_Please skip this setup if you have any confusions._

## docs

Github pages driven by eleventy SSG document the software and its components. .

## Repo Stats

The following is our git-cloc.sh script generated repo status without including our old Ionic project.

```Bash
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JSON                            20             19              0          30648
TypeScript                     644           4399            258          26503
HTML                           124            707             87           4859
Sass                            70            591             28           3068
Markdown                         9             78              0            275
SVG                              4              0              0            196
YAML                             2              6              0             52
JavaScript                       2              3              2             47
CSS                              4              0              0              4
-------------------------------------------------------------------------------
SUM:                           879           5803            375          65652
-------------------------------------------------------------------------------
```

The following is our repo status after including Ionic:

```Bash

--------------------------------------------------------------------------------
Language                      files          blank        comment           code
--------------------------------------------------------------------------------
JSON                             93             12              0          54501
TypeScript                     1083           6250            681          34188
Java                             93           2803           3354          13737
JavaScript                       97           2342           4293          12933
Objective C                      46           2018           1557           7791
Markdown                         54           1507              0           4006
Sass                             82            659             25           3590
HTML                            159            187            169           2398
Bourne Shell                     36            203            170           1290
Haskell                           9            198              0            987
XML                              20            129            252            827
C/C++ Header                     53            419            932            774
Rust                             12            195              9            737
Gradle                            7            100            145            592
DOS Batch                        20             18              0            450
C#                                3             67             63            305
YAML                             13             35             40            287
OCaml                             7             67              0            228
SVG                               6              1              0            198
CSS                               7             14             42             84
Dockerfile                        4             16              4             47
INI                               1             11             70             21
Bourne Again Shell                1              4             20              6
--------------------------------------------------------------------------------
SUM:                           1906          17255          11826         139977
--------------------------------------------------------------------------------

```
