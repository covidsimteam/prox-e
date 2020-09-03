# README

Please read all the entries alphabetically.

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

## Intro

The concept of anarchitectural components and component files is simple. You just need indexes and services to be able to use them.

Visualization of data in itself is not an exact science and therefore a very creative space. Currently we have provided a 2D or 3D grid of card components with both the thumbnail and the full zoom versions of all the visualizations.

These can be chosen by swiping up and down to move between the conceptual topics in the grid. You can also swipe right and left to move to the initial introductory parts or later in-depth parts of the same conceptual topics. Conceptual topics are units of visualizations with data and data semantics presented in a locally standardized format.

Beyond up. right, left, down swipes, we also support selection and subscriptions using a tap or long hold and press respectively.
A selection retrieves the latest data for a particular topic. A long hold (or deep press if 3D touch is supported) allows to see the selected component's last few hundreds of the latest updates instead  of just the most recent one.

The core system does not include any other forms of UI interactions. However the core plugins work really well to fill up the void created by an ultra-light weight core system library. The File plugin creates a globally usable virtual file system.

## Content To Do
