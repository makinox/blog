import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

interface ItemProps {
  readonly activate: boolean;
}

export const Nav = styled.nav<ItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  ${props =>
    props.activate &&
    css`
       {
        position: fixed;
        left: 0;
        right: 0;
        background-color: var(--backgroundColor);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        z-index: 1;
      }
    `}
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 110px;
`;

export const NavFirst = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoWrapper = styled(Link)`
  text-decoration: none;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-self: flex-start;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  margin: 0 2vw;
  padding: 10px;
  border-radius: 10px;
  background: linear-gradient(90deg, rgba(248, 248, 248, 1) 0%, rgba(255, 255, 255, 1) 100%);
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

export const ThemeButton = styled.span`
  cursor: pointer;
  padding: 10px;
`;
