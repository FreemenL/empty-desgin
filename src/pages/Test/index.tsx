import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { compose } from 'redux';
import styles from './index.less';
import connectAid, { Actions } from '@store/connect';

@connectAid([Actions.LOGIN])
@hot(module)
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
    handleCheck(event){
        this.props.Actions.doLogin('username',1234);
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles["container-dog-pic"]}></div>
                <ul onClick={this.handleCheck} className={styles["container-dog-options"]}>
                    {this.state.dogOptions.map((option, index) => {
                        return(
                            <li key={option.name}><em>{option.icon}</em>{option.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Test;