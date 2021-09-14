import styled from 'styled-components';

export const CardContainer = styled.article`
  cursor: pointer;
  margin: 20px 0;

  & > div.card-media {
    padding: initial;
    position: relative;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  & > div.card-media div,
  & > div.card-media div img,
  & > div.card-media div picture {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;
