import React, { Component } from "react";

import  { EcodeHighlight } from 'emptyd';

class Web extends Component<any, any> {
  render() {
    return (
      <>
        <h1 className="e-title"> 代码书写约定规范 </h1>
        <p className="empty-line-content">
          样式:
        </p>
        <p className="empty-line-content">
          1、less: className的单词之间以<code className="empty-code">“-”</code>连接,如<code className="empty-code">empty-tree-content;</code> 相同的样式值多次使用到请使用变量（less 变量写法如：<code className="empty-code"> @base-padding:10px </code>）;
        </p>
        <p className="empty-line-content">
          2、样式尽可能的用类选择器代替 标签选择器，  减少渲染引擎查找的过程
        </p>
        <p className="empty-line-content">
          js:
        </p>
        <p className="empty-line-content">
          1、变量名和普通函数名如果是多个单词,请使用<code className="empty-code">小驼峰</code>格式如myName，构造函数名和 class 类名,请以 首字母大写、多个单词<code className="empty-code">大驼峰</code>，如MyComponent;
        </p>
        <p className="empty-line-content">
          2、声明函数参数超过 3 个时，请使用对象参数形式，如 <code className="empty-code">showMyNames(show,isBox,byElement)</code>,<code className="empty-code">showMyDreams({"{show,isBox,byElement,allData}"})</code>
        </p>
        <p className="empty-line-content">
          3、导入方式<code className="empty-code">import 和 require </code> 并行时<code className="empty-code">先写import</code>
        </p>
        <p className="empty-line-content">
          4、条件判断<code className="empty-code">先写可能性较大的</code> , 并在适当的情境下用<code className="empty-code">策略模式</code>代替 大量if else 嵌套的写法,增强代码可读性 降低维护成本
        </p>
        <p className="empty-line-content">
          5、删除元素的时候要删除其绑定的事件 否则会存在<code className="empty-code">内存泄漏</code>的问题
        </p>
        <p className="empty-line-content">
          6、dom操作<code className="empty-code">读写分离</code> 避免不必要的dom回流和重绘
        </p>
        <p className="empty-line-content">
          7、<code className="empty-code">单例模式</code> new操作符往往意味着资源的分配 ，因此我们应该在一开始的时候就创建对象，以后尽量使用同一个对象， 我们应该尽量减少 &#123; &#125; 的使用，就像减少new一样。因此在函数返回值中我们可以使用一个全局的变量去替代每次都创建一个返回值对象
        </p>
        <p className="empty-line-content">
          8、清除[数组]的时候使用[数组].length=0,的方式，避免给其从新赋值为[]
        </p>
        <p className="empty-line-content">
          9、setTimeOut中的function用变量保存，避免用bind 或者IIFE的方式获取this，使函数得到重用，而不是每次在运行的时候都会创建一个对象
        </p>
        <p className="empty-line-content">
          react:
        </p>
        <p className="empty-line-content">
          1、禁用组件生命周期函数：<code className="empty-code">componentWillMount、componentWillReceiveProps、componentWillUpdate</code>因为这些可能在以后 react 中被废弃的函数;
        </p>
        <p className="empty-line-content">
          2、ref 属性禁用字符串方式, 如禁用<code className="empty-code">{'<div ref="myBox"></div>'}</code>，推荐用法 <code className="empty-code">React.createRef()</code>
        </p>
        <p className="empty-line-content">
          3、组件内跟setState无关的属性，请不要写进 state中
        </p>
        <p className="empty-line-content">
          4、给节点设置合理的key值 减小<code className="empty-code">dom  diff</code>时的开销和避免出错
        </p>
        <p className="empty-line-content">
          5、通过chrome 扩展工具 识别不必要的渲染，将经常更新的区域提取为孤立的组件 
        </p>
        <p className="empty-line-content">
          6、避免将新对象作为 props 传递,如下：   
        </p>
        <EcodeHighlight language='tsx'>
          {`
            //  错误写法
            class Description extends Component {
              render() {
                const i = {
                  value: "i"
                };
                return (
                  <p>
                    <I i={i} />
                    <Am />
                    <A />
                    <Profession profession={this.props.description} />
                  </p>
                );
              }
            }  
            //正确写法
            class Description extends Component {
              i = {
                value: "i"
              };
              render() {
                return (
                  <p>
                   <I i={this.i} />
                   <Am /> 
                   <A />
                   <Profession profession={this.props.description} />
                  </p>
                );
              }
            }           
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
         7、巧用<code className="empty-code">shouldComponentUpdate 或者 PureComponent </code> 避免不必要的渲染
        </p>
        <p className="empty-line-content">
          8、导入<code className="empty-code">echarts lodash</code>等第三方库的时候请按需导入 具体方法可参考其文档
        </p>
        <p className="empty-line-content">
          9、先导入<code className="empty-code">第三方模块</code> 自定义模块后导入
        </p>
        <h1 className="e-title"> 静态资源</h1>
        <p className="empty-line-content">
          1、衡量小文件可进行打包处理的，统一放 @public 目录，如小图片在 <code className="empty-code">@public/images</code>
        </p>
        <p className="empty-line-content">
          2、较大文件，不宜打包处理的，统一放static目录，且要以<code className="empty-code">{`<img src="../../static/images/my.png"/>`}</code>方式使用
        </p>

        <h1 className="e-title"> 通用组件 @components/**/*.tsx</h1>
        <p className="empty-line-content">
          1、一个组件就是一个文件夹，文件夹命名与组件命名相同，里面有对应的<code className="empty-code">index.tsx</code> （必需文件）和 <code className="empty-code">style.less</code>,
            如 EFormHoc 组件。
        </p>
        <EcodeHighlight language='tsx'>
          {`
            import React,{Component}from 'react';
            import { Form } from 'antd';
            import freetool from 'freetool';
            import autobind from 'autobind-decorator';

            import { emptyFormConfig } from '../constant';
            import EwapperHoc from '../EwapperHoc';
            import EformIndex from '../Eform/index';
            
            const { mergeConfig } = freetool;
            const {component:Eform} = EformIndex;
            
            
            function EFormHoc(this:any,EformConfig,pattern){
              const that = this;
              let defaultProps = mergeConfig(emptyFormConfig.call(this),(EformConfig&&pattern=="edit")?EformConfig.call(this):(EformConfig&&EformConfig(pattern)));
              @autobind
              class  EFormWrapper extends Component<any>{
                Eform
                Ewapper
                static displayName="EFormHoc(EFormWrapper)"
                static defaultProps = defaultProps
                constructor(props){
                  super(props)
                  this.Eform = Eform.bind(this);
                  this.Ewapper = EwapperHoc({Rowlayout:this.props.Rowlayout})
                }
                getElement(){
                    const SearchItem = this.Eform
                    return this.props.searchPanel?(<SearchItem/>):null;
                }
                handleSearch(e){
                   if(!this.props.searchPanel.submit){throw ReferenceError("EFormHoc params must be have submit props！")}
                   this.props.searchPanel.submit.call(this,e,that.props);
                }
                handleReset(){
                   this.props.form.resetFields();
                }
                render(){		
                      return(
                        <this.Ewapper>
                           {this.getElement()}
                        </this.Ewapper>
                      )
                }
              }
              return Form.create()(EFormWrapper)
            }
            
            export default{
              name:"EFormHoc",
              component:EFormHoc
            }            
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          2、必须以如下方式导出组件
        </p>
        <EcodeHighlight language='tsx'>{`
            export default{
              name:"EFormHoc",
              component:EFormHoc
            }            
          `}
        </EcodeHighlight>
        <h1 className="e-title"> 系统路由 @pages/**/router.ts （新建页面）</h1>
        <p className="empty-line-content">
          1、在 <code className="empty-code">@pages</code>目录下新建页面目录 并新建一个组件 *.tsx
        </p>
        <p className="empty-line-content">
          2、路由用 <code className="empty-code">require.context</code> 做了去中心化处理,要求按如下方式导出
        </p>
        <EcodeHighlight language='tsx'>{`
            export default [
              {
                //匹配的路径
                path:'/home/rules/intro',
                //组件相对pages目录的路径
                component:"Rules/intro/index",
              },
              {
                path:'/home/rules/web',
                component:"Rules/web/index",
              },
              {
                path:'/home/rules/mobile',
                component:"Rules/mobile/index",
              }
            ]      
          `}
        </EcodeHighlight>
        <h1 className="e-title"> 全局状态管理 @store/**  （用的react-redux+redux-saga中间件）并进行了简单的封装</h1>
        <p className="empty-line-content">
          <code className="empty-code">以登陆为例 梳理一个流程</code>
        </p>
        <p className="empty-line-content">
          1、在 <code className="empty-code">@store/action-types</code>目录下 <code className="empty-code">index.ts</code>中新建action的type
        </p>
        <EcodeHighlight language='tsx'>{`
            // 登录相关
            export const  LOGIN_REQUEST = "LOGIN_REQUEST";
            export const  LOGIN_SUCCESS = "LOGIN_SUCCESS";
            export const  LOGIN_ERROR = "LOGIN_ERROR";    
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          2、在 <code className="empty-code">@reducers</code>目录下 新建 user.reducer.ts
        </p>
        <EcodeHighlight language='tsx'>{`
            // 登录相关
            import * as types from '../action-types';
            //函数名称要求以state_开头 action函数名结尾  此处为 state_doLogin 
            export const state_doLogin = (state={token:"",error:""},action)=>{
              switch(action.type){
                case types.LOGIN_SUCCESS:
                  return { ...state,token:action.token }
                case types.LOGIN_ERROR:
                  return { ...state,error:action.error }
                default:
                  return state;
              }
            }    
          `}
        </EcodeHighlight>
        <p className="empty-line-content">
          3、用HOC的思想对<code className="empty-code">react-redux中的connect 函数</code>做了一层逻辑抽象 ，不必在每个子组件中都用 connect 去操作store
        </p>
        <p>只需在 <code className="empty-code">@connect/controller.ts中进行一次配置，如下</code> </p>
        <EcodeHighlight language='tsx'>{`
          const controller = { //key: action-type value:action函数名
            LOGIN: "doLogin",
          };
          export default controller;
        `}
        </EcodeHighlight>
        <p className="empty-line-content">
          4 、在<code className="empty-code">@actions</code>目录下新建相应的action操作函数
        </p>
        <EcodeHighlight language='tsx'>{`
          import * as types from '../action-types';
          export default {
            doLogin(username,password){
              return {type:types.LOGIN_REQUEST,username,password}
            },
            logout(){
              return {type:types.LOGOUT_REQUEST}
            }
          }          
        `}
        </EcodeHighlight>
        <p className="empty-line-content">
          5、回到组件中
        </p>
        <EcodeHighlight language='tsx'>{`
          import React, { Component } from 'react';
          ...
    
          // 配置action 函数
          @connectAid([Actions.LOGIN])
          //在组件的props 中便能获取到action函数和所有的状态 
          class doLogin extends Component<any, any>{
              refForm
              constructor(props) {
                 ...
              }
              validataFunc(registerForm){
                  ...
              }
              handleSubmit(event){
                  ...
                  //派发action
                  this.props.Actions.doLogin('username',1234);
              }
              render() {
                  return (
                     ...
                  )
              }
          }
          
          export default doLogin;              
        `}
        </EcodeHighlight>
        <p className="empty-line-content">
          6、关于<code className="empty-code">异步action</code> 我们用的<code className="empty-code">redux-saga</code>来做的处理
        </p>
        <EcodeHighlight language='tsx'>{`
          import { all, call ,put, takeEvery } from "redux-saga/effects";
          import * as types from '../action-types';
          import { push } from 'connected-react-router'
          import service from "@service/load-service";
          
          interface Login{
            type:string,
            username:string,
            password:string|number
          }
          
          function* login(){
            yield takeEvery(types.LOGIN_REQUEST,function*({type,username,password}:Login){
              try{
                // 接口调用
                let token = yield call(service.system.login,username,password);
                yield put({type:types.LOGIN_SUCCESS,token});
                yield put(push('/home/home'));
                return token;
               }catch(error){
                put({type:types.LOGIN_ERROR,error});
               }	
            });
          
          }
          
          export function* rootSaga({dispatch,getState}){
            yield all([login()])
          }                        
        `}
        </EcodeHighlight>
        <h1 className="e-title"> 接口调用规范 @service/** </h1>
        <p className="empty-line-content">
          1、在<code className="empty-code">@service</code> 目录下新建 *.api.ts 
        </p>
        <EcodeHighlight language='tsx'>{`
          export default {
            //命名空间  业务模块名称
            namespace:"system",
            // 定义接口函数 
            apis:{
              login(username,password){
                return new Promise((resolve,reject)=>{
                  setTimeout(()=>{
                    resolve(username+password);
                  },1000)
                })
              }
            }
          }                  
        `}
        </EcodeHighlight>
        <p className="empty-line-content">
          2 、调用
        </p>
        <EcodeHighlight language='tsx'>{`
          ...
          import service from "@service/load-service";
          
          ...
          function* login(){
            yield takeEvery(types.LOGIN_REQUEST,function*({type,username,password}:Login){
              try{
                // 接口调用
                let token = yield call(service.system.login,username,password);
                ...
               }catch(error){
                ...
               }	
            });
          
          }
          
          ...                      
        `}
        </EcodeHighlight>
      </>
    );
  }
}

export default Web;
