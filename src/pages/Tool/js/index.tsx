import React, { Component } from "react";
import  { EcodeHighlight } from 'emptyd';
import { hot } from 'react-hot-loader'; 
@hot(module)
class EmptyTool extends Component<any, any> {
  render() {
    return (
      <>
        <h1 className="e-title">empty通用工具类</h1>
        <EcodeHighlight language='bash' >
          {`
            $cnpm i freetool
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          检测数据类型包括引用类型的数据
          <code className="empty-code">freetool.GetType</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
            freetool.GetType(data);
            /*返回值：
            string
            boolean
            undefined
            number
            null
            array
            object
            date
            function
            symbol
            set
            map
            formData
            */
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          检测基本数据类型
          <code className="empty-code">freetool._typeof</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
           //symbol类型做了浏览器兼容处理
            freetool._typeof(data);
            /*返回值：
            string
            boolean
            undefined
            number
            null
            symbol
            */
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          浅拷贝
          <code className="empty-code">freetool._extends</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
           // 浅拷贝
           _extends() {
               this._extends = Object.assign || function (target){
                 for (var i = 1; i < arguments.length; i++) {
                   var source = arguments[i];
                   for (var key in source) {
                     //防止 source 对象改写 hasOwnProperty 方法
                     if (Object.prototype.hasOwnProperty.call(source, key)) {
                       target[key] = source[key];
                     }
                   }
                 }
                 return target;
               };
               return this._extends.apply(this, arguments);
           }
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          深拷贝
          <code className="empty-code">freetool.mergeConfig</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
            mergeConfig(defaultConfig, theConfig){
              return merge(cloneDeep(defaultConfig), theConfig);
            }
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
         防止constructor函数的this指向被改变 
          <code className="empty-code">freetool._classCallCheck</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
           //防止constructor函数的this指向被改变 
           _classCallCheck(instance, Constructor) {
             if (!(instance instanceof Constructor)) {
               throw new TypeError("Cannot call a class as a function");
             }
           }
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          解析json 生成树结构对象 
          <code className="empty-code">freetool.menuTreeGenerator</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
           const menuTreeGenerator = (menuList)=> (id,pid,children)=> {
                let temObj = {};
                let responseData:Array<any> = [];
                let length = menuList.length;
                for(let i=0;i<length;i++){
                temObj[menuList[i][id]] = menuList[i];
                }
                for(let i=0;i<length;i++){
                let key = temObj[menuList[i][pid]];
                if(key){
                    if(!key[children]){
                    key[children] = []
                    }
                    key[children].push(menuList[i]);
                }else{
                    responseData.push(menuList[i])
                }
                }
                return responseData
            }
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
           判断对象是否相等 
          <code className="empty-code">freetool.isObjectValueEqual</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
           isObjectValueEqual:function(a, b) {
            let aProps = Object.getOwnPropertyNames(a);
            let bProps = Object.getOwnPropertyNames(b);
            if (aProps.length != bProps.length) {
                return false;
            }
            for (let i = 0; i < aProps.length; i++) {
              let propName = aProps[i];
                if (a[propName] !== b[propName]) {
                  return false;
              }
            }
            return true;
            }
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
           串行函数 
          <code className="empty-code">freetool.compose</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
           compose(...funcs) {
                if (funcs.length === 0) {
                return arg => arg
                }
                if (funcs.length === 1) {
                return funcs[0]
                }
                return funcs.reduce((a, b) => (...args) => a(b(...args)))
            }
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          展开数组 
          <code className="empty-code">freetool._flatten</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
            _flatten(arr){
                return [].concat(...arr.map((a)=>Array.isArray(a)?method.flatten(a):a))
            }
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          <code className="empty-code">freetool.promise_all</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
            promise_all(promise:Array<any>){
                if(method.GetType(promise)!=="array"){
                  throw TypeError("promise_all params type must be an array!")
                }
                return new Promise((resolve,reject)=>{
                   let length = promise.length;
                   let counter = 0;
                   let responseArr = new Array();
                   for(let i=0;i<length;i++){
                     Promise.resolve(promise[i]).then(value=>{
                         counter++;
                         responseArr[i]=value;
                         if(counter===length){
                           resolve(responseArr);
                         }
                     },(error)=>{
                       reject(error);
                     })
                   }
                })
              }            
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          函数截流 
          <code className="empty-code">freetool.throttle</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
            throttle:function(fn:Function,interval?:number){
                let _self = fn;
                var timmer;
                let isFirst = true;
                return function(this:void){
                  let args = arguments;
                  let _me = this;
                  if(isFirst){
                    fn.apply(_me,args)
                    return isFirst = false;
                  }
                  if(timmer){
                    return false;
                  }
                  timmer = setTimeout(function(){
                    clearTimeout(timmer);
                    timmer = null;
                    fn.apply(_me,args);
                  },interval||500)
                }
              }
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          转换数组维度 
          <code className="empty-code">freetool.transformArray</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
            transformArray(num:number,array:Array<any>):Array<any>{
                var Arr = new Array(Math.ceil(array.length/num));
                for(var i = 0; i<Arr.length;i++){
                  Arr[i] = new Array();
                  for(var j = 0; j<num; j++){
                    Arr[i][j] = '';
                  }
                }
                for(var i = 0; i<array.length;i++){
                  Arr[Math.floor(i/num)][i%num] = array[i]; 
                } 
                return Arr;
             }
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          cookie  
          <code className="empty-code">freetool.cookieUtil</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
            const cookieUtil = {
                get:function(name){
                  let cookieName = encodeURIComponent(name)+'=',
                  cookieStart = document.cookie.indexOf(cookieName),
                  cookieValue:any = null;
                  if(cookieStart>-1){
                    let cookieEnd = document.cookie.indexOf(';',cookieStart);
                    if(cookieEnd == -1){
                      cookieEnd = document.cookie.length  
                    }
                    cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
                  }
                  return cookieValue;
                },
                set:function(name, value, expires?:Date, path?:string, domain?:string, secure?:string){
                  let cookieText = encodeURIComponent(name)+'='+encodeURIComponent(value);
                  if(expires instanceof Date){
                    cookieText+=";expires="+expires.toUTCString();
                  }
                  if(path){
                    cookieText += ";path=" + path;
                  }
                  if(domain){
                    cookieText +=';domain='+domain;
                  }
                  if(secure){
                    cookieText+=';secure';
                  }
                  document.cookie = cookieText;
                },
                unset:function(name,path?:string,domain?:string,secure?:string){
                  this.set(name,'',new Date(0),path,domain,secure)
                }
              }            
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          storage 相关  
          <code className="empty-code">freetool.Local|freetool.Session</code>
        </p>
        <EcodeHighlight language='tsx' >
          {`
            class Storage {
                public storage;
                constructor(storage){
                  this.storage = storage;
                }
                get(key){
                  const val = this.storage.getItem(key);
                  if (val) {
                    return JSON.parse(Base64.decode(this.storage.getItem(key)));
                  }
                  return '';
                }
                set(key, val){
                  const setting = arguments[0]
                  if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
                    for (const i in setting) {
                        this.storage.setItem(i, Base64.encode(JSON.stringify(setting[i])));
                    }
                  } else {
                    this.storage.setItem(key, Base64.encode(JSON.stringify(val)));
                  }
                }
                remove(key){
                  if (this.storage.getItem(key)) {
                    this.storage.removeItem(key)
                  }
                }
                clear(){
                  this.storage.clear()
                }
              }
              const Local = new Storage(window.localStorage);
              const Session = new Storage(window.sessionStorage);
          `}
        </EcodeHighlight>
        <h1 className="e-title">更多请参用<a href="https://www.lodashjs.com/" target="_blank">lodash </a></h1>
      </>
    );
  }
}

export default EmptyTool;
