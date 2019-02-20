import React, { Component } from "react";
import  { Edocument , Ebeard } from 'emptyd';



const menus = [{pathname:"/home/documents/Ebeard",title:"面包屑导航：Ebeard"},{pathname:"/home/documents/EcodeHighlight",title:"代码高亮：EcodeHighlight"},{pathname:"/home/documents/EcolorPicker",title:"颜色选择器：EcolorPicker"},{pathname:"/home/documents/EDrawer",title:"抽屉组件：EDrawer"},{pathname:"/home/documents/Eform",title:"表单组件：Eform"},{pathname:"/home/documents/EformHoc",title:"HOC表单组件：EformHoc"},{pathname:"/home/documents/EHeaderHoc",title:"头部组件：EHeaderHoc"},{pathname:"/home/components/EListHoc",title:"列表组件：EListHoc"},{pathname:"/home/components/ELoading",title:"loading组件：ELoading"},{pathname:"/home/components/EMenu",title:"菜单组件：EMenu"},{pathname:"/home/components/EsearchListHoc",title:"查询列表页面：EsearchListHoc"},{pathname:"/home/components/ESiderMenu",title:"侧栏导航：ESiderMenu"},{pathname:"/home/components/EText",title:"动态文字：EText"},{pathname:"/home/components/EtreeHoc",title:"树形菜单：EtreeHoc"},{pathname:"/home/documents/EuploadHoc",title:"上传文件：EuploadHoc"},{pathname:"/home/documents/Eviewer",title:"图片查看器：Eviewer"}]
const data = [{
  key: '1',
  title: 'menus',
  explain: "路由的path和title组成的数组",
  type:"Array<{pathname:string,title:string}>",
  default: '[]',
}];

class EbeardDocuments extends Component<any, any> {
  render() {
    return (
        <Edocument
          title="面包屑导航:Ebeard" 
          components={[{
            component:(<Ebeard menus={menus} />),
            titDescripttion:"基本用法",
            code:`
              import  { Ebeard } from 'emptyd';
    
              const menus = [{pathname:"/home/components/Ebeard",title:"面包屑导航：Ebeard"},{pathname:"/home/components/EcodeHighlight",title:"代码高亮：EcodeHighlight"}]
    
              ReactDOM.render(
                <Ebeard menus={menus} />
              )
            `
          }]}
          docDescripttion="Ebeard属性如下:"   
          documentData={data}        
        />
    );
  }
}

export default EbeardDocuments;
