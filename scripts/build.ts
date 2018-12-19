import { run } from 'runjs';
const chalk = require('chalk');
const utils = require('./utils');
const queue = utils.queueGenerator();

const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

/**
 * 删除开发环境dll
*/
queue.tapAsync("delDev", (tag, task, result, next) => {
    setTimeout(() => {
        utils.hint(tag);
        if (utils.existsDllLibrary("dev")) {
            const manifest = utils.devDllLibrary.replace(/dll.js/, "manifest.json");
            utils.rm([utils.devDllLibrary, manifest], (error) => {
                if (error) {
                    throw Error(error);
                }
            }, next)
        } else {
            next();
        }
    }, 0);
})

/**
 * 处理生产环境dll 
*/
queue.tapAsync("generatorDll", (tag, task, result, next) => {
    setTimeout(() => {
        utils.hint(tag);
        if (!utils.existsDllLibrary("pro")) {
            run("cross-env NODE_ENV=production TS_NODE_PROJECT=\"config/tsconfig-for-webpack-config.json\" webpack --config ./build/webpack.dll.ts");
        }
        next();
    }, 0);
})


/**
 * 开始构建
*/
queue.tapAsync("start building...", (tag, task, result, next) => {
    setTimeout(() => {
        utils.hint(tag);
        run("cross-env NODE_ENV=production TS_NODE_PROJECT=\"config/tsconfig-for-webpack-config.json\" webpack --profile --json > ./log/compilation-build.json --config ./build/webpack.prod.ts")
    }, 0);
})


queue.callAsync("build", () => {
    utils.hint("build complete");
});


