import React from 'react';

import {
  Avatar,
  Container,
  AvatarAndUserName,
  UserName
} from './profile.styles';

const UserProfile = ({ user }) => {
  return (
    <Container>
      {user ? (
        <AvatarAndUserName>
          <Avatar src={user['avatar_url']} alt="avatar" />
          <UserName>
            <span>{user.name}</span>
          </UserName>
        </AvatarAndUserName>
      ) : (
        ''
      )}
    </Container>
  );
};

export default UserProfile;
