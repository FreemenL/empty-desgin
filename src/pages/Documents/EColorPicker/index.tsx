import React, { Component } from "react";
import { Input } from 'antd';
import { hot } from 'react-hot-loader';
import components from '@components/load-component';

import freetool from 'freetool';
const { GetType } = freetool;
import styles from './index.less';

const { EDocument, EColorPicker , Prompt } = components;

const data = [{
  key: '1',
  title: 'width',
  explain: "整个回填区域的宽度，当showValue值为false的时候，该值自动减半",
  type:"string",
  default: '200px',
},{
  key: '2',
  title: 'pickerWidth',
  explain: "颜色选择器面板的宽度",
  type:"number",
  default: '220',
},{
  key: '3',
  title: 'cursor',
  explain: "鼠标在颜色选择器面板上的样式，可选择为css cursor的属性值",
  type:"string",
  default: 'crosshair',
},{
  key: '4',
  title: 'defaultValue',
  explain: "初始颜色值",
  type:"string",
  default: '#000',
},{
  key: '5',
  title: 'showValue',
  explain: "是否用有边栏显示颜色值",
  type:"boolean",
  default: 'true',
},{
  key: '6',
  title: 'handleChange',
  explain: "颜色改变时的回调",
  type:"Function",
  default: '-',
}];

@hot(module)
class EcodeHighlightDocuments extends Component<any, any> {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(color, event){
    Prompt["component"]["info"](`您选择了 ${color.hex} `);
  }

  render() {
    return (
      <div className={"animated fadeIn emptyd-content"}>
        <EDocument.component
          title="颜色选择器:EColorPicker" 
          component={<EColorPicker.component handleChange={this.handleChange} defaultValue="#f40"/>}
          titDescripttion="基本用法"
          code={`
          import components from '@components/load-component';
          const { EColorPicker , Prompt } = components;

          class EColorPickerDemo exrends Component{
            constructor(props){
              super(props);
              this.handleChange = this.handleChange.bind(this);
            }
          
            handleChange(color, event){
              Prompt["component"]["info"]("您选择了 "$"{color.hex} ");
            }
            
            render(){
              return(
                <EColorPicker.component handleChange={this.handleChange} defaultValue="#f40"/>
              )
            }
          }
          )
        `} 
          docDescripttion="EColorPicker 属性如下:"   
          documentData={data}        
        />
      </div>
    );
  }
}

export default EcodeHighlightDocuments;
