#!/bin/bash

git checkout develop
git fetch
git pull

bash ./b0.sh
bash ./b1.sh
bash ./b2.sh
bash ./b3.sh
bash ./sync.sh
