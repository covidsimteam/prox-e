#!/usr/bin/bash

# please run apt install cloc before running this script

git clone --depth 1 "$1" temp-linecount-repo &&
  printf "('D-temp-repo' will be deleted automatically)\n\n\n" &&
  cloc temp-linecount-repo &&
  rm -rf temp-linecount-repo
