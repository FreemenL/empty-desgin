import React, { Component } from "react";
import  {  Edocument, Prompt , EfabButtonHoc} from 'emptyd';

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


class EfabButtonHocDocuments extends Component<any, any> {
  render() {
    return (
        <Edocument
          title="浮动按钮:EfabButtonHoc" 
          components={[{
            component:(
                <div>
                    {
                        React.createElement(EfabButtonHoc({
                            name:"看右边",
                            direction:"right",
                            centerStyle:{marginRight:'40px'},
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
                        })())
                    }
                    {React.createElement(EfabButtonHoc({
                    name:"点我",
                    direction:"top",
                    renderItem:[
                        {
                            name:"锁定",
                            icon:"lock",
                            id:"001",
                            click(id){
                                Prompt['info'](`点击了${id}按钮`)
                            }
                        }
                    ]
                })())}
                {React.createElement(EfabButtonHoc({
                    name:"更多",
                    direction:"circle",
                    centerStyle:{marginLeft:'40px'},
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
                })())}
                {
                    React.createElement(EfabButtonHoc({
                        name:"点我",
                        direction:"bottom",
                        centerStyle:{marginLeft:'40px'},
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
                    })())
                }
                {
                    React.createElement(EfabButtonHoc({
                        name:"看左边",
                        direction:"left",
                        centerStyle:{marginLeft:'40px'},
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
                    })())
                }
            </div>),
            titDescripttion:"浮动按钮支持单方向和多方向渲染，多方向渲染时默认顺序为上右下左，也可自行配置",
            code:`
              import  {  Edocument, Prompt , EfabButtonHoc} from 'emptyd';

              class EfabButtonHocDocuments extends Component<any, any> {
                render(){
                  return(
                    React.createElement(EfabButtonHoc({
                        name:"更多",
                        direction:"circle",
                        centerStyle:{marginLeft:"40px"},
                        renderItem:[
                            {
                                name:"锁定",
                                icon:"lock",
                                id:"001",
                                click(id){
                                    Prompt['info']("点击了"+id+"按钮")
                                }
                            },{
                                name:'爱心',
                                icon:"heart",
                                id:"002",
                                click(id){
                                    Prompt['info']("点击了"+id+"按钮")
                                }
                            },{
                                name:'解锁',
                                icon:"unlock",
                                id:"003",
                                click(id){
                                    Prompt['info']("点击了"+id+"按钮")
                                }
                            },{
                                name:'资料',
                                icon:"folder",
                                id:"004",
                                click(id){
                                    Prompt['info']("点击了"+id+"按钮")
                                }
                            }
                        ]
                    })()))
                  )
                }
              }
            `
          }]}
          docDescripttion="EfabButtonHoc属性如下:"   
          documentData={data}        
        />
    );
  }
}

export default EfabButtonHocDocuments;