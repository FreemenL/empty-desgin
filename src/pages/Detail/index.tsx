import React, { Component } from 'react';
import styles from './index.less';
import { Toast } from 'antd-mobile';

class Test extends Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            dogOptions: [{
                name: "线上犬证办理",
                icon: ""
            }, {
                name: "办证点地图",
                icon: ""
            }, {
                name: "办理结果查询",
                icon: ""
            }, {
                name: "精彩活动1123",
                icon: ""
            },]
        }
        this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck(event) {
       this.props.history.push("/home/2")
    }
    render() {
        return (
            <div className={styles.container}>
              detail
            </div>
        )
    }
}

export default Test;