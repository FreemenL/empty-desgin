import React, { Component } from 'react';
import styles from './index.less';

function ELoading(){
    return(
        <div className={styles["lds-spinner"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}


export default{
	name:"ELoading",
	component:ELoading
}

