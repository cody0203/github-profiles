import React from 'react';

import Search from '../../components/search/seach.components';
import UserProfile from '../../components/user/profile/profile.component';

import { UserContainer } from './home.styles';

const Home = () => (
  <div>
    <Search />
    <UserContainer>
      <UserProfile />
    </UserContainer>
  </div>
);

export default Home;
