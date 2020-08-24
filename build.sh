#!/bin/sh

echo node ubuntu setup start
set -eux
# curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
# apt install -y nodejs
mkdir -p ~/.npm/prefix

npm config set prefix ~/.npm/prefix
chown -R $USER:`id -g -n $USER` ~/.npm/prefix

export PATH="$PATH:$HOME/.npm/prefix/bin"
export NODE_PATH="$HOME/.npm/prefix/lib/node_modules"

npm config set cache $(pwd)/.npm --global
npm config set scripts-prepend-node-path true

npm install -g npm@latest yarn@latest

yarn run build-dashboard

echo node ubuntu setup finish

echo node couch setup finish
curl -X PUT http://127.0.0.1:8080/_users
curl -X PUT http://127.0.0.1:8080/_replicator
curl -X PUT http://127.0.0.1:8080/_global_changes
echo node couch setup finish