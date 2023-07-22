import { configureStore, combineReducers } from '@reduxjs/toolkit';
import registerSlice from './registerSlice';
import userSlice from './userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  register: registerSlice,
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  serializableCheck: false,
});

const persistor = persistStore(store);

export { persistor };
export default store;
