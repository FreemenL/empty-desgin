const {run} = require('runjs')
const chalk = require('chalk');
const utils = require('./utils');
const queue = utils.syncQueueGenerator();

const SUCCESS = "SUCCESS";
const ERROR = "ERROR";
/**
 * 删除开发环境dll
*/
queue.tap("delDev",(tag)=>{
    utils.hint(tag);
    if(utils.existsDllLibrary("dev")){
        utils.rm(utils.devDllLibrary,(error)=>{
            if(error){
                throw Error(error);
            }
        })
    }
})

/**
 * 处理生产环境dll 
*/
queue.tap("generatorDll",(tag)=>{
    utils.hint(tag);
    if(!utils.existsDllLibrary("pro")){
        run("cross-env NODE_ENV=production webpack --config ./build/webpack.dll.js");
    }
})


/**
 * 开始构建
*/
queue.tap("start building...",(tag)=>{
    utils.hint(tag);
    run("cross-env NODE_ENV=production webpack --profile --json > ./log/compilation-build.json --config ./build/webpack.prod.js")
})


queue.call();


