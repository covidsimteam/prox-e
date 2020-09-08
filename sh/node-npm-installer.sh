#!/bin/bash
SUDO=''
if [ "$EUID" -ne 0 ]
  SUDO='sudo'
fi

YUM_CMD=$(which yum)
APT_GET_CMD=$(which apt-get)
ALP_CMD=$(which apk)

if [[ ! -z YUM_CMD ]]; then
   IS_RHEL=1
   curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
   $SUDO yum install -y nodejs
elif [[ ! -z APT_GET_CMD ]]; then
   IS_UBUNTU=1
   curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
   $SUDO apt-get install -y nodejs
elif [[ ! -z ALP_CMD ]]; then
   IS_ALPINE=1
   apk add --update nodejs npm
   apk add --update npm
else
   IS_UNKNOWN=1
fi

source /etc/os-release

echo "Your OS is $ID"