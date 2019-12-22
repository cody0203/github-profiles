import React from 'react';

import {
  ItemContainer,
  Name,
  RepoDetailsContainer,
  StyledStar,
  DetailContainer,
  LanguageColor,
  StyledFork
} from './repo-item.styles';

const UserRepoItem = () => (
  <ItemContainer>
    <Name>cody0203.github.io</Name>
    <RepoDetailsContainer>
      <DetailContainer>
        <LanguageColor />
        <span>HTML</span>
      </DetailContainer>
      <DetailContainer>
        <StyledStar /> <span>1</span>
      </DetailContainer>
      <DetailContainer>
        <StyledFork /> <span>4</span>
      </DetailContainer>
    </RepoDetailsContainer>
  </ItemContainer>
);

export default UserRepoItem;
