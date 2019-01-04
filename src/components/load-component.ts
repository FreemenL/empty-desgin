let components:any = {};
const childComponents = require.context('./',true,/index\.(tsx)$/);

childComponents.keys().find((item,index,array)=>{
	let modules;
	try{
		modules = childComponents(item).default;
	}catch(err){
		throw new Error(`${item}:${err}`);
	}
	if(typeof modules=="undefined"){
		throw new Error(`${item} : Not exporting modules by way of 'export default'`);
	}
	Object.defineProperty(components,modules.name , {
        value:modules,
        writable:false,
        enumerable:true,
        configurable:true
    });
})
export default components;



