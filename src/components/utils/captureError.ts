/**
 * [ 通用组件加载错误 ]
 * @Author   freemenL
 * @DateTime 2018-10-25T18:20:04+0800
 */
export const loadComponentError = (modules,path)=>{
	const rightArray = ["name","component"];
	const moduleArray = Reflect.ownKeys(modules);
  	const method = moduleArray.join("");
  	rightArray.forEach((item,index)=>{
  		if(item!==method){
  			new loadComponentError_Proxy(path)[`${item}Lose`]();
  		}
  	})
}

class loadComponentError_Proxy{
	constructor(public path){
		this.path = path;
	}
	nameLose(){
		throw SyntaxError(`-> ${this.path}  module export default none name property!`);
	}
	componentLose(){
		throw SyntaxError(`-> ${this.path}  module export default none component property!`);
	}
}


export const catchUndefined = (params,message)=>{
	if(typeof params==="undefined"){
		throw ReferenceError(message);
	}
}

export const catchTransArrFromObj = (data)=>{
	let origin = Object.keys(data);
	if(!Array.isArray(origin)||origin.length<=0){
		throw TypeError("Please pass in the correct data!")
	}
}
