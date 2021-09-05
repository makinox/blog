import { Card } from '@makinox/makinox-ui';
import styled from 'styled-components';

export const CardContainer = styled(Card)`
  cursor: pointer;
  margin: 20px 0;

  & > div.card-customMedia {
    padding: initial;
    position: relative;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  & > div.card-customMedia div,
  & > div.card-customMedia div img,
  & > div.card-customMedia div picture {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
`;
