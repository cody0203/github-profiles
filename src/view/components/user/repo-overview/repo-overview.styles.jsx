import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 576px) {
    margin: auto;
  }
`;
