import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  padding: 0 15px;
  align-items: flex-start;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;
