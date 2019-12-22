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

const UserRepoItem = ({ repo }) => {
  const { name, forks, stargazers_count, language } = repo;
  console.log(repo);
  return (
    <ItemContainer>
      <Name>
        <span>{name}</span>
      </Name>
      <RepoDetailsContainer>
        <DetailContainer>
          <LanguageColor />
          <span>{language}</span>
        </DetailContainer>
        <DetailContainer>
          <StyledStar /> <span>{stargazers_count}</span>
        </DetailContainer>
        <DetailContainer>
          <StyledFork /> <span>{forks}</span>
        </DetailContainer>
      </RepoDetailsContainer>
    </ItemContainer>
  );
};

export default UserRepoItem;
