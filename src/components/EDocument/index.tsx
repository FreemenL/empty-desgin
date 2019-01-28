import React, { Component } from "react";
import { Table, Divider, Tag } from 'antd';
import { hot } from 'react-hot-loader';

import EcodeHighlight from '@components/EcodeHighlight';

import styles from './index.less';

const render =  (text ,type) => {
  const textContent = text.replace(/(\b\w+\b)|([<>{},.;:"'!])/g,function(content){
    return (`<span class="empty-api-${type}">${content}</span>`)
  })
  return (<span dangerouslySetInnerHTML={{__html:textContent}}></span>)
}

const renderParams = text  => {
  return render(text,"marker")
}
const renderType = text  => {
  return render(text,"type")
}

const columns = [{
  title: '参数',
  dataIndex: 'title',
  key: 'title',
  render:renderParams,
}, {
  title: '说明',
  dataIndex: 'explain',
  key: 'explain',
  render:renderParams
}, {
  title: '类型',
  dataIndex: 'type',
  key: 'type',
  render:renderType
}, {
  title: '默认值',
  key: 'default',
  dataIndex: 'default'
}];

interface Props{
  documentData:Array<string>,
  title:string,
  titDescripttion:string,
  doctitle?:string,
  docDescripttion:string,
  component:React.ReactNode
}

class EDocument extends Component<Props,any>{

  static defaultProps={
    title:"组件标题",
    titDescripttion:"组件基本描述",
    doctitle:"API",
    docDescripttion:"文档属性描述",
  }

  constructor(props){
    super(props);
    this.iconClick = this.iconClick.bind(this);
  }

  state = {
    //是否显示行号
    showCode:false
  }

  iconClick(){
    this.setState((prevState,props)=>{
      return {showCode:!prevState.showCode}
    })
  }

  render(){

    const { documentData , title, titDescripttion, doctitle, docDescripttion ,component , code } = this.props;
    
    return(
      <div className={styles["empty-module"]}>
      <h1 className="empty-title"> { title } </h1>
      <section className={styles["empty-module-information-bar"]}>
        <div  className={styles["empty-module-information-bar-title"]}>
          {component}
        </div>
        <div  className={styles["empty-module-information-bar-panel"]}>
        <code className="empty-code">{ titDescripttion }</code>
          <img onClick={this.iconClick} className={styles["empty-module-information-bar-panel-icon"]} src={this.state.showCode?"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"} alt=""/>
        </div>
        {this.state.showCode?
          <EcodeHighlight.component language='tsx'>
          { code }
          </EcodeHighlight.component>:
          null
        }
      </section>
      <h1 className="empty-title" style={{marginTop:"100px"}}> { doctitle } </h1>
      <p className="empty-line-content">{ docDescripttion }</p>
      <Table columns={columns} dataSource={documentData} pagination={false} />
    </div>
    )
  }
}

export default {
  name:"EDocument",
  component:EDocument
}
