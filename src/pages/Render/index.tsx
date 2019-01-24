import React, { Component } from "react";
import { Button } from 'antd';

class Test extends Component<any, any> {
  render() {
    return (
      <div className={"animated fadeIn emptyd-content"}>
        <h1 className="empty-title">empty-desgin 简称 emptyd </h1>
        <p className="empty-line-content">
          <code className="empty-code">emptyd</code>
          是基于
          <code className="empty-code">react + typescript + antd</code>
          的扩展组件库，主要包括
          <code className="empty-code">
            通用小组件、快速开发页面的多风格模板(HOC高阶组件)、通用工具函数、通用样式类
          </code>
        </p>
        <p className="empty-line-content">
          <code className="empty-code">emptyd</code> 需要搭配
          <code className="empty-code">emptyd-admin-webpack</code> 脚手架使用
        </p>
        <h1 className="empty-title">emptyd-admin-webpack 脚手架 v0.0.1 </h1>
        <p className="empty-line-content">
          基于    
          <code className="empty-code"> react + typescript + react-router-dom + redux + react-redux + redux-saga + antd + emptyd + less </code> 
          的 webpack4 前端开发环境
        </p>

         <p className="empty-line-content">
          1、针对不同的 
          <code className="empty-code">loader</code> 
          采用了多线程编译，指定精确处理的目录和排除的目录，并开启缓存 极大的加快了编译速度。
        </p>
      
        <p className="empty-line-content">
          2、使用
          <code className="empty-code"> webpack.DllReferencePlugin </code> 
          根据环境自动 提取固定资源，加快编译与打包速度
        </p>
    
        <p className="empty-line-content">
           3、区分生产环境和开发环境,优化代码产出
        </p>
        
        <p className="empty-line-content">
        4、启用
          <code className="empty-code"> cssmodule </code> 
          默认使用
          <code className="empty-code"> postcss + postcss-cssnext </code> 
          ，内置处理浏览器前缀。
        </p>
        
        <p className="empty-line-content">
            5、启用 
          <code className="empty-code"> tree shaking </code>
        </p>
        
        <p className="empty-line-content">
            6、启用  
          <code className="empty-code"> scope hoisting </code>
        </p>

        <p className="empty-line-content">
            7、
          <code className="empty-code">Babel </code>
          配有
          <code className="empty-code"> transform-runtime </code>
          让代码更优化
        </p>

        <p className="empty-line-content">
            8、更改文件,防缓存的hash规则
        </p>
        
        <p className="empty-line-content">
            9、把小图片转成
          <code className="empty-code">base64 码 </code>
        </p>

        <p className="empty-line-content">
         10、快速编译，热更新，自动刷新
        </p>
        
        <p className="empty-line-content">
            11、 <code className="empty-code">resolve.modules</code> 优化模块查找路径
        </p>
        
        <p className="empty-line-content">
            12、 <code className="empty-code">optimization splitChunks</code> 合并公共代码
        </p>
        
        <p className="empty-line-content">
        13、 单独抽离<code className="empty-code">css</code>文件
        </p>
        
        <p className="empty-line-content">
        14、压缩<code className="empty-code">css js</code>文件
        </p>
        
        <p className="empty-line-content">
            15、大文件跳过编译 直接拷贝
        </p>

        <p className="empty-line-content">
         16、自定义<code className="empty-code">loader</code>优化文件引入
        </p>
        
        <p className="empty-line-content">
        17、自定义<code className="empty-code">plugin</code>输出编译产出
        </p>

        <p className="empty-line-content">
        18、<code className="empty-code">nodemon</code>监听配置文件改动
        </p>

        <p className="empty-line-content">
        19、系统级的错误提示
        </p>
 
        <p className="empty-line-content">
        20、端口冲突自动切换
        </p>
 
        <p className="empty-line-content">
         21、自动生成编译日志
        </p>
        
        <p className="empty-line-content">
         22、编译结果可视化
        </p>

        <p className="empty-line-content">
         23、本地端口运行打包后项目
        </p>

        <p className="empty-line-content">
          24、脚手架 配置化
        </p>

      </div>
    );
  }
}

export default Test;
