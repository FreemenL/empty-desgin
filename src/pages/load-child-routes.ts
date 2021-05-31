let childRoutes = [];
import _import_views from '@router/importView';
const childRouter = require.context('./',true,/router\.(tsx|ts)$/);

childRouter.keys().forEach((item/*,index,array*/)=>{
	let modules;
	try{
		modules = childRouter(item).default;
	}catch(err){
		throw new Error(`${item}:${err}`);
	}
	if(typeof modules=="undefined"|| !Array.isArray(modules)){
		throw new Error(`${item} : Not exporting modules by way of 'export default 'OR The exported module is not an array!`);
	}
	Array.prototype.push.call(childRoutes,...modules);
})

childRoutes.forEach((item:{path:string,component:string|(()=>any)|object},/*index*/)=>{
	item.component = _import_views(item.component);
})

export default childRoutes;