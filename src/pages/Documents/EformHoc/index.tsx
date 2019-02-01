import React, { Component } from "react";
import components from '@components/load-component';
import { FormConfig } from './FormConfig'
const { Edocument, EFormHoc } = components;

const data = [{
  key: '1',
  title: 'imgUrl',
  explain: "图片链接的数组",
  type: "Array",
  default: '-',
},{
  key: '2',
  title: 'closeTag',
  explain: "是否显示删除按钮",
  type:"boolean",
  default: 'false',
},{
  key: '3',
  title: ' handleDel ',
  explain: " 删除逻辑处理函数 接受被删除图片的索引 index 和事件元 event 为参数 ",
  type:"function(index,event)",
  default: '-',
}];


class EFormHocDocuments extends Component<any, any> {
  render() {
    return (
      <div className={"animated fadeIn emptyd-content"}>
        <Edocument.component
          title="图片展示组件:EFormHoc" 
          components={[{
            component:React.createElement(EFormHoc.component(FormConfig)),
            titDescripttion:"带删除功能的图片展示",
            code:`
              import components from '@components/load-component';
              const { EFormHoc } = components;

              class EFormHocDemo extends Component{

                handleDel(index,event){
                  Prompt.component["success"]("删除了第"+index+"张");
                }

                render(){
                  return(
                    React.createElement(EFormHoc.component,{
                      handleDel:this.handleDel,
                      imgUrl:[{
                        url:"http://5b0988e595225.cdn.sohucs.com/images/20180914/9d15e25d6b1946f28b196f597e3002ba.jpeg",
                        alt:"pic"
                      },{
                        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGKDR-Haw_F52ti3wGVR4FDLDX1D2j72RMGsXAfp2YmAjnGeb",
                        alt:"pic"
                      },{
                        url:"https://imgcdn.yicai.com/uppics/slides/2017/12/636495403828283780.jpg",
                        alt:"pic"
                      },{
                        url:"https://cdn.pixabay.com/photo/2017/11/03/09/30/west-lake-2913829_960_720.jpg",
                        alt:"pic"
                      },{
                        url:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/jeoolpih7jpkduacsvno/%E5%B9%BF%E5%B7%9E%E5%A1%94%E3%80%8C%E5%B0%8F%E8%9B%AE%E8%85%B0%E3%80%8D%E9%97%A8%E7%A5%A8%EF%BC%88%E4%B8%AD%E5%9B%BD%E7%B1%8D%E6%B8%B8%E5%AE%A2%E9%99%90%E5%AE%9A%EF%BC%89.jpg",
                        alt:"pic"
                      }],
                      closeTag:true
                    })
                  )
                }
              }
            `
          }]}
          docDescripttion="EFormHoc属性如下:"   
          documentData={data}        
        />
      </div>
    );
  }
}

export default EFormHocDocuments;
