import React from 'react';
import { Spin ,message } from 'antd';

message.config({
  top: 80,
  duration: 2,
  maxCount: 1,
});

const msgProxy = (type:string,content:string,onClose?:()=>void)=>{
	if(typeof onClose == "function"){
		message[type](content,2,onClose)
		return
	}
	message[type](content,2);
}

class Prompt{

	pLoading = ()=> <Spin size="large" className="global-spin"/>

	success =(text:string,onClose?:()=>void):void=> msgProxy("success",text,onClose)

	error =(text:string,onClose?:()=>void):void=> msgProxy("error",text,onClose)

	info =(text:string,onClose?:()=>void):void=> msgProxy("info",text,onClose)

	warn =(text:string,onClose?:()=>void):void=> msgProxy("warn",text,onClose)

	warning =(text:string,onClose?:()=>void):void=> msgProxy("warning",text,onClose)

	loading =(text:string,onClose?:()=>void):void=> msgProxy("loading",text,onClose)

	destroy =()=> message.destroy() 

}

export default {
	name:"Prompt",
	component:new Prompt()
}

