import { all, call ,put, takeEvery ,take} from "redux-saga/effects";
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
			let token = yield call(service.system.login,username,password);
			yield put({type:types.LOGIN_SUCCESS,token});
			yield put(push('/home/home'));
			return token;
		 }catch(error){
			put({type:types.LOGIN_ERROR,error});
		 }	
	});

}

function* testDemo(){
	yield takeEvery(types.DATALIST_REQUEST,function*({type,params}:any){
		try{
			yield put({type:types.DATALIST_LOADING});
			const res  = yield call(service.testDemo.dataList,params);
			yield put({type:types.DATALIST,pyload:{ request:params,response :res.data ,loading:false}});
		 }catch(error){
			throw Error(error);
		 }	
	});
}

export function* rootSaga({dispatch,getState}){
	yield all([login(),testDemo()])
}