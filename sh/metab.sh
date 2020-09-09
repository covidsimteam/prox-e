#!/bin/bash

git fetch
git pull

bash ./b0.sh
bash ./b1.sh

bash ./sync.sh
