import React from 'react';

import Search from '../../components/search/seach.components';
import UserProfile from '../../components/user/profile/profile.component';
import UserRepoOverView from '../../components/user/repo-overview/repo-overview.component';

import { UserContainer } from './home.styles';

const Home = () => (
  <div>
    <Search />
    <UserContainer>
      <UserProfile />
      <UserRepoOverView />
    </UserContainer>
  </div>
);

export default Home;
