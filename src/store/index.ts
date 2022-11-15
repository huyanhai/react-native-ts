import {legacy_createStore as createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';

import global from './modules/global/reducer';

const persistConfig = {
  key: 'redux-state',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  global,
});

const persistReducerConfig = persistReducer(persistConfig, reducer);

const middleWare = applyMiddleware(reduxThunk);

const store = createStore(persistReducerConfig, middleWare);

const persistor = persistStore(store);

export {store, persistor};
