import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export const PostCard = styled(Link)`
  text-decoration: none;
  margin: 20px 10%;
  border-radius: 20px;
  color: #000;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.06);
`;

export const PostCardImageContainer = styled.div`
  position: relative;
`;

export const PostCardImage = styled(Img)`
  object-fit: cover;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const PostCardInfo = styled.div`
  margin: 10px;
`;

export const PostCardInfoTitle = styled.h2`
  margin: 0;
`;
