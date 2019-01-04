import React,{Component} from 'react';
import EuploadHoc from '../EuploadHoc';
import Eviewer from '../Eviewer';
import service from "@service/load-service";

class EuploadImg extends Component<any,any>{
  constructor(props){
    super(props);
    const imgArr=this.props["data-__meta"]["initialValue"]||[];
    let imgUrl = [];
    let fileIds = [];

    if(imgArr.length>0){
      imgArr.forEach((image,index)=>{
        Array.prototype.push.call(imgUrl,{url:image.url});
        Array.prototype.push.call(fileIds,image.fileId);
      });
    }

    this.state={
      imgUrl,
      fileIds
    }
    this.props.onChange(fileIds);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  handleAdd(params){
    const { url,fileId } = params;
    this.setState((prevState,props)=>{
      return{
        imgUrl:prevState.imgUrl.concat([{
            url,
            alt:"pic"
          }
        ]),
        fileIds:prevState.fileIds.concat([fileId])
      }
    },()=>{
       this.props.onChange(this.state.fileIds);
    })
  }
  handleDel(event){
    const currentSrc = event.target.previousElementSibling.getAttribute("src");
    const { imgUrl ,fileIds } = this.state;
    imgUrl.forEach((item,index)=>{
      if(item.url==currentSrc){
        imgUrl.splice(index,1);
        fileIds.splice(index,1)
        this.setState((prevState,props)=>{
          return{
            imgUrl,
            fileIds
          }
        })
      }
    })
  }

  render(){
    const that = this;
    const Eupload = EuploadHoc.component({
      defaultParams: {
        clientType:"web",
        userId:103,
        owner:"string",
        transferType:"normal",
        fileSize:0
      },
      limit:{number:3,size:2},
      method:{name:"step",detail:"formData",field:"filer"},
      postFunction:{
        step:function(params){
          return  service.upload.uploadImg("testUplaod",params)
        },
        stepTwo:function(url,params,config){
          return  service.upload.uploadImg(url,params,config)
        }
      },
      callback(params){
          that.handleAdd(params);
      }
    });
    return(
      <div>
        { this.state.imgUrl.length>0?<Eviewer.component imgUrl={this.state.imgUrl} handleDel={this.handleDel} closeTag/>:null}
        <Eupload style={{marginTop:"10px",display:"inline-block",verticalAlign:"top",width:"0",marginLeft:"10px"}}/>
      </div>
    )
  }
}

export default{
  name:"EuploadImg",
  component:EuploadImg
}
