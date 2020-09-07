#!/bin/bash

echo "fetching current..."
git fetch

echo "pulling current..."
git pull

echo "pushing current..."
git push

echo "merging master..."
git merge master

echo "going to sh..."
cd ./sh

echo "running meta..."
bash ./metab.sh >> runsync.log

echo "updating develop..."
git merge develop

echo "pushing develop..."
git push

git checkout develop
echo "...done"

