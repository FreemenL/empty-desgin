import React, { Component } from "react";
import  { EcodeHighlight , Edocument} from 'emptyd';
import { hot } from 'react-hot-loader'; 
@hot(module)
class StyleMedia extends Component<any, any> {
  _addStyle={ color:"#fff", textIndent:"1em"}
  render() {
    return (
      <>
        <h1 className="e-title">全局通用样式</h1>
        <p className="empty-line-content">
            全局引入 <code className="empty-code"> empty-style </code>包
            <code className="empty-code">@import `~empty-style/index.less`;</code>
        </p>
        <h2 className="e-title">字体颜色</h2>
        <p className="empty-line-content e-flex-h-between" >
            <span  className="e-text-blue">e-text-blue</span>
            <span  className="e-text-light-blue">e-text-light-blue</span>
            <span  className="e-text-green"> e-text-green </span>
            <span  className="e-text-yellow"> e-text-yellow </span>
            <span  className="e-text-red">e-text-red</span>
            <span  className="e-text-block">e-text-block </span>  
        </p>
         <EcodeHighlight language='markdown' >
          {`
            <span className="e-text-blue">e-text-blue</span>
            <span className="e-text-light-blue">e-text-light-blue</span>
            <span className="e-text-green"> e-text-green </span>
            <span className="e-text-yellow"> e-text-yellow </span>
            <span className="e-text-red">e-text-red</span>
            <span className="e-text-block">e-text-block </span> 
          `}
        </EcodeHighlight>
        <h2 className="e-title">背景色</h2>
        <p className="empty-line-content e-flex-col" >
            <span style={this._addStyle} className="e-bg-blue" > e-bg-blue</span>
            <span style={this._addStyle} className="e-bg-light-blue" > e-bg-light-blue</span>
            <span style={this._addStyle} className="e-bg-green" > e-bg-green </span>
            <span style={this._addStyle} className="e-bg-yellow" > e-bg-yellow </span>
            <span style={this._addStyle} className="e-bg-red" > e-bg-red</span>
            <span style={this._addStyle} className="e-bg-block" > e-bg-block</span>   
        </p>
        <h2 className="e-title">元素浮动</h2>
        <EcodeHighlight language='markdown' >
          {`
            <section className="e-clear-fix">
                <div className="e-float-left"></div>
                <div className="e-float-right"></div>
            </section>
          `}
        </EcodeHighlight>  
        <h2 className="e-title">flex 布局 </h2>
        <EcodeHighlight language='markdown' >
          {`
            //盒子子元素 水平 垂直 居中
            <section className="e-flex-hz-center">
                <div></div>
                <div></div>
            </section>
            // 盒子子元素 水平 两端对齐
            <section className="e-flex-h-between">
                <div></div>
                <div></div>
            </section>
            // 盒子子元素 水平 等间距对齐 
            <section className="e-flex-h-around">
                <div></div>
                <div></div>
            </section>
            // 盒子子元素 水平 居中
            <section className="e-flex-h-center">
                <div></div>
                <div></div>
            </section>
            //盒子子元素 垂直居中
            <section className="e-flex-v-center">
                <div></div>
                <div></div>
            </section>
            //盒子子元素 底部对齐
            <section className="e-flex-v-bottom">
                <div></div>
                <div></div>
            </section>
            //盒子子元素 顶部对齐
            <section className="e-flex-v-top">
                <div></div>
                <div></div>
            </section>
            //盒子子元素 撑满盒子纵向排列 
            <section className="e-flex-col">
                <div></div>
                <div></div>
            </section>
            //盒子子元素 交叉轴居中
            <section className="e-flex-ac-center">
                <div></div>
                <div></div>
            </section>
            //盒子子元素 交叉轴等距
            <section className="e-flex-ac-around">
                <div></div>
                <div></div>
            </section>
            //盒子子元素 交叉轴两端对齐
            <section className="e-flex-ac-between">
                <div></div>
                <div></div>
            </section>
          `}
        </EcodeHighlight> 
      </>
    );
  }
}

export default StyleMedia;
