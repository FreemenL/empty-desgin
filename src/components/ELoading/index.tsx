import React from 'react';
import styles from './index.less';
import { Spin } from 'antd';

const baseClass = styles["lds-spinner-container"];
const baseClassModel = styles["lds-spinner-model"];
const spinnerClass = styles["lds-spinner"];

function Eloading({children,show=true,model="",...reset}){

    const result = show?(model=="global"?baseClass:`${baseClass} ${baseClassModel}`):"" ;

    return(
        <div className={result}>
            {children&&children}
            {show?<Spin wrapperClassName={show?spinnerClass:""}  spinning={show} {...reset}></Spin>:null}
        </div>
    )
}

export default{
	name:"Eloading",
	component:Eloading
}

