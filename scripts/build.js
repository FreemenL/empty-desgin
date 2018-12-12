const {run} = require('runjs')
const chalk = require('chalk');

//run("cross-env NODE_ENV=development nodemon --watch ./build/* --watch ./package.json --exec \"webpack-dev-server  --hot --inline --display-error-details --mode development --config ./build/webpack.config.js\"");
run("cross-env NODE_ENV=production webpack --profile --json > ./log/compilation-build.json --config ./build/webpack.prod.js");