import styled from 'styled-components';

export const RecomendedRow = styled.div`
  @media (max-width: 630px) {
    & > article:nth-child(3) {
      display: none;
    }
  }
  @media (max-width: 448px) {
    & > article:nth-child(2) {
      display: none;
    }
  }
`;
