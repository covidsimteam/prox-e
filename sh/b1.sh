#!/bin/bash

git checkout feature/scheduler
git merge develop

git checkout feature/wizard
git merge develop

git checkout feature/i18n
git merge develop

git checkout feature/forms
git merge develop
