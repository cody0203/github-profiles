import React, { useState } from 'react';

import {
  StyledInput,
  StyledContainer,
  Icon,
  IconContainer
} from './search.styles';

const Search = ({ fetchUserStart }) => {
  const [input, setInput] = useState('');

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const onSearch = () => {
    fetchUserStart(input);
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
