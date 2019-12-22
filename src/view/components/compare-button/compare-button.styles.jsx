import styled from 'styled-components';

export const CompareIconContainer = styled.div`
  width: 60px;
  padding: 5px;
  margin: auto;
  border: 4px solid ${props => props.theme.secondary};
  box-shadow: 6px 6px ${props => props.theme.shadow};
  cursor: pointer;
`;
