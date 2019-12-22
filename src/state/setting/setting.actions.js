import { settingActionTypes } from './setting.types';

export const changeTheme = theme => ({
  type: settingActionTypes.CHANGE_THEME,
  payload: theme
});
