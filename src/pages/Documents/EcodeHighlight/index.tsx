import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import components from '@components/load-component';


const { Edocument, EcodeHighlight } = components;

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

@hot(module)
class EcodeHighlightDocuments extends Component<any, any> {
  render() {
    return (
      <div className={"animated fadeIn emptyd-content"}>
        <Edocument.component
          title="代码高亮:EcodeHighlight" 
          components={[{
            component:(<EcodeHighlight.component language='tsx'>
                {`
                import components from '@components/load-component';
                const { EcodeHighlight } = components;

                const menus = [{pathname:"/home/components/Ebeard",title:"面包屑导航：Ebeard"},{pathname:"/home/components/EcodeHighlight",title:"代码高亮：EcodeHighlight"}]

                ReactDOM.render(
                  <Ebeard.component menus={menus} />
                )
              `} 
              </EcodeHighlight.component>),
             titDescripttion:"基本用法",
             code:`
              import components from '@components/load-component';
              const { EcodeHighlight } = components;
    
              ReactDOM.render(
                <EcodeHighlight.component language='tsx'>
                  {"
                  import components from '@components/load-component';
                  const { EcodeHighlight } = components;
    
                  const menus = [{pathname:"/home/components/Ebeard",title:"面包屑导航：Ebeard"},{pathname:"/home/components/EcodeHighlight",title:"代码高亮：EcodeHighlight"}]
    
                  ReactDOM.render(
                    <Ebeard.component menus={menus} />
                  )
                "} 
                </EcodeHighlight.component>
              )
              `
          }]}
          docDescripttion="EcodeHighlight属性如下:"   
          documentData={data}        
        />
      </div>
    );
  }
}

export default EcodeHighlightDocuments;
