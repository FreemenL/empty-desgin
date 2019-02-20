import React, { Component } from "react";
import { Button , Modal } from 'antd';
import { Edocument,EtreeHoc ,ElistHoc , Prompt , EfabButtonHoc} from 'emptyd';

const confirm = Modal.confirm;
let num = 0;

const data = [{
  key: '1',
  title: 'header',
  explain: "文字标头",
  type: "string",
  default: '-',
},{
  key: '2',
  title: 'minHeight',
  explain: "初始高度",
  type:"string",
  default: '-',
},{
  key: '3',
  title: ' span ',
  explain: "对应antd的Grid栅格 值为 1~24",
  type:"number",
  default: '12',
},{
  key: '4',
  title: ' isSearch ',
  explain: " 是否开启列表查询 ",
  type:"boolean",
  default: '-',
},{
  key: '5',
  title: ' search ',
  explain: " 查询表单配置项 ",
  type:"Array<{field:string,type:string,label:string,placeholder:string,antdFormItemOptions:object}>",
  default: '[ ]',
},{
  key: '6',
  title: ' showPage ',
  explain: " 详情页面配置函数 返回的react组件 将被渲染至详情页面 ",
  type:"( )=>ReactNode",
  default: '-',
},{
  key: '7',
  title: ' getData ',
  explain: " 接口调用函数 参数params 为每次点击查询时候需要进行筛选的参数 返回 Promise",
  type:"( params )=> Promise",
  default: '-',
},{
  key: '8',
  title: ' handlePanel ',
  explain: " 控制按钮组 ",
  type:"Array<{node:function,onclick:function}>",
  default: '-',
}];

class EtreeHocDocuments extends Component<any, any> {
  render() {
    return (
        <Edocument
          title="树形菜单组件:EtreeHoc" 
          components={[{
            component:React.createElement(EtreeHoc({
              header:"组织架构",
              minHeight:"150px",
              span:12,
              isSearch:true,
              search:[
                {
                  field:'departmentId',
                  type:"Input",
                  label:"部门",
                  placeholder:'请输入部门',
                  antdFormItemOptions:{
                    colon:false
                  },
                }
              ],
                showPage(){
                  return ElistHoc({
                     type:"default",
                     data:{
                       "部门名称":"title",
                       "部门id":"key"
                     }
                   })
               },
               getData(treeNode){
                 return new Promise((resolve,reject)=>{
                   setTimeout(()=>{
                     let res = num!=0?[
                       { title: '测试数据-C', key: `${Math.random()}-0` },
                       { title: '测试数据-C', key: `${Math.random()}-1` },
                     ]:[
                       { title: '测试数据-P', key: '0' , id:1},
                       { title: '测试数据-P', key: '1' , id:2},
                       { title: '测试数据-P', key: '2', isLeaf: true ,id:3},
                     ];
                     num++
                     resolve(res);
                   },500)      
                 })
              },
              handlePanel:[{
                  node:(props)=><Button type="primary" size="small" {...props}>新增子节点</Button>,
                  click:function(this:any,treeData){
                    Prompt["success"](`在${treeData.key} 节点上新增`);   
                  }
                },{
                  node:(props)=><Button size="small" {...props}>详情</Button>,
                  click:function(this:any,treeData){
                    this.setState((prevState,props)=>{
                      return {
                        visible:true,
                        params:treeData
                      }
                    })        
                  }
                },{
                  node:(props)=><Button size="small" type="danger" {...props}>删除</Button>,
                  click:function(treeData){
                    confirm({
                      title: `确定删除当前(${treeData.title})数据？`,
                      okText: '确认',
                      okType: 'danger',
                      cancelText: '取消',
                      onOk:()=>{
                        Prompt["success"]("删除成功！");
                      }
                    })
                  }
                },{
                  node:EfabButtonHoc({
                    name:"更多",
                    direction:"circle",
                    renderItem:[
                        {
                            name:"锁定",
                            icon:"lock",
                            id:"001",
                            click(id){
                                Prompt['info'](`点击了${id}按钮`)
                            }
                        },{
                            name:'爱心',
                            icon:"heart",
                            id:"002",
                            click(id){
                                Prompt['info'](`点击了${id}按钮`)
                            }
                        },{
                            name:'解锁',
                            icon:"unlock",
                            id:"003",
                            click(id){
                                Prompt['info'](`点击了${id}按钮`)
                            }
                        },{
                            name:'资料',
                            icon:"folder",
                            id:"004",
                            click(id){
                                Prompt['info'](`点击了${id}按钮`)
                            }
                        }
                    ]
                })(),
                }
              ]
            })),
            titDescripttion:"基本用法",
            code:`
              import { Edocument,EtreeHoc ,ElistHoc , Prompt , EfabButtonHoc} from 'emptyd';
    
              ReactDOM.render(
                React.createElement(EtreeHoc({
                  header:"组织架构",
                  minHeight:"150px",
                  span:12,
                  isSearch:true,
                  search:[
                    {
                      field:'departmentId',
                      type:"Input",
                      label:"部门",
                      placeholder:'请输入部门',
                      antdFormItemOptions:{
                        colon:false
                      },
                    }
                  ],
                  showPage(){
                      return ElistHoc({
                         type:"default",
                         data:{
                           "部门名称":"title",
                           "部门id":"key"
                         }
                       })
                  },
                  getData(treeNode){
                    return new Promise((resolve,reject)=>{
                      setTimeout(()=>{
                        let res = num!=0?[
                          { title: '测试数据-C', key: Math.random()+"-0" },
                          { title: '测试数据-C', key:  Math.random()+"-1" },
                        ]:[
                          { title: '测试数据-P', key: '0' , id:1},
                          { title: '测试数据-P', key: '1' , id:2},
                          { title: '测试数据-P', key: '2', isLeaf: true ,id:3},
                        ];
                        num++
                        resolve(res);
                      },500)      
                    })
                  },
                  handlePanel:[{
                      node:(props)=><Button type="primary" size="small" {...props}>新增子节点</Button>,
                      click:function(this:any,treeData){
                        Prompt["success"]("在"+treeData.key+"节点上新增");   
                      }
                    },{
                      node:(props)=><Button size="small" {...props}>详情</Button>,
                      click:function(this:any,treeData){
                        this.setState((prevState,props)=>{
                          return {
                            visible:true,
                            params:treeData
                          }
                        })        
                      }
                    },{
                      node:(props)=><Button size="small" type="danger" {...props}>删除</Button>,
                      click:function(treeData){
                        confirm({
                          title: "确定删除当前"+treeData.title+"数据?",
                          okText: '确认',
                          okType: 'danger',
                          cancelText: '取消',
                          onOk:()=>{
                            Prompt["success"]("删除成功！");
                          }
                        })
                      }
                    }
                  ]
                }))
              )
            `
          }]}
          docDescripttion="EtreeHoc属性如下:"   
          documentData={data}        
        />
    );
  }
}

export default EtreeHocDocuments;
