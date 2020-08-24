#!/bin/sh

set -eux

npm config set cache $(pwd)/.npm --global

npm install -g npm

yarn run build-dashboard

