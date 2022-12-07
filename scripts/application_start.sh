#!/bin/bash
sudo chmod -R 775 /home/ec2-user/nodejs
cd /home/ec2-user/nodejs

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

#aws s3 cp s3://generico-node-internal/secrets-keep-private/generico-crm-node/pre-prod/.env .

npm install
sudo chmod -R 777 public/
<<<<<<< HEAD
#"$NVM_DIR/versions/node/v12.13.0/bin/pm2" reload src/index.js --update-env
=======
#"$NVM_DIR/versions/node/v12.13.0/bin/pm2" reload src/index.js --update-env
>>>>>>> c7036b3672dc5bf5e29432e3229807f466668253
