#!/bin/bash

type parallel >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }
cd ./sh
bash ./metab.sh | parallel echo :::: - def-file
