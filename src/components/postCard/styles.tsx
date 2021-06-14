import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export const PostCard = styled(Link)`
  text-decoration: none;
`;

export const PostCardImageContainer = styled.div`
  position: relative;
`;

export const PostCardImage = styled(Img)`
  object-fit: cover;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const PostCardInfo = styled.div`
  margin: 10px;
`;

export const PostCardInfoTitle = styled.h2`
  margin: 0;
`;

export const PostSubtitle = styled.span`
  color: #6a737d;
  font-size: 14px;
`;
