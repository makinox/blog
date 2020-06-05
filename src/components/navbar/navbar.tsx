import React, { useContext, useState } from 'react';
import { BlogContext } from '../../utils/context/context';
import { useStaticQuery, graphql } from 'gatsby';
import { Nav, InputContainer, Input, Logo, LogoWrapper, ThemeButton } from './styles';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo/Blog.svg" }) {
        publicURL
      }
    }
  `);
  const { changeTheme } = useContext(BlogContext);
  const [icon, useIcon] = useState(false);
  const handleInput = e => console.log(e.target.value);
  const handleTheme = () => {
    useIcon(!icon);
    changeTheme();
  };

  return (
    <Nav>
      <LogoWrapper to="/">
        <Logo src={data.placeholderImage.publicURL} alt="Cereno logo" />
      </LogoWrapper>
      <InputContainer>
        <Input placeholder="Buscar" type="text" onChange={handleInput} />
      </InputContainer>
      <div onClick={handleTheme}>
        <ThemeButton>{icon ? '🌞' : '🌙'}</ThemeButton>
      </div>
    </Nav>
  );
};
