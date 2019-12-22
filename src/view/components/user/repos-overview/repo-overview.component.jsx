import React from 'react';

import UserRepoItem from '../repo-item/repo-item.component';

import { Container } from './repo-overview.styles';

const UserReposOverView = ({ repos }) => {
  return (
    <Container>
      {repos
        ? repos
            .map(repo => <UserRepoItem key={repo.id} repo={repo} />)
            .slice(0, 4)
        : ''}
    </Container>
  );
};

export default UserReposOverView;
