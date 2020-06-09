import styled from 'styled-components';
import { Link } from 'gatsby';

export const FooterTags = styled(Link)`
  display: inline-block;
  margin: 0 4px;
  padding: 2px;
  border-radius: 3px;
  text-decoration: none;
  color: #6a737d;
  background-color: var(--backgroundSecondaryColor);
  box-shadow: 2px 2px 1px 0px rgba(0, 0, 0, 0.06);
`;
