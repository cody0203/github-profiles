import styled from 'styled-components';

export const ThemeIconContainer = styled.div`
  width: 60px;
  padding: 5px;
  margin: auto;
  border: 4px solid ${({ theme }) => theme.secondary};
  box-shadow: 6px 6px ${({ theme }) => theme.shadow};
  cursor: pointer;
`;
