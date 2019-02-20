import React, { Component } from "react";
import { Edocument, Eviewer ,Prompt } from "emptyd";

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


class EviewerDocuments extends Component<any, any> {
  handleDel(index,event){
    Prompt["success"](`删除了第${index}张`);
  }
  render() {
    return (
        <Edocument
          title="图片展示组件:Eviewer" 
          components={[{
            component:React.createElement(Eviewer,{
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
                url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549002901240&di=cbf3ffb8052d85e42ef5a6930718231e&imgtype=0&src=http%3A%2F%2Fpic29.photophoto.cn%2F20131130%2F0034034498357269_b.jpg",
                alt:"pic"
              },{
                url:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/jeoolpih7jpkduacsvno/%E5%B9%BF%E5%B7%9E%E5%A1%94%E3%80%8C%E5%B0%8F%E8%9B%AE%E8%85%B0%E3%80%8D%E9%97%A8%E7%A5%A8%EF%BC%88%E4%B8%AD%E5%9B%BD%E7%B1%8D%E6%B8%B8%E5%AE%A2%E9%99%90%E5%AE%9A%EF%BC%89.jpg",
                alt:"pic"
              }],
              closeTag:false
            }),
            titDescripttion:"基本用法 : 点击图片查看大图",
            code:`
              import { Edocument, Eviewer ,Prompt } from "emptyd";

              ReactDOM.render(
                React.createElement(Eviewer,{
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
                    url:"http://5b0988e595225.cdn.sohucs.com/images/20180914/9d15e25d6b1946f28b196f597e3002ba.jpeg",
                    alt:"pic"
                  },{
                    url:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/jeoolpih7jpkduacsvno/%E5%B9%BF%E5%B7%9E%E5%A1%94%E3%80%8C%E5%B0%8F%E8%9B%AE%E8%85%B0%E3%80%8D%E9%97%A8%E7%A5%A8%EF%BC%88%E4%B8%AD%E5%9B%BD%E7%B1%8D%E6%B8%B8%E5%AE%A2%E9%99%90%E5%AE%9A%EF%BC%89.jpg",
                    alt:"pic"
                  }],
                  closeTag:false
                })
              )
            `
          },{
            component:React.createElement(Eviewer,{
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
                url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1549002901240&di=cbf3ffb8052d85e42ef5a6930718231e&imgtype=0&src=http%3A%2F%2Fpic29.photophoto.cn%2F20131130%2F0034034498357269_b.jpg",
                alt:"pic"
              },{
                url:"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/jeoolpih7jpkduacsvno/%E5%B9%BF%E5%B7%9E%E5%A1%94%E3%80%8C%E5%B0%8F%E8%9B%AE%E8%85%B0%E3%80%8D%E9%97%A8%E7%A5%A8%EF%BC%88%E4%B8%AD%E5%9B%BD%E7%B1%8D%E6%B8%B8%E5%AE%A2%E9%99%90%E5%AE%9A%EF%BC%89.jpg",
                alt:"pic"
              }],
              closeTag:true
            }),
            titDescripttion:"带删除功能的图片展示",
            code:`
              import { Edocument, Eviewer ,Prompt } from "emptyd";

              class EviewerDemo extends Component{

                handleDel(index,event){
                  Prompt["success"]("删除了第"+index+"张");
                }

                render(){
                  return(
                    React.createElement(Eviewer,{
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
          docDescripttion="Eviewer属性如下:"   
          documentData={data}        
        />
    );
  }
}

export default EviewerDocuments;
