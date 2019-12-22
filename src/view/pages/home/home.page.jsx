import React from 'react';

import SearchContainer from '../../components/search/search.container';
import UserProfile from '../../components/user/profile/profile.component';
import UserRepoOverView from '../../components/user/repo-overview/repo-overview.component';

import { UserContainer } from './home.styles';

const Home = () => (
  <div>
    <SearchContainer />
    <UserContainer>
      <UserProfile />
      <UserRepoOverView />
    </UserContainer>
  </div>
);

export default Home;
