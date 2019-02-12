import * as types from '../action-types';
export default {

	doLogin(username,password){
		return { type:types.LOGIN_REQUEST, username, password}
	},

	logout(){
		return { type:types.LOGOUT_REQUEST }
	},

	getList:(fetchTitle,params)=>{
		return { type:fetchTitle,params };
	}

}
