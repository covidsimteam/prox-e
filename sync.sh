#!/bin/bash

type parallel >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }

parallel -j 4 ./sh/metab.sh > response.log
