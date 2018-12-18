/**
 * redux配置文件
 * @redux-persist：该插件用来缓存reducer中的数据
 * @redux-thunk: 分发异步action 
 */
import { createHashHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from '../reducers/index';
import { rootSaga } from '../sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const history = createHashHistory();
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
    key: 'root',
    storage,
}
const middlewares = [sagaMiddleware];
//Reducer 数据持久化
const persistedReducer = persistReducer(persistConfig, createRootReducer(history));
//创建store 
const store = createStore(
    persistedReducer, // root reducer with router state
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            ...middlewares
        )
    )
)
persistStore(store);

//通过中间件执行或者运行saga
sagaMiddleware.run(rootSaga, store);

export default store;
