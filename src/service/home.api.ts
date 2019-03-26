export default {
	namespace:"system",
	apis:{
		login(username,password){
			return new Promise((resolve)=>{
				setTimeout(()=>{
					resolve(username+password);
				},1000)
			})
		}
	}
}
