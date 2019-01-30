import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import components from '@components/load-component';

const { Edocument, EListHoc ,Prompt } = components;


const data = [{
  key: '1',
  title: 'type',
  explain: "列表类型 default | panel ",
  type: "string",
  default: 'default',
},{
  key: '2',
  title: 'width',
  explain: "type 类型为 panel 时，列表的宽度 ",
  type:"string",
  default: '-',
},{
  key: '3',
  title: ' interlayer ',
  explain: "是否启用隔行换色",
  type:"boolean",
  default: 'false',
}];

const List = EListHoc.component({
    type: "panel",
    width: "350px",
    interlayer:true,
    data: [{
      title: "列表组件",
    }, {
      title: "代码高亮"
    }, {
      title: "颜色选择器"
    }, {
      title: "抽屉组件"
    }, {
      title: "表单组件"
    }, {
      title: "菜单组件"
    }]
  });
}

@hot(module)
class ElistHocDocuments extends Component<any, any> {
  render() {
    return (
      <div className={"animated fadeIn emptyd-content"}>
        <Edocument.component
          title="列表组件:ElistHoc" 
          components={[{
            component:List,
            titDescripttion:"基本用法",
            code:`
              import components from '@components/load-component';
              const { EListHoc } = components;
    
              const List = EListHoc.component({
                  type: "panel",
                  width: "350px",
                  interlayer:true,
                  data: [{
                    title: "列表组件",
                  }, {
                    title: "代码高亮"
                  }, {
                    title: "颜色选择器"
                  }, {
                    title: "抽屉组件"
                  }, {
                    title: "表单组件"
                  }, {
                    title: "菜单组件"
                  }]
                });
              }

              ReactDOM.render(
                <List />
              )
            `
          }]}
          docDescripttion="ElistHoc属性如下:"   
          documentData={data}        
        />
      </div>
    );
  }
}

export default ElistHocDocuments;
