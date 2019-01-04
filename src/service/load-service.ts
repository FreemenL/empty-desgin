let API:any = {};
const childRouter = require.context('./',true,/api\.(ts)$/);

childRouter.keys().find((item,index,array)=>{
	let modules;
	try{
		modules = childRouter(item).default;
	}catch(err){
		throw new Error(`${item}:${err}`);
    }
	if(typeof modules=="undefined"|| !modules.namespace|| !modules.apis){
		throw new Error(`${item} : Not exporting modules by way of 'export default 'OR The exported module format error!`);
	}
	if(API.hasOwnProperty(modules.namespace)){
        throw new Error(`${item} : name exist place change module namespace!`);
    }
    API[modules.namespace] = modules.apis;
})

export default API;