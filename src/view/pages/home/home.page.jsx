import React from 'react';

import SearchContainer from '../../components/search/search.container';
import UserProfileContainer from '../../components/user/profile/profile.container';
import UserReposOverViewContainer from '../../components/user/repos-overview/repo-overview.container';

import { UserContainer } from './home.styles';

const Home = () => (
  <div>
    <SearchContainer />
    <UserContainer>
      <UserProfileContainer />
      <UserReposOverViewContainer />
    </UserContainer>
  </div>
);

export default Home;
