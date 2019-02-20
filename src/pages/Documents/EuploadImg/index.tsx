import React, { Component } from "react";
import { Edocument, EuploadImg } from 'emptyd';

const data = [{
  key: '1',
  title: 'defaultParams',
  explain: "第一步提交的参数",
  type: "object",
  default: '-',
},{
  key: '2',
  title: ' limit ',
  explain: " 上传限制 size：大小 number：个数",
  type:" object ",
  default: '-',
},{
  key: '3',
  title: ' method ',
  explain: " 上传方式 detail: formData | blob  ",
  type:" Object  ",
  default: '{}',
},{
  key: '4',
  title: ' postFunction ',
  explain: " 接口调用 ",
  type:" object  ",
  default: '{}',
}];

class ETextDocuments extends Component<any, any> {
  _testStyle={fontSize:"20px",color:"#000"}
  render() {
    return (
        <Edocument
          title="图片上传:EuploadImg" 
          components={[{
            component:<EuploadImg/>,
            titDescripttion:"基本用法",
            code:`
              import { EuploadImg } from 'emptyd';

              ReactDOM.render(
                <EuploadImg config={
                  defaultParams: {
                    clientType:"web",
                    userId:103,
                    owner:"string",
                    transferType:"normal",
                    fileSize:0
                  },
                  limit:{ number:3,size:2 },
                  method:{ name:"step",detail:"formData",field:"filer"},
                  postFunction:{
                    step:function(params){
                      return  service.upload.uploadImg("testUplaod",params)
                    },
                    stepTwo:function(url,params,config){
                      return  service.upload.uploadImg(url,params,config)
                    }
                }/>
              )
            `
          }]}
          docDescripttion="EuploadImg组件上传图片分两步,第一步提交参数返回上传的地址,然后再进行上传,支持二进制和formData两种方式提交 props.config 属性如下:"   
          documentData={data}        
        />
    );
  }
}

export default ETextDocuments;
