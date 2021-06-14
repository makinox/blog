import styled from 'styled-components';

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

export const LoveContainer = styled.span<{ isDark: boolean }>`
  cursor: pointer;
  & > svg {
    width: 40px;
    height: 40px;
    ${props => (props.isDark ? `color: rgb(var(--dark-primary));` : `color: rgb(var(--light-primary));`)}
  }
`;

export const ShareSection = styled.div<{ isDark: boolean }>`
  & a,
  & span {
    cursor: pointer;
    margin: 0 5px;
    font-size: 20px;
    ${props => (props.isDark ? `color: rgb(var(--dark-primary));` : `color: rgb(var(--light-primary));`)}
  }
`;
