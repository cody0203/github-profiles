import React from 'react';

import SearchContainer from '../../components/search/search.container';
import UserProfileContainer from '../../components/user/profile/profile.container';
import UserReposOverViewContainer from '../../components/user/repos-overview/repo-overview.container';
import ThemeButtonContainer from '../../components/theme-button/theme-button.container';
import CompareButton from '../../components/compare-button/compare-button.component';

import { UserContainer, ErrorMessage, ActionContainer } from './home.styles';

const Home = ({ error }) => {
  return (
    <div>
      <ActionContainer>
        <CompareButton />
        <SearchContainer />
        <ThemeButtonContainer />
      </ActionContainer>
      {error ? (
        <ErrorMessage>
          <span>Không tìm thấy tài khoản này, vui lòng kiểm tra lại</span>
        </ErrorMessage>
      ) : (
        <UserContainer>
          <UserProfileContainer />
          <UserReposOverViewContainer />
        </UserContainer>
      )}
    </div>
  );
};

export default Home;
