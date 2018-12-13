const path = require("path");
const fs = require("fs");
const chalk = require('chalk');
const rimraf = require('rimraf');

const systemConfig = require(path.resolve(process.cwd(),'config/index'));
const paths = require(path.resolve(process.cwd(),'build/paths'));
const { systemPath } = systemConfig;

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const existsDllLibrary = (env)=>fs.existsSync(resolveApp(`${paths.appStatic}/${systemPath.appdllLibrary}_${env}.dll.js`));
const devDllLibrary = `${paths.appStatic}/${systemPath.appdllLibrary}_dev.dll.js`
const rm = (file,callback) =>rimraf(file,callback);
const hint = (msg)=> console.log(chalk.green(msg));

//异步流
class AsyncHook{
    constructor(){
        this.hooks = [];
    }
    /**
     * 订阅
     * name 当前订阅者 
     * fn   收到消息后执行的函数
    */
    tapAsync(name,fn){
        /**fn 函数接受四个参数 
         * tag |string当前执行者 
         * task|string任务 
         * result |any 前一个执行结果 
         * next | Functon下一个任务 当前的执行结果传给next
        **/
        this.hooks.push({name,fn});
    }
    /**
     *args[0] | any 任务
     *args[1] | Function 最终的回调
     */
    callAsync(...args){
        const task = args[0];
        const done = args[args.length-1];
        let index = 0;
        const next = (result)=>{      
            this.hooks[index]?this.hooks[index]["fn"](this.hooks[index]["name"],task,result,next):done(task,result);
            index++;
        }   
        next();
    }
}

//同步流
class SyncHook{
	constructor(){
		this.hooks = [] 
	}
	tap(name,fn){ 
		this.hooks.push({name,fn})
	}
	call(...arg){
		this.hooks.forEach((item)=>item.fn(item.name,...arg))
	}
}
 
const queueGenerator = ()=>new AsyncHook;
const syncQueueGenerator = ()=>new SyncHook;

module.exports = {
    rm,
    hint,
    systemConfig,
    existsDllLibrary,
    devDllLibrary,
    queueGenerator,
    syncQueueGenerator,
}