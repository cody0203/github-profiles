import React from 'react';

import { colors } from '../../../../utils/language-color';

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
  const { name, forks, stargazers_count, language, html_url } = repo;

  const languageDetails = colors[language];
  return (
    <ItemContainer>
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        <Name>{name}</Name>
        <RepoDetailsContainer>
          {language ? (
            <DetailContainer>
              <LanguageColor color={languageDetails.color} />
              <span>{language}</span>
            </DetailContainer>
          ) : (
            ''
          )}
          <DetailContainer>
            <StyledStar /> <span>{stargazers_count}</span>
          </DetailContainer>
          <DetailContainer>
            <StyledFork /> <span>{forks}</span>
          </DetailContainer>
        </RepoDetailsContainer>
      </a>
    </ItemContainer>
  );
};

export default UserRepoItem;
