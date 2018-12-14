
import { takeEvery ,all,call,put ,take ,fork } from "redux-saga/effects";
import * as types from '../action-types';
import { push } from 'connected-react-router'

let API={
	login(username,password){
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve(username+password);
			},1000)
		})
	}
}


function* login(username,password){
	try{
	   let token = yield call(API.login,username,password);
	   yield put({type:types.LOGIN_SUCCESS,token});
	   yield put(push('/logout'))
	   return token;
	}catch(error){
	   put({type:types.LOGIN_ERROR,error});
	}	
}

function* loginFlow(){
	while(true){
		let {username,password} = yield take(types.LOGIN_REQUEST);
		let token = yield login(username,password);
		if(token){
			yield take(types.LOGOUT_REQUEST)
	   		yield put(push('/login'))
		}
	}
}

export function* rootSaga({dispatch,getState}){
	yield all([
		loginFlow(),
		// watchAndLog(dispatch,getState)
	])
}
