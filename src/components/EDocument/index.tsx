import React, { Component } from "react";
import { Table, Divider, Tag } from 'antd';

import EcodeHighlight from '@components/EcodeHighlight';

import styles from './index.less';

const render =  (text ,type) => {
  const textContent = text.replace(/(\b\w+\b)|([<>=(){},.;:"'!])/g,function(content){
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
  components:Array<{code:string,titDescripttion:string,component:React.ReactNode}>,
  documentData:Array<string>,
  title:string,
  doctitle?:string,
  docDescripttion:string,
}

class Edocument extends Component<Props,any>{

  static defaultProps={
    title:"组件标题",
    doctitle:"API",
    docDescripttion:"文档属性描述",
  }

  constructor(props){
    super(props);
    this.iconClick = this.iconClick.bind(this);
  }

  state = {
    //是否显示代码
    showCode:this.props.components.map((doc,idx)=>({showCode:false})),

  }

  iconClick(event){
    const idx = event.target.getAttribute("data-index");    
    this.setState((prevState,props)=>{
      const newState =  {showCode:!(prevState["showCode"][idx]["showCode"])};
      prevState.showCode.splice(idx,1,newState)
      return {showCode:prevState.showCode}
    })
  }

  render(){

    const { components , documentData , title, doctitle, docDescripttion } = this.props;
    const len = components.length;
    return(
      <div className={styles["empty-module"]}>
      <h1 className="empty-title"> { title } </h1>
      {(len&&len>0)&&components.map(({component,titDescripttion,code},index)=>{
        return(
          <section className={styles["empty-module-information-bar"]} key={`${titDescripttion}`}>
          <div  className={styles["empty-module-information-bar-title"]}>
            { component }
          </div>
          <div  className={styles["empty-module-information-bar-panel"]}>
          <code className="empty-code">{ titDescripttion }</code>
            <img data-index={index} onClick={this.iconClick} className={styles["empty-module-information-bar-panel-icon"]} src={this.state["showCode"][index]["showCode"]?"https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"} alt=""/>
          </div>
          {this.state["showCode"][index]["showCode"]?
            <EcodeHighlight.component language='tsx'>
            { code }
            </EcodeHighlight.component>:
            null
          }
        </section>
        )
      })}
      <h1 className="empty-title" style={{marginTop:"100px"}}> { doctitle } </h1>
      <p className="empty-line-content">{ docDescripttion }</p>
      <Table columns={columns} dataSource={documentData} pagination={false} />
    </div>
    )
  }
}

export default {
  name:"Edocument",
  component:Edocument
}
