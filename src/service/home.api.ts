export default {
	namespace:"home",
	apis:{
		login(username,password){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve(username+password);
				},1000)
			})
		}
	}
}
