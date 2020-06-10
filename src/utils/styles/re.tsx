import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaHome } from 'react-icons/fa';

const intent = css`
  cursor: pointer;
  margin: 0 5px;
  font-size: 20px;
  color: var(--textTercColor);
`;

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

export const FacebookButton = styled(FaFacebookSquare)`
  ${intent}
`;

export const LinkedinButton = styled(FaLinkedin)`
  ${intent}
`;

export const TwitterButton = styled(FaTwitterSquare)`
  ${intent}
`;

export const HomeButton = styled(FaHome)`
  ${intent}
`;
