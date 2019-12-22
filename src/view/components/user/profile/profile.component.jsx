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
          <UserName
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.name || user.login}
          </UserName>
        </AvatarAndUserName>
      ) : (
        ''
      )}
    </Container>
  );
};

export default UserProfile;
