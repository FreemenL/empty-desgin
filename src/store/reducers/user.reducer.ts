import * as types from '../action-types';
export const state_doLogin = (state={token:"",error:""},action)=>{
	switch(action.type){
		case types.LOGIN_SUCCESS:
			return { ...state,token:action.token }
		case types.LOGIN_ERROR:
			return { ...state,error:action.error }
		default:
			return state;
	}
}
