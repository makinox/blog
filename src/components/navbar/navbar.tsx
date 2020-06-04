import React, { useContext } from 'react';
import { BlogContext } from '../../utils/context/context';
import { useStaticQuery, graphql } from 'gatsby';
import { Nav, InputContainer, Input, Logo, LogoWrapper } from './styles';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/Blog.svg" }) {
        publicURL
      }
    }
  `);
  const { changeTheme } = useContext(BlogContext);
  const handleInput = e => console.log(e.target.value);
  const handleTheme = () => changeTheme();

  return (
    <Nav>
      <LogoWrapper to="/">
        <Logo src={data.placeholderImage.publicURL} alt="Cereno logo" />
      </LogoWrapper>
      <InputContainer>
        <Input placeholder="Buscar" type="text" onChange={handleInput} />
      </InputContainer>
      <div onClick={handleTheme}>
        <span>x</span>
      </div>
    </Nav>
  );
};
