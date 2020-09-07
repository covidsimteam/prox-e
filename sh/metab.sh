#!/bin/bash

git checkout develop
git fetch

bash ./b0.sh
bash ./b1.sh

bash ./sync.sh
