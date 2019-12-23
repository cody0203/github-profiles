import React, { useState } from 'react';
import { fetchUserStart } from '../../../state/user/user.actions';

import { useDispatch } from 'react-redux';

import {
  StyledInput,
  StyledContainer,
  Icon,
  IconContainer
} from './search.styles';

const Search = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState('');

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const onSearch = () => {
    if ((input !== '') & (input.trim() !== '')) dispatch(fetchUserStart(input));
  };

  return (
    <StyledContainer>
      <StyledInput
        value={input}
        onChange={handleInputChange}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            onSearch();
          }
        }}
      />
      <IconContainer onClick={onSearch}>
        <Icon />
      </IconContainer>
    </StyledContainer>
  );
};

export default Search;
