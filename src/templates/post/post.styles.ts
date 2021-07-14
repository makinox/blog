import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const PrimaryImage = styled(GatsbyImage)`
  width: 100%;
  object-fit: cover;
`;

export const PostResumen = styled.div<{ isDark: boolean }>`
  margin: 30px 0;

  @media (min-width: 550px) {
    & > div:last-of-type {
      padding-top: 9px;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;

    & > div:last-of-type {
      justify-content: center;
      margin-top: 5px;
      display: flex;
      width: 100%;
    }
  }

  @media (max-width: 430px) {
    & > div:first-of-type {
      justify-content: space-between;
      width: 100%;
    }
    & > div:first-of-type > div {
      flex-direction: column;
    }

    & > div:first-of-type > div > span:nth-child(3) {
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
