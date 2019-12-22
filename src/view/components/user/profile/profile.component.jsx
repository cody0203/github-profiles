import React from 'react';

import {
  Avatar,
  Container,
  AvatarAndUserName,
  UserName
} from './profile.styles';

const UserProfile = () => (
  <Container>
    <AvatarAndUserName>
      <Avatar src="https://loremflickr.com/300/300" alt="avatar" />
      <UserName>
        <span>Cody</span>
      </UserName>
    </AvatarAndUserName>
  </Container>
);

export default UserProfile;
