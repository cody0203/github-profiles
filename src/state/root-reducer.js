import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import settingReducer from './setting/setting.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['setting']
};

const rootReducer = combineReducers({
  userData: userReducer,
  setting: settingReducer
});

export default persistReducer(persistConfig, rootReducer);
