import React, { Component } from "react";
import components from '@components/load-component';
import { config } from '@config/index';
const { Edocument, EListHoc ,Prompt ,EheaderHoc} = components;


const data = [{
  key: '1',
  title: 'LogoSrc',
  explain: "Logo 图片",
  type: "string",
  default: '-',
},{
  key: '2',
  title: 'name',
  explain: "系统名称",
  type:"string",
  default: '-',
},{
  key: '3',
  title: ' menuList ',
  explain: "菜单导航数组",
  type:"Array<{pathname:string,title:string,icon:string,sub:Array}>",
  default: '-',
},{
  key: '4',
  title: ' userMsg ',
  explain: "用户信息 ",
  type:" object ",
  default: '-',
},{
  key: '5',
  title: ' getMenu ',
  explain: " 用户导航 ",
  type:" React.ReactNode ",
  default: '-',
}];


class EheaderHocDocuments extends Component<any, any> {
  getMenu() {
    return EListHoc.component({
      type: "panel",
      width: "150px",
      data: [{
        icon: "user",
        title: "个人中心",
        click: function () {
          Prompt.component["info"]("个人中心")
        }
      }, {
        icon: "setting",
        title: "个人设置",
        click: function () {
          Prompt.component["info"]("个人设置");
        }
      }]
    });
  }
  render() {
    const { LogoSrc, name, menuList, userMsg } = config;
    return (
      <div className={"animated fadeIn emptyd-content"}>
        <Edocument.component
          title="头部组件:EheaderHoc" 
          components={[{
            component:React.createElement(EheaderHoc.component({
              LogoSrc,
              name,
              menuList,
              userMsg,
              getMenu: this.getMenu
            })),
            titDescripttion:"基本用法",
            code:`
              import components from '@components/load-component';
              import { config } from '@config/index';
              const { Edocument, EListHoc ,Prompt ,EheaderHoc} = components;

              class EheaderHocDocuments extends Component<any, any> {
                getMenu() {
                  return EListHoc.component({
                    type: "panel",
                    width: "150px",
                    data: [{
                      icon: "user",
                      title: "个人中心",
                      click: function () {
                        Prompt.component["info"]("个人中心")
                      }
                    }, {
                      icon: "setting",
                      title: "个人设置",
                      click: function () {
                        Prompt.component["info"]("个人设置");
                      }
                    }]
                  });
                }
                render(){
                  const { LogoSrc, name, menuList, userMsg } = config;
                  return(
                    React.createElement(EheaderHoc.component({
                      LogoSrc,
                      name,
                      menuList,
                      userMsg,
                      getMenu: this.getMenu
                    }))
                  )
                }
              }
            `
          }]}
          docDescripttion="EheaderHoc属性如下:"   
          documentData={data}        
        />
      </div>
    );
  }
}

export default EheaderHocDocuments;
