import React, { Component } from "react";
import  { Edocument , EcodeHighlight } from 'emptyd';

const data = [{
  key: '1',
  title: 'language',
  explain: "代码语言，目前支持 markup,javascript,tsx,less,json,markdown,bash",
  type:"string",
  default: 'tsx',
},{
  key: '2',
  title: 'showNumber',
  explain: "是否显示行号",
  type:"boolean",
  default: 'true',
},{
  key: '3',
  title: 'children',
  explain: "要高亮的代码",
  type:"string",
  default: '-',
}];

class EcodeHighlightDocuments extends Component<any, any> {
  render() {
    return (
        <Edocument
          title="代码高亮:EcodeHighlight" 
          components={[{
            component:(<EcodeHighlight language='tsx'>
                {`
                import  { Ebeard } from 'emptyd';

                const menus = [{pathname:"/home/components/Ebeard",title:"面包屑导航：Ebeard"},{pathname:"/home/components/EcodeHighlight",title:"代码高亮：EcodeHighlight"}]

                ReactDOM.render(
                  <Ebeard menus={menus} />
                )
              `} 
              </EcodeHighlight>),
             titDescripttion:"基本用法",
             code:`
              import  { EcodeHighlight } from 'emptyd';
    
              ReactDOM.render(
                <EcodeHighlight language='tsx'>
                  {"
                  import components from '@components/load-component';
                  const { EcodeHighlight } = components;
    
                  const menus = [{pathname:"/home/components/Ebeard",title:"面包屑导航：Ebeard"},{pathname:"/home/components/EcodeHighlight",title:"代码高亮：EcodeHighlight"}]
    
                  ReactDOM.render(
                    <Ebeard menus={menus} />
                  )
                "} 
                </EcodeHighlight>
              )
              `
          }]}
          docDescripttion="EcodeHighlight属性如下:"   
          documentData={data}        
        />
    );
  }
}

export default EcodeHighlightDocuments;
