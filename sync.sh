#!/bin/bash

echo "pushing..."
git push

echo "merging..."
git merge master

echo "going..."
cd ./sh

echo "running..."
bash ./metab.sh >> runsync.log

echo "updating..."
git merge develop

echo "pushing..."
git push

git checkout develop
echo "...done"

