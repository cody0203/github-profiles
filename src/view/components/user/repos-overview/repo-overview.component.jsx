import React from 'react';
import { useSelector } from 'react-redux';

import UserRepoItem from '../repo-item/repo-item.component';

import { Container } from './repo-overview.styles';

const UserReposOverView = () => {
  const repos = useSelector(({ userData }) => userData.repos);

  return (
    <Container>
      {repos
        ? repos.length > 0
          ? repos
              .map(repo => <UserRepoItem key={repo.id} repo={repo} />)
              .slice(0, 4)
          : 'Tài khoản này chưa có reposition nào'
        : ''}
    </Container>
  );
};

export default UserReposOverView;
