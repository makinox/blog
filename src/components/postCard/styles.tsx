import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostCard = styled(Link)`
  text-decoration: none;
`;

export const PostCardImageContainer = styled.div`
  position: relative;
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
