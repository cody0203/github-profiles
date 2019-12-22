import React from 'react';

import SearchContainer from '../../components/search/search.container';
import UserProfileContainer from '../../components/user/profile/profile.container';
import UserReposOverViewContainer from '../../components/user/repos-overview/repo-overview.container';

import { UserContainer, ErrorMessage } from './home.styles';

const Home = ({ error }) => {
  return (
    <div>
      <SearchContainer />
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
