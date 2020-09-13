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

if [[ "$id" == "$cen" ]]; then

  echo "Yummy Couch!"

  $SUDO yum install -y curl

  curl -sL https://rpm.nodesource.com/setup_14.x | $SUDO bash -

  $SUDO yum install -y nodejs

  $SUDO cat ./couch-bintray.repo >> /etc/yum.repos.d/bintray-apache-couchdb-rpm.repo
  $SUDO yum install -y epel-release && $SUDO yum install -y couch

fi



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

   sudo apt remove cmdtest
   sudo apt remove yarn
   curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
   echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
   sudo apt-get update && sudo apt-get install yarn
fi
