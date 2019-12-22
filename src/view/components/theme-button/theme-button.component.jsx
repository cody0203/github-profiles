import React from 'react';

import { ReactComponent as DarkIcon } from '../../../assets/moon.svg';
import { ReactComponent as LightIcon } from '../../../assets/sunny.svg';

import { ThemeIconContainer } from './theme-button.styles';

const ThemeButton = ({ theme, changeTheme }) => {
  const handleChangeTheme = () => {
    if (theme === 'dark') {
      changeTheme('light');
    } else {
      changeTheme('dark');
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
