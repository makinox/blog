import styled from 'styled-components';

export const Bar = styled.section<{ isDark: boolean }>`
  & > div:nth-child(2) a {
    text-decoration: none;
    cursor: pointer;
  }
  & svg,
  & > div:nth-child(2) a {
    ${props => {
      if (props.theme?.isDark || props.isDark) {
        return `
        color: rgb(var(--dark-primary)) !important;
      `;
      } else {
        return `
        color: rgb(var(--light-primary)) !important;
      `;
      }
    }}
  }

  @media (max-width: 435px) {
    & > div a,
    & > div svg {
      font-size: 18px;
      height: 18px;
      width: 18px;
      margin: 0 3px !important;
    }
  }
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 110px;
  height: 34px;
`;

export const ThemeButton = styled.span`
  cursor: pointer;
  padding: 10px;
`;

export const NavbarLink = styled.a<{ isDark: boolean }>`
  margin: 0 5px;
  cursor: pointer;
  font-size: 20px;
  ${props => (props.isDark ? `color: rgb(var(--dark-primary));` : `color: rgb(var(--light-primary));`)}
`;
