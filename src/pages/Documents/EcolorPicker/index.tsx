import React, { Component } from "react";
import  { Edocument ,  EcolorPicker , Prompt } from 'emptyd';

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
  explain: "初始颜色值,支持十六进制和RGB模式，如 #FFFFFF、rgba(255,214,21,0.9)",
  type:"string",
  default: '#ddd',
},{
  key: '5',
  title: 'showValue',
  explain: "是否用有边栏显示颜色值",
  type:"boolean",
  default: 'true',
},{
  key: '6',
  title: 'animation',
  explain: "动画  flipInY | slideInRight |fadeIn	| rotateInDownRight | zoomIn |swing 等",
  type:"string",
  default: "flipInY",
},{
  key: '7',
  title: 'handleChange',
  explain: "颜色改变时的回调",
  type:"function(color, event)",
  default: '-',
}];

class EcolorPickerDocuments extends Component<any, any> {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(color, event){
    Prompt["info"](`您选择了 ${color.hex} `);
  }

  render() {
    return (
        <Edocument
          title="颜色选择器:EcolorPicker"
          components={[{
            component:(<EcolorPicker handleChange={this.handleChange} defaultValue="#f40"/>),
            titDescripttion:"基本用法",
            code:`
              import  { EcolorPicker , Prompt } from 'emptyd';
    
              class EcolorPickerDemo exrends Component{
                constructor(props){
                  super(props);
                  this.handleChange = this.handleChange.bind(this);
                }
              
                handleChange(color, event){
                  Prompt["info"]("您选择了 "$"{color.hex} ");
                }
                
                render(){
                  return(
                    <EcolorPicker handleChange={this.handleChange} defaultValue="#f40"/>
                  )
                }
              }
            ` 
          },{
            component:(<EcolorPicker handleChange={this.handleChange} defaultValue="#f40" cursor="pointer"  animation="rotateInDownRight"/>),
            titDescripttion:"rotateInDownRight动画",
            code:`
              import  { EcolorPicker , Prompt } from 'emptyd';
    
              class EcolorPickerDemo exrends Component{
                constructor(props){
                  super(props);
                  this.handleChange = this.handleChange.bind(this);
                }
              
                handleChange(color, event){
                  Prompt["info"]("您选择了 "$"{color.hex} ");
                }
                
                render(){
                  return(
                    <EcolorPicker handleChange={this.handleChange} defaultValue="#f40"  animation="slideInRight"/>
                  )
                }
              }
            ` 
          },{
            component:(<EcolorPicker handleChange={this.handleChange} defaultValue="#f40" showValue={false} cursor="pointer" animation="slideInRight"/>),
            titDescripttion:"回填区域不显示颜色值，且cursor属性为:pointer的情况",
            code:`
              import  { EcolorPicker , Prompt } from 'emptyd';
    
              class EcolorPickerDemo exrends Component{
                constructor(props){
                  super(props);
                  this.handleChange = this.handleChange.bind(this);
                }
              
                handleChange(color, event){
                  Prompt["info"]("您选择了 "$"{color.hex} ");
                }
                
                render(){
                  return(
                    <EcolorPicker handleChange={this.handleChange} defaultValue="#f40" showValue={false} cursor="pointer"/>
                  )
                }
              }
            ` 
          }]}
          docDescripttion="EcolorPicker 属性如下:"   
          documentData={data}        
        />
    );
  }
}

export default EcolorPickerDocuments;
