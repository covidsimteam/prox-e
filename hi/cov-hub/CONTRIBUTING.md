# Contribution Guidelines

The following are some things to follow when contributing to this section of the monorepo. This repo's global guidelines can be found in the `docs` folder in the root directory.

## Git Flow

Please always use git flow and if you have questions especially about `git flow feature`, `git flow release`, `git flow hotfix` please check tutorials like these: [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

For a new feature, create a feature branch from `develop` - never from `master`. The `develop` branch is usually ahead of `master`. This can be done as follows, from the develop branch:

```Bash
git pull
git flow feature start your-feature-name
```

Once done with all the git commits/git pushes with your feature branch, you can merge the feature branch back into `develop` as follows, from the feature branch you are in:

```Bash
git flow feature finish your-feature-name
```

## NPM

Make sure that you do not need to use npm with superuser permissions and that you have the same version of node as the rest of the team. [Learn more](https://risav.dev/play-with-spring-and-angular-getting-started-ck889q9g000hcdqs1earhic1h)

Always run `npm run prepush` before running `git push` so that you can check and correct linting issues in the code.

## RxJS

Please note that almost every data and state entity can be a stream instead of a static data and it must be treated as such.Always add all your component level subscriptions to a `subscriptions` variable. Unsubscribe once to this collection in your `ngOnDestroy` or at the end of life for the service.

More importantly, try to not use subscriptions for component variables and opt to use the async pipe whenever applicable. If done right, you should be able to have `OnPush` change detection strategy. [Learn more](https://risav.dev/suggestions-from-papa-ckcgsqzbv0026wps1btsx9j66)
