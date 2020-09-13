npm config set prefix ~/.npm/prefix
chown -R $USER:`id -g -n $USER` ~/.npm/prefix

export PATH="$PATH:$HOME/.npm/prefix/bin"
export NODE_PATH="$HOME/.npm/prefix/lib/node_modules"

npm config set cache $(pwd)/.npm --global
npm config set scripts-prepend-node-path true

npm install -g npm@latest