#!/bin/bash

echo "checking out develop"
git checkout develop

echo "merge i18n"
git merge feature/i18n

echo "merge scheduler"
git merge feature/scheduler

echo "merge wizard"
git merge feature/wizard

echo "merge forms"
git merge feature/forms

echo "merge global"
git merge feat/global