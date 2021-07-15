import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const PrimaryImage = styled(GatsbyImage)`
  width: 100%;
  object-fit: cover;
`;

export const PostResumen = styled.div<{ isDark: boolean }>`
  margin: 30px 0;

  & > div:first-of-type > div > span:nth-child(3) {
    text-transform: capitalize;
  }

  @media (min-width: 590px) {
    & > div:last-of-type {
      padding-top: 9px;
    }
  }

  @media (max-width: 470px) {
    justify-content: center;
    & > div:first-of-type > div {
      flex-direction: column;
    }

    & > div:first-of-type > div > span:nth-child(2) {
      display: none;
    }
    & > div:first-of-type > div > span:nth-child(4) {
      display: none;
    }
  }

  & > div:first-of-type > div {
    margin-right: 10px;
  }

  & > div:first-of-type span {
    margin-left: 10px;
  }

  & > div:first-of-type span:first-of-type {
    color: ${props => (props.isDark ? 'rgb(var(--dark-primary))' : 'rgb(var(--light-primary))')};
  }
`;
