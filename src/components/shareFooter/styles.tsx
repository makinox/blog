import styled, { css } from 'styled-components';
import { IoIosMore } from 'react-icons/io';
import { RiHandHeartLine } from 'react-icons/ri';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const intent = css`
  cursor: pointer;
  margin: 0 5px;
  font-size: 20px;
  color: var(--textSecondaryColor);
`;

export const ThanksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ThanksCounter = styled.span`
  margin-left: 10px;
`;

export const ShareFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoveContainer = styled.span`
  cursor: pointer;
`;

export const LoveButton = styled(RiHandHeartLine)`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  padding: 10px;
  color: var(--textSecondaryColor);
  border: 1px solid var(--textTercColor);
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
export const MoreButton = styled(IoIosMore)`
  ${intent}
`;
