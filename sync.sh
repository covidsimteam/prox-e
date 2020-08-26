#!/bin/bash

type parallel >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }

echo "pushing..."
git push

echo "merging..."
git merge master

echo "going..."
cd ./sh

echo "running..."
bash ./metab.sh | parallel echo :::: - def-file

echo "...done"
