import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import authSlice from './features/auth/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import persistStore from 'redux-persist/es/persistStore'
import persistReducer from 'redux-persist/es/persistReducer'

const reducers = combineReducers(
{
  counter : counterSlice,
  auth: authSlice,
})

const persistConfig = {
  key: 'root',
  storage : AsyncStorage,
  whitelist : ['auth', 'counter'],
}

const persistedReducer = persistReducer(persistConfig, reducers);

 const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware({serializableCheck:false}),

});

const persistor = persistStore(store);
export {store, persistor};