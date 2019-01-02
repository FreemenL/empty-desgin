import React from 'react'
import ReactDOM from 'react-dom'
import { Prompt } from 'react-router'
import {
    Link
} from 'react-router-dom';

class MyComponent extends React.Component {
    render() {
        return (
            <div>
              <Prompt message="表单尚未保存"/>
              <Link to="/">取消</Link>
              <Link to="/home">保存</Link>
            </div>
        )
    }
}
export default MyComponent;
