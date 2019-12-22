import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 6px 6px ${props => props.theme.shadow};
  width: 60%;
`;

export const StyledInput = styled.input`
  border: 4px solid ${props => props.theme.secondary};
  border-right: 2px solid ${props => props.theme.secondary};
  padding: 0.5rem;
  outline: none;
  font-size: 1.5rem;
  width: 100%;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  text-transform: uppercase;
  font-weight: 900;
`;

export const Icon = styled(SearchIcon)`
  width: 30px;
  height: 30px;
  fill: ${props => props.theme.secondary};
  opacity: 1;
`;

export const IconContainer = styled.div`
  border: 4px solid ${props => props.theme.secondary};
  border-left: 2px solid ${props => props.theme.secondary};
  width: 60px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background: repeating-linear-gradient(
    -45deg,
    ${props => props.theme.shadow},
    ${props => props.theme.shadow} 1px,
    ${props => props.theme.primary} 1px,
    ${props => props.theme.primary} 9px
  );
`;
