const { rm, cp, mkdir, exec, echo } = require('shelljs');
const chalk = require('chalk');

console.log(chalk.green('You application is start building...'));
// exec("cross-env NODE_ENV=development pm2 --watch ../build/* --watch ../package.json");
const pwd = process.cwd()

exec(`${pwd}/node_modules/.bin/webpack --config ${pwd}/build/webpack.config.js`, function(res) {
    console.log(res)
});
// exec('pwd')
// const {run} = require('runjs')
// run('webpack --config ./build/webpack.config.js')