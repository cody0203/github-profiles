import { settingActionTypes } from './setting.types';

const INITIAL_STATE = {
  theme: 'dark'
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case settingActionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export default themeReducer;
