import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
const reducers = require.context("./",true,/reducer\.(ts)$/);
const excludesArr = ["__esModule","Symbol(Symbol.toStringTag)"];
let reducerGather = {};

reducers.keys().forEach((item,index)=>{
	const itemModule = reducers(item);
	const stateItemKey = Reflect.ownKeys(itemModule);
	stateItemKey.forEach((items,indexs)=>{
		if(!excludesArr.includes(items.toString())){
			Reflect.set(reducerGather,items, itemModule[items]);
		}
	})
})

export default (history) => combineReducers({
  router: connectRouter(history),
  ...reducerGather
})