
import { delay } from 'redux-saga';
import { all, call ,put, takeEvery ,fork } from "redux-saga/effects";
import * as types from '../action-types';
import { push } from 'connected-react-router'
import service from "@service/load-service";

interface Login{
	type:string,
	username:string,
	password:string|number
}

function* login(){
	yield takeEvery(types.LOGIN_REQUEST,function*({type,username,password}:Login){
		try{
			let token = yield call(service.home.login,username,password);
			yield put({type:types.LOGIN_SUCCESS,token});
			yield put(push('/home/home'));
			return token;
		 }catch(error){
			put({type:types.LOGIN_ERROR,error});
		 }	
	});

}


export function* rootSaga({dispatch,getState}){
	yield all([login()])
}
