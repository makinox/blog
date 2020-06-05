import styled from 'styled-components';
import { Link } from 'gatsby';

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 10px;
`;

export const Logo = styled.img`
  cursor: pointer;
  width: 110px;
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
