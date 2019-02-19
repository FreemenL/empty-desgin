import React from 'react'
import { Button } from 'antd';
import styles from './index.less';

class MyComponent extends React.Component {

    constructor(props){
        super(props);
        this.handleStart = this.handleClick.bind(this,'start');
        this.handleJump = this.handleClick.bind(this,'jump');
    }

    handleClick(handle){
        this.handleProxy[handle](this);
    }

    handleProxy={
       start(_this){
          _this.props.jump("/home/rules/intro");
       },
       jump(){
          window.open('https://github.com/FreemenL/emptyd-admin-webpack')
       }
    }
    handleStart
    handleJump
    render() {
        return (
            <div className={styles['empty-page-container']}>
               <h2 className={`${styles['empty-page-container-title']} animated fadeInDown`}>Empty desgin</h2>
               <section className={styles['empty-page-container-content']} >
                <p> emptyd 是基于 react + antd + typescript + less 的扩展组件库 </p>
                <p> 主要包括通用小组件、快速开发页面的多风格模板(HOC高阶组件)、通用工具函数、通用样式类 </p>
                <p className={styles["empty-page-container-content-nav"]}> 
                    <Button type="primary" onClick={this.handleStart}>开始使用</Button> 
                    <Button shape="circle" icon="github" onClick={this.handleJump}/>
                </p>
               </section>
            </div>
        )
    }
}

export default MyComponent;
