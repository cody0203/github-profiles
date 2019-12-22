import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  padding: 0 15px;
`;

export const Avatar = styled.img`
  max-width: 250px;
`;

export const AvatarAndUserName = styled.div`
  display: flex;
  flex-flow: column;
  border: 5px solid #231e21;
  box-shadow: 6px 6px #d5d4d6;
`;

export const UserName = styled.div`
  font-size: 1.5rem;
  background-color: transparent;
  color: #7b7c70;
  padding: 10px;
  border-top: 5px solid #231e21;
  text-align: center;
  font-weight: 900;
`;
