import styled, { css } from 'styled-components';
import { ReactComponent as Star } from '../../../../assets/star.svg';
import { ReactComponent as Fork } from '../../../../assets/fork.svg';

const StyledIcon = css`
  width: 1rem;
  height: 1rem;
  margin-right: 0.3rem;
`;

export const ItemContainer = styled.div`
  border: 5px solid ${props => props.theme.secondary};
  box-shadow: 6px 6px ${props => props.theme.shadow};
  display: flex;
  flex-flow: column;
  padding: 1rem;
  height: fit-content;
`;

export const Name = styled.a``;

export const RepoDetailsContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  > span {
    margin-right: 1rem;
  }
`;

export const StyledStar = styled(Star)`
  ${StyledIcon}
`;

export const StyledFork = styled(Fork)`
  ${StyledIcon}
`;

export const DetailContainer = styled.span`
  display: flex;
  align-items: center;

  > span {
    font-size: 1.1rem;
  }
`;

export const LanguageColor = styled.span`
  ${StyledIcon}
  border-radius: 50%;
  ${props => (props.color ? `background-color: ${props.color}` : '')}
`;
