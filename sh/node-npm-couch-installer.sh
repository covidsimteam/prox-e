#!/bin/bash

ALP_CMD=$(apk)

bash ./sh/deps-installer.sh

if hash ALP_CMD 2>/dev/null; then
   IS_ALPINE=1
   echo "Alpined!"
   apk add --update nodejs npm
   apk add --update npm
else
   IS_UNKNOWN=1
fi

