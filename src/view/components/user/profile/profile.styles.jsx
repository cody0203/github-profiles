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
  border: 5px solid ${({ theme }) => theme.secondary};
  box-shadow: 6px 6px ${({ theme }) => theme.shadow};
`;

export const UserName = styled.a`
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.primary};
  ${props => {
    console.log(props);
  }}
  color: ${({ theme }) => theme.secondary};
  padding: 10px;
  border-top: 5px solid ${({ theme }) => theme.secondary};
  text-align: center;
  font-weight: 900;
`;
