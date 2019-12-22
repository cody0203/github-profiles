import styled from 'styled-components';

export const ThemeIconContainer = styled.div`
  width: 60px;
  padding: 10px;
  margin: auto;
  border: 4px solid ${props => props.theme.secondary};
  cursor: pointer;
`;
