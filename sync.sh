#!/bin/bash

type parallel >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }

git merge master
git merge develop

git checkout develop

cd ./sh
bash ./metab.sh | parallel echo :::: - def-file
