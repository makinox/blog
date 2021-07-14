import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const ImageContainer = styled(GatsbyImage)<{ size: number }>`
  &,
  & img {
    border-radius: 50px;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    min-width: ${props => props.size}px;
    min-height: ${props => props.size}px;
  }
`;
