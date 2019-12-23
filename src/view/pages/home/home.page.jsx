import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Search from '../../components/search/seach.component';
import UserProfile from '../../components/user/profile/profile.component';
import UserReposOverView from '../../components/user/repos-overview/repo-overview.component';
import ThemeButton from '../../components/theme-button/theme-button.component';
import CompareButton from '../../components/compare-button/compare-button.component';

import { UserContainer, ErrorMessage, ActionContainer } from './home.styles';

const Home = () => {
  const error = useSelector(({ userData }) => userData.error);

  useEffect(() => {
    console.log('a');
  }, []);

  return (
    <div>
      <ActionContainer>
        <CompareButton />
        <Search />
        <ThemeButton />
      </ActionContainer>
      {error ? (
        <ErrorMessage>
          <span>Không tìm thấy tài khoản này, vui lòng kiểm tra lại</span>
        </ErrorMessage>
      ) : (
        <UserContainer>
          <UserProfile />
          <UserReposOverView />
        </UserContainer>
      )}
    </div>
  );
};

export default Home;
