import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  @media (max-width: 576px) {
    margin: 2rem auto;
  }
`;

export const Avatar = styled.img`
  max-width: 250px;
`;

export const AvatarAndUserName = styled.div`
  display: flex;
  flex-flow: column;
  border: 5px solid #7b7c70;
  box-shadow: 6px 6px #d5d4d6;
`;

export const UserName = styled.a`
  font-size: 1.5rem;
  background-color: transparent;
  color: #7b7c70;
  padding: 10px;
  border-top: 5px solid #7b7c70;
  text-align: center;
  font-weight: 900;
`;
