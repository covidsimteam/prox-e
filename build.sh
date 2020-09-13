#!/bin/bash

bash ./sh/node-npm-couch-installer.sh

echo node ubuntu setup start
set -eux

bash ./sh/npm-refresh-conf.sh

rm -rf "$HOME/.yarn"
yarn build

echo node ubuntu setup finish

# echo node couch setup finish
# curl -X PUT http://127.0.0.1:8080/_users
# curl -X PUT http://127.0.0.1:8080/_replicator
# curl -X PUT http://127.0.0.1:8080/_global_changes
# echo node couch setup finish
