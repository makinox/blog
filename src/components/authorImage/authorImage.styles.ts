import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const ImageContainer = styled(GatsbyImage)<{ size: number }>`
  border-radius: 50px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;

  & img {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
  }
`;
