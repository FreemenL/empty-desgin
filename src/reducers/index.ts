import * as types from '../action-types';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

function user(state={token:"",error:""},action){
	switch(action.type){
		case types.LOGIN_SUCCESS:
			return { ...state,token:action.token }
		case types.LOGIN_ERROR:
			return { ...state,error:action.error }
		default:
			return state;
	}
}

export default (history) => combineReducers({
  router: connectRouter(history),
  user
})