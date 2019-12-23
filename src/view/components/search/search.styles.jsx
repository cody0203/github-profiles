import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 6px 6px ${({ theme }) => theme.shadow};
  width: 60%;
`;

export const StyledInput = styled.input`
  border: 4px solid ${({ theme }) => theme.secondary};
  border-right: 2px solid ${({ theme }) => theme.secondary};
  padding: 0.5rem;
  outline: none;
  font-size: 1.5rem;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  text-transform: uppercase;
  font-weight: 900;
`;

export const Icon = styled(SearchIcon)`
  width: 30px;
  height: 30px;
  fill: ${({ theme }) => theme.secondary};
  opacity: 1;
`;

export const IconContainer = styled.div`
  border: 4px solid ${({ theme }) => theme.secondary};
  border-left: 2px solid ${({ theme }) => theme.secondary};
  width: 60px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background: repeating-linear-gradient(
    -45deg,
    ${({ theme }) => theme.shadow},
    ${({ theme }) => theme.shadow} 1px,
    ${({ theme }) => theme.primary} 1px,
    ${({ theme }) => theme.primary} 9px
  );
`;
