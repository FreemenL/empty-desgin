import React, { Component } from 'react';
import styles from './index.less';
import connectAid, { Actions } from '@store/connect';
import { Validator } from 'free-validator';

const avatarPic = require("./assets/img/avatar.png");

@connectAid([Actions.LOGIN])
class doLogin extends Component<any, any>{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.refForm  = React.createRef();
    }

    validataFunc(registerForm){
        let validator = new Validator();
        validator.add(registerForm.elements[0],[{
            strategy:'isNonEmpty',
            errorMsg:'用户名不为空'
        },{
            strategy:'minLength:11',
            errorMsg:'用户名不能小于11位'
        },{
            strategy:'isMobile',
            errorMsg:'用户名必须是手机号'
        }]);
        validator.add(registerForm.elements[1],[{
            strategy:'minLength:4',
            errorMsg:'密码不能小于4位'
        }]);
        let errorMsg = validator.start();
        return errorMsg;
    }

    handleSubmit(event){
        const formElement = this.refForm.current
        const error = this.validataFunc(formElement);
        const errorMsgNode = formElement.getElementsByClassName("validator-tip");
        if(errorMsgNode.length>0){
            Array.from(errorMsgNode).forEach((item:any,index)=>{
                item.parentNode.removeChild(item);
            })
        }
        if(error){
            Array.from(formElement.elements).forEach((item:any,index)=>{
                if(item["name"]==error["name"]){
                    const parentNode = item.parentNode;
                    const insert = parentNode.childElementCount==1;
                    if(insert){
                        let errorNode = document.createElement("p");
                        errorNode.innerHTML = error["errorMsg"];
                        errorNode.className = "validator-tip"
                        parentNode.appendChild(errorNode);
                    }else{
                        parentNode.lastChild.innerHTML = error["errorMsg"];
                    }
                }
            })
            return false;
        }
        this.props.Actions.doLogin('username',1234);
    }

    refForm
    
    render() {
        return (
            <div className={styles.container}>
                <div className={styles["container-login-form"]}>
                    <img src={avatarPic} className={styles["container-login-form-avatar"]}/>
                    <form ref={this.refForm} className={styles['login-form']}>
                        <div className={styles["container-login-form-item"]}>
                            <input type="text" autoComplete="off"  name="username" placeholder="用户名"/>
                        </div>
                        <div className={styles["container-login-form-item"]}>
                            <input type="password" autoComplete="off" name="password" placeholder="密码"/>
                        </div>
                        <button type="button"className={styles["container-login-form-login-btn"]} onClick={this.handleSubmit}>登录</button>                        
                    </form>
                </div>
            </div>
        )
    }
}

export default doLogin;
