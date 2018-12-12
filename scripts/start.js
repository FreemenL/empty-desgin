const {run} = require('runjs')
const chalk = require('chalk');


// run("webpack --config ./build/webpack.dll.js --mode development");
console.log(chalk.green('You application is start building...'));
run("webpack --config ./build/webpack.config.js");
