import React, { Component } from "react";
import components from '@components/load-component';
const { Edocument, Prompt , EFabButtonHoc } = components;

const data = [{
  key: '1',
  title: 'name',
  explain: "中心按钮名称",
  type: "string",
  default: '-',
},{
  key: '2',
  title: 'direction',
  explain: "浮动按钮方向 top | right | bottom | left | circle",
  type:"string",
  default: 'top',
},{
  key: '3',
  title: ' centerStyle ',
  explain: "中心按钮样式",
  type:"object",
  default: '-',
},{
  key: '4',
  title: ' renderItem ',
  explain: "浮动按钮数组 ",
  type:" Array ",
  default: '-',
},{
  key: '5',
  title: ' delay ',
  explain: " 动画延时 ",
  type:" string ",
  default: '.2',
},{
    key: '6',
    title: 'circleBtnDirection',
    explain: "direction为circle时,按钮环绕方向顺序",
    type:" string ",
    default: `['top','right','bottom','left']`,
  }];


class EFabButtonHocDocuments extends Component<any, any> {
  render() {
    return (
      <div className={"animated fadeIn emptyd-content"}>
        <Edocument.component
          title="浮动按钮:EFabButtonHoc" 
          components={[{
            component:(
                <div>
                    {
                        React.createElement(EFabButtonHoc.component({
                            name:"看右边",
                            direction:"right",
                            centerStyle:{marginRight:'40px'},
                            renderItem:[
                                {
                                    name:"锁定",
                                    icon:"lock",
                                    id:"001",
                                    click(id){
                                        Prompt.component['info'](`点击了${id}按钮`)
                                    }
                                },{
                                    name:'爱心',
                                    icon:"heart",
                                    id:"002",
                                    click(id){
                                        Prompt.component['info'](`点击了${id}按钮`)
                                    }
                                },{
                                    name:'解锁',
                                    icon:"unlock",
                                    id:"003",
                                    click(id){
                                        Prompt.component['info'](`点击了${id}按钮`)
                                    }
                                },{
                                    name:'资料',
                                    icon:"folder",
                                    id:"004",
                                    click(id){
                                        Prompt.component['info'](`点击了${id}按钮`)
                                    }
                                }
                            ]
                        })())
                    }
                    {React.createElement(EFabButtonHoc.component({
                    name:"点我",
                    direction:"top",
                    renderItem:[
                        {
                            name:"锁定",
                            icon:"lock",
                            id:"001",
                            click(id){
                                Prompt.component['info'](`点击了${id}按钮`)
                            }
                        }
                    ]
                })())}
                {React.createElement(EFabButtonHoc.component({
                    name:"更多",
                    direction:"circle",
                    centerStyle:{marginLeft:'40px'},
                    renderItem:[
                        {
                            name:"锁定",
                            icon:"lock",
                            id:"001",
                            click(id){
                                Prompt.component['info'](`点击了${id}按钮`)
                            }
                        },{
                            name:'爱心',
                            icon:"heart",
                            id:"002",
                            click(id){
                                Prompt.component['info'](`点击了${id}按钮`)
                            }
                        },{
                            name:'解锁',
                            icon:"unlock",
                            id:"003",
                            click(id){
                                Prompt.component['info'](`点击了${id}按钮`)
                            }
                        },{
                            name:'资料',
                            icon:"folder",
                            id:"004",
                            click(id){
                                Prompt.component['info'](`点击了${id}按钮`)
                            }
                        }
                    ]
                })())}
                {
                    React.createElement(EFabButtonHoc.component({
                        name:"点我",
                        direction:"bottom",
                        centerStyle:{marginLeft:'40px'},
                        renderItem:[
                            {
                                name:"锁定",
                                icon:"lock",
                                id:"001",
                                click(id){
                                    Prompt.component['info'](`点击了${id}按钮`)
                                }
                            },{
                                name:'爱心',
                                icon:"heart",
                                id:"002",
                                click(id){
                                    Prompt.component['info'](`点击了${id}按钮`)
                                }
                            },{
                                name:'解锁',
                                icon:"unlock",
                                id:"003",
                                click(id){
                                    Prompt.component['info'](`点击了${id}按钮`)
                                }
                            },{
                                name:'资料',
                                icon:"folder",
                                id:"004",
                                click(id){
                                    Prompt.component['info'](`点击了${id}按钮`)
                                }
                            }
                        ]
                    })())
                }
                {
                    React.createElement(EFabButtonHoc.component({
                        name:"看左边",
                        direction:"left",
                        centerStyle:{marginLeft:'40px'},
                        renderItem:[
                            {
                                name:"锁定",
                                icon:"lock",
                                id:"001",
                                click(id){
                                    Prompt.component['info'](`点击了${id}按钮`)
                                }
                            },{
                                name:'爱心',
                                icon:"heart",
                                id:"002",
                                click(id){
                                    Prompt.component['info'](`点击了${id}按钮`)
                                }
                            },{
                                name:'解锁',
                                icon:"unlock",
                                id:"003",
                                click(id){
                                    Prompt.component['info'](`点击了${id}按钮`)
                                }
                            },{
                                name:'资料',
                                icon:"folder",
                                id:"004",
                                click(id){
                                    Prompt.component['info'](`点击了${id}按钮`)
                                }
                            }
                        ]
                    })())
                }
            </div>),
            titDescripttion:"浮动按钮支持单方向和多方向渲染，多方向渲染时默认顺序为上右下左，也可自行配置",
            code:`
              import components from '@components/load-component';
              const { EFabButtonHoc ,Prompt } = components;

              class EFabButtonHocDocuments extends Component<any, any> {
                render(){
                  return(
                    React.createElement(EFabButtonHoc.component({
                        name:"更多",
                        direction:"circle",
                        centerStyle:{marginLeft:"40px"},
                        renderItem:[
                            {
                                name:"锁定",
                                icon:"lock",
                                id:"001",
                                click(id){
                                    Prompt.component['info']("点击了"+id+"按钮")
                                }
                            },{
                                name:'爱心',
                                icon:"heart",
                                id:"002",
                                click(id){
                                    Prompt.component['info']("点击了"+id+"按钮")
                                }
                            },{
                                name:'解锁',
                                icon:"unlock",
                                id:"003",
                                click(id){
                                    Prompt.component['info']("点击了"+id+"按钮")
                                }
                            },{
                                name:'资料',
                                icon:"folder",
                                id:"004",
                                click(id){
                                    Prompt.component['info']("点击了"+id+"按钮")
                                }
                            }
                        ]
                    })()))
                  )
                }
              }
            `
          }]}
          docDescripttion="EFabButtonHoc属性如下:"   
          documentData={data}        
        />
      </div>
    );
  }
}

export default EFabButtonHocDocuments;