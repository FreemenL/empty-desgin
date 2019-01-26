import * as path from 'path';
import * as fs from 'fs';

const chalk = require('chalk');
const rimraf = require('rimraf');

const systemConfig = require(path.resolve(process.cwd(),'config/index'));
const paths = require(path.resolve(process.cwd(),'build/paths'));
const { systemPath } = systemConfig;
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const existsDllLibrary = (env)=>fs.existsSync(resolveApp(`${paths.appStatic}/${systemPath.appdllLibrary}_${env}.dll.js`));
const devDllLibrary = `${paths.appStatic}/${systemPath.appdllLibrary}_dev.dll.js`
const hint = (msg)=> console.log(chalk.green(msg));

const PromiseAll=(params):any=>{
	if(Array.isArray(params)){
		const length = params.length;
		let num = 0;
		let response:Array<any> = [];
		return new Promise((resolve,reject)=>{
			for(let i=0;i<length;i++){
				Promise.resolve(params[i]).then((res)=>{
					response.push(res);
					if(i==length-1){
						resolve(response);
					}
				},(err)=>{
					reject(err);
				})
			}
		})
	}
}
/**
 * 删除文件
 * @param {*} params  string|Array
 * @param {*} callback Function 
 * @param {*} done Function 
*/
const rm = (params:Array<any>|string,callback,done)=>{
   if(Array.isArray(params)){
   	  PromiseAll(params.map((file:string,index)=>rimraf(file,callback))).then((res)=>{
        done();
   	  })
   }else{
   	  rimraf(params,callback)
   }
}

//异步流
class AsyncHook{
    hooks:Array<any>
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
        const next = (result?)=>{      
            this.hooks[index]?this.hooks[index]["fn"](this.hooks[index]["name"],task,result,next):done(task,result);
            index++;
        }   
        next();
    }
}

//同步流
class SyncHook{
    hooks:Array<any>
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