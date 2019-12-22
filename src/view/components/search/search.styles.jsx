import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  filter: drop-shadow(4px 4px 1px #d5d4d6);
`;

export const StyledInput = styled.input`
  border: 4px solid #7b7c70;
  border-right: transparent;
  padding: 0.5rem;
  outline: none;
  font-size: 1.5rem;
  width: 50%;
  background-color: #f5f4f0;
  color: #7b7c70;
  text-transform: uppercase;
  font-weight: 900;
`;

export const Icon = styled(SearchIcon)`
  width: 30px;
  height: 30px;
  fill: #7b7c70;
`;

export const IconContainer = styled.div`
  border: 4px solid #7b7c70;
  border-left: 0.5px solid #7b7c70;
  height: 60px;
  width: 60px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background: repeating-linear-gradient(
    -45deg,
    #d1d0cd,
    #d1d0cd 1px,
    #f5f4f0 1px,
    #f5f4f0 9px
  );
`;
