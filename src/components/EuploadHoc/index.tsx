import React,{Component} from 'react';
import freetool from 'freetool';
import styles from './index.less';
import Prompt from '../Prompt'

const { mergeConfig } = freetool;
const uploadWrapperClass = `${styles["empty-upload-wrapper"]}`;
const uploadInputClass = `${styles["empty-upload-input"]}`;
const uploadButtonClass = `${styles["empty-upload-button"]}`;
const uploadIconClass = `${styles["empty-upload-icon"]}`

interface Props{
  defaultParams:{
    clientType:string,
    userId:number,
    owner:string,
    transferType:string,
    fileSize:number
  },
  limit:{number:number,size:number},
  method:any,
  postFunction:{
    step:(params:any)=>Promise<any>;
    stepTwo:(url:string,params:any,config:any)=>Promise<any>;
  }
  callback:(params:any)=>void;
}

function EuploadHoc(loadConfig:Props){
    loadConfig = mergeConfig({
      defaultParams: {
        clientType:"web",
        userId:103,
        owner:"string",
        transferType:"normal",
        fileSize:0
      },
      limit:{number:3,size:2},
      method:{name:"step",detail:"blob",field:"filer"},
      postFunction:{
        step:function(params){
          //return  fetchData("",params)
        },
        stepTwo:function(url,params,config){
          //return  fetchData(url,params,config)
        }
      },
      callback:function(){
        return false;
      }
    },loadConfig)

    return class extends React.Component<any,any>{
      
      constructor(props){
        super(props);
        this.loadImgNode = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
      }
      handleChange(event){
        const events = event.target;
        const uploadObj = Object.assign({},loadConfig.defaultParams,{
          fileName:events.files[0].name,
        })
        Prompt.component['info']("暂无接口！");
        // let response:any={};
        // if(loadConfig.method.name=="step"){
        //   const res = await loadConfig.postFunction.step(uploadObj);
        //   const { code ,data ,message} =  res;
        //   if( 200==code ){
        //     const { uploadUrl ,fileId } = data;
        //     const isLimit = events.files[0].size / 1024 / 1024 <loadConfig.limit.size;
        //     if (!isLimit) {
        //       Prompt["component"]["error"](`图片必须小于${loadConfig.limit.size}MB`);
        //       return false;
        //     }
        //     this.uploadData(loadConfig.method.detail,uploadUrl,events.files[0],loadConfig.method.field,fileId);
        //   }else{
        //      Prompt["component"]["error"](message);
        //   }
        // }
      }

      uploadData(type,uploadUrl,events,field,fileId){
        let response:any={};
        const fd = new FormData();
        const configs = {headers: {'Content-Type': 'multipart/form-data'}};
        const method = {
          blob:async function(){
            const datas = new Blob([events]);
            fd.append(field,datas);
            await loadConfig.postFunction.stepTwo(`${uploadUrl.substring(uploadUrl.indexOf("/szcg-base"))}?startPos=0&endPos=${datas.size}`,fd,configs);
            return void 0;
          },
          formData:async function(){
            fd.append(field,events);
            await loadConfig.postFunction.stepTwo(uploadUrl.substring(uploadUrl.indexOf("/szcg-base")),fd,configs);
            return void 0;
          }
        }
        // response= await method[type]();
        // const { code, message } = response;
        // if(200==code){
        //   this.showPic(events,fileId)
        // }else{
        //   Prompt["component"]["error"](message);
        // }
      }

      showPic(events,fileId){
        if(events.type.startsWith("image")){
          var reader = new FileReader();
          reader.addEventListener("load", function () {
            loadConfig.callback({url:reader.result,fileId});
          }, false);
          reader.readAsDataURL(events);
        }
      }

      handleAdd(){
          this.loadImgNode.current.click()
      }
      loadImgNode
      render() {
        return (
          <section className={uploadWrapperClass} style={this.props.style}>
            <input type="file" onChange={this.handleChange} className={uploadInputClass} ref={this.loadImgNode} />
            <div className={ uploadButtonClass } onClick={this.handleAdd.bind(this)}>
                <span className={uploadIconClass}></span>
                <p>点击上传</p>
            </div>
          </section>
        );
      }
    }
}


export default{
  name:"EuploadHoc",
  component:EuploadHoc
}
