const {run} = require('runjs')
const chalk = require('chalk');

console.log(chalk.green('You application is start building...'));
//run("cross-env NODE_ENV=development nodemon --watch ./build/* --watch ./package.json --exec \"webpack-dev-server  --hot --inline --display-error-details --mode development --config ./build/webpack.config.js\"");
run("webpack --display-error-details --mode development --config ./build/webpack.config.js");