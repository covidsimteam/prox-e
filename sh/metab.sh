#!/bin/bash

git fetch
git pull

bash ./b1.sh
bash ./b0.sh

bash ./sync.sh
