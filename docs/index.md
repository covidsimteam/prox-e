# prox-e

Please read all the entries alphabetically.

## Intro

The concept of anarchitectural components and component files is simple. You just need indexes and services to be able to use them.

Visualization of data in itself is not an exact science and therefore a very creative space. Currently we have provided a 2D or 3D grid of card components with both the thumbnail and the full zoom versions of all the visualizations.

These can be chosen by swiping up and down to move between the conceptual topics in the grid. You can also swipe right and left to move to the initial introductory parts or later in-depth parts of the same conceptual topics. Conceptual topics are units of visualizations with data and data semantics presented in a locally standardized format.

Beyond up. right, left, down swipes, we also support selection and subscriptions using a tap or long hold and press respectively.
A selection retrieves the latest data for a particular topic. A long hold (or deep press if 3D touch is supported) allows to see the selected component's last few hundreds of the latest updates instead  of just the most recent one.

The core system does not include any other forms of UI interactions. However the core plugins work really well to fill up the void created by an ultra-light weight core system library. The File plugin creates a globally usable virtual file system.

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

## Actions deploy guide

In order to trigger workflow action you should execute the following curl:

`curl -H "Accept: application/vnd.github.everest-preview+json" \`  
`-H "Authorization: token <ACCESS_TOKEN>" \`  
`--request POST \`  
`--data '{"event_type": "<ACTION>"}' \`  
`https://api.github.com/repos/covidsimteam/prox-e/dispatches`

This curl expects two input parameters:

- `ACCESS_TOKEN`: A personal access token. Creating a [personal access token guide](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)  
- `ACTION`: action to trigger ('deploy-docs', 'deploy-to-demo')



What this is all about

## [An architecture]('anarchitecture/index.html')

## [Components]('components/index.html')

## [Concepts]('concepts/index.html')

## [Files]('files/index.html')

## [Indexes]('indexes/index.html')

## [Services]('services/index.html')

## [Usage]('usage/index.html')

## [Viz]('viz.data/index.html')

## [Data]('viz.data/index.html')