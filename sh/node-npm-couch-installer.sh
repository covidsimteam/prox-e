#!/bin/bash
SUDO=''
if [ "$EUID" -ne 0 ]; then
  SUDO='sudo'
fi

YUM_CMD=$(yum)
APT_GET_CMD=$(apt-get)
ALP_CMD=$(apk)

source /etc/os-release

echo "Your OS is $ID"
id="$ID"
deb="debian"
cen="centos"

if [[ "$id" == "$cen" ]]; then
   IS_RHEL=1
   echo "Yummy!"
   curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
   $SUDO yum install -y nodejs
   bash ./sh/deps-installer.sh
fi

if [[ "$id" == "$deb" ]]; then
   IS_UBUNTU=1
   bash ./sh/deps-installer.sh
fi

if hash ALP_CMD 2>/dev/null; then
   IS_ALPINE=1
   echo "Alpined!"
   apk add --update nodejs npm
   apk add --update npm
else
   IS_UNKNOWN=1
fi

