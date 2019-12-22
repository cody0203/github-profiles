import React from 'react';

import UserRepoItem from '../repo-item/repo-item.component';

import { Container } from './repo-overview.styles';

const UserRepoOverView = () => {
  const number = [1, 2, 3, 4];

  return (
    <Container>
      {number.map(num => (
        <UserRepoItem key={num} />
      ))}
    </Container>
  );
};

export default UserRepoOverView;
