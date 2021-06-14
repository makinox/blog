import styled from 'styled-components';
import { RiHandHeartLine } from 'react-icons/ri';

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

export const LoveButton = styled(RiHandHeartLine)<{ isDark: boolean }>`
  width: 40px;
  height: 40px;
  padding: 10px;
  ${props => (props.isDark ? `color: rgb(var(--light-primary));` : `color: rgb(var(--dark-primary));`)}
`;

export const ShareSection = styled.div<{ isDark: boolean }>`
  & a,
  & span {
    cursor: pointer;
    margin: 0 5px;
    font-size: 20px;
    ${props => (props.isDark ? `color: rgb(var(--light-primary));` : `color: rgb(var(--dark-primary));`)}
  }
`;
