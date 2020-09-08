#!/bin/bash

SUDO=''
if [ "$EUID" -ne 0 ]; then
  SUDO='sudo'
fi

source /etc/os-release

echo "Your OS is $ID"
id="$ID"
deb="debian"
cen="centos"


if [[ "$id" == "$deb" ]]; then

   echo "Deb Couch 4 Devs!"
   curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

   $SUDO apt-get install -y nodejs

   $SUDO apt-get install -y apt-transport-https gnupg ca-certificates

   echo "deb https://apache.bintray.com/couchdb-deb buster main" \
    | $SUDO tee -a /etc/apt/sources.list.d/couchdb.list

   $SUDO apt-key adv --keyserver keyserver.ubuntu.com --recv-keys \
    8756C4F765C9AC3CB6B85D62379CE192D401AB61

   $SUDO apt update
   $SUDO apt install -y couchdb
fi
