#!/bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16.0.0

# aws s3 cp 's3://generico-node-internal/secrets-keep-private/generico-crm-node/staging/staging.env' 'tmp/'


DIR="/home/nodejs"
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi
