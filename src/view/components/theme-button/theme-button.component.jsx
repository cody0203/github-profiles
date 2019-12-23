import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DarkIcon } from '../../../assets/moon.svg';
import { ReactComponent as LightIcon } from '../../../assets/sunny.svg';

import { ThemeIconContainer } from './theme-button.styles';
import { changeTheme } from '../../../state/setting/setting.actions';

const ThemeButton = () => {
  const dispatch = useDispatch();

  const theme = useSelector(({ setting }) => setting.theme);

  const handleChangeTheme = () => {
    if (theme === 'dark') {
      dispatch(changeTheme('light'));
    } else {
      dispatch(changeTheme('dark'));
    }
  };

  return (
    <div>
      <ThemeIconContainer onClick={handleChangeTheme}>
        {theme === 'dark' ? <DarkIcon /> : <LightIcon />}
      </ThemeIconContainer>
    </div>
  );
};

export default ThemeButton;
