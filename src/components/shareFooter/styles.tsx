import styled, { css } from 'styled-components';
import { AiOutlineLink } from 'react-icons/ai';
import { RiHandHeartLine } from 'react-icons/ri';

const intent = css`
  cursor: pointer;
  margin: 0 5px;
  font-size: 20px;
  color: var(--textTercColor);
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

export const MoreButton = styled(AiOutlineLink)`
  ${intent}
`;
