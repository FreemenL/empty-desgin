import React, { Component } from "react";
import { Edocument, ElistHoc ,Prompt } from 'emptyd';


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
},{
  key: '4',
  title: ' textAlign ',
  explain: " 文本对齐方式 interlayer为false时无效 ",
  type:"string",
  default: 'center',
},{
  key: '5',
  title: ' data ',
  explain: " 列表数据 类型是array或者object 用例见上",
  type:"Array<{icon:string,title:string,click:Function}>|object",
  default: '-',
}];

const List = ElistHoc({
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
    }]
});

const MenuList = ElistHoc({
  type: "panel",
  width: "350px",
  data: [{
    icon: "user",
    title: "个人中心",
    click: function () {
      Prompt["info"]("个人中心")
    }
  }, {
    icon: "setting",
    title: "系统设置",
    click: function () {
      Prompt["info"]("系统设置");
    }
  }]
});


const DetailList = React.createElement(ElistHoc({
  type:"default",
  data:{
    "班次名称":"name",
    "所属部门":"deptName",
    "班次类型":"dutyType",
    "上班时间":"startTime",
    "下班时间":"endTime",
    "上班打卡时间范围":"onRange",
    "下班打卡时间范围":"offRange",
    "午休时间":"duration"
  }}),{
    params:{
      name:"freemenL",
      deptName:"技术研发部",
      dutyType:"早班",
      startTime:"9:00",
      endTime:"6:00",
      onRange:"9:00-9:30",
      offRange:"6:00-11:59",
      duration:"1小时"
    }
  },null)

class ElistHocDocuments extends Component<any, any> {
  render() {
    return (
        <Edocument
          title="列表组件:ElistHoc" 
          components={[{
            component:List,
            titDescripttion:"基本用法",
            code:`
              import { ElistHoc ,Prompt } from 'emptyd';
    
              const List = ElistHoc({
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
          },{
            component:MenuList,
            titDescripttion:"作为菜单项使用的时候可以添加 点击事件",
            code:`
              import { ElistHoc ,Prompt } from 'emptyd';
    
              const MenuList = ElistHoc({
                type: "panel",
                width: "300px",
                data: [{
                  icon: "user",
                  title: "个人中心",
                  click: function () {
                    Prompt["info"]("个人中心")
                  }
                }, {
                  icon: "setting",
                  title: "系统设置",
                  click: function () {
                    Prompt["info"]("系统设置");
                  }
                }]
              });

              ReactDOM.render(
                <MenuList />
              )
            `
          },{
            component:DetailList,
            titDescripttion:"表格形式 作为详情页展示",
            code:`
              import { ElistHoc ,Prompt } from 'emptyd';
    
              const DetailList = React.createElement(ElistHoc({
                type:"default",
                data:{
                  "班次名称":"name",
                  "所属部门":"deptName",
                  "班次类型":"dutyType",
                  "上班时间":"startTime",
                  "下班时间":"endTime",
                  "上班打卡时间范围":"onRange",
                  "下班打卡时间范围":"offRange",
                  "午休时间":"duration"
                }}),{
                  params:{
                    name:"freemenL",
                    deptName:"技术研发部",
                    dutyType:"早班",
                    startTime:"9:00",
                    endTime:"6:00",
                    onRange:"9:00-9:30",
                    offRange:"6:00-11:59",
                    duration:"1小时"
                  }
                },null)

              ReactDOM.render(
                <DetailList/>
              )
            `
          }]}
          docDescripttion="ElistHoc属性如下:"   
          documentData={data}        
        />
    );
  }
}

export default ElistHocDocuments;
