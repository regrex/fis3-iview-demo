#!/usr/bin/env bash

# set node path to v6.0
export PATH=/home/fis/node/v6/bin:$PATH;


npm install --registry=http://pnpm.baidu.com

rm -rf output

npm run build

APP_NAME="operatemis"

cd output

tar cvzf static-$APP_NAME.tar.gz static
tar cvzf $APP_NAME.tar.gz  template
rm -rf template static
