import React, { Component } from "react";
import { Edocument, Etext } from 'emptyd';

const data = [{
  key: '1',
  title: 'style',
  explain: "文字样式 请以原型属性的方式添加",
  type: "object",
  default: '-',
},{
  key: '2',
  title: ' mode ',
  explain: " 动画模式 smooth|reverse|random|sync ",
  type:" string ",
  default: 'smooth',
},{
  key: '3',
  title: ' duration ',
  explain: " 动画时长 ",
  type:" number  ",
  default: '450',
},{
  key: '4',
  title: ' delay ',
  explain: " 动画延时 ",
  type:" number  ",
  default: '0',
}];

class EtextDocuments extends Component<any, any> {
  _testStyle={fontSize:"20px",color:"#000"}
  render() {
    return (
        <Edocument
          title="文字动效:Etext" 
          components={[{
            component:
              <Etext 
                style={this._testStyle}
                mode = "sync"
              >
                文字动效展示文字动效展示
              </Etext>,
            titDescripttion:"基本用法 : 同时下落",
            code:`
              import { Etext } from 'emptyd';

              ReactDOM.render(
                React.createElement(Etext,{
                  mode = "sync"
                },"文字动效展示文字动效展示")
              )
            `
          },{
            component:
              <Etext 
                style={this._testStyle}
                duration={800}
                delay={500}
              >
                文字动效展示文字动效展示
              </Etext>,
            titDescripttion:" duration={800}  delay={500} ",
            code:`
              import { Etext } from 'emptyd';

              ReactDOM.render(
                React.createElement(Etext,{
                  duration={800}
                  delay={500}
                },"文字动效展示文字动效展示")
              )
            `
          }]}
          docDescripttion="Etext属性如下:"   
          documentData={data}        
        />
    );
  }
}

export default EtextDocuments;
