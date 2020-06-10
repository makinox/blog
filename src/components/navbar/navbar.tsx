import React, { useContext, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BlogContext } from '../../utils/context/context';
import { Nav, Logo, LogoWrapper, ThemeButton, NavFirst } from './styles';
import { TwitterButton, LinkedinButton, HomeButton } from '../../utils/styles/re';

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
  // const handleInput = e => console.log(e.target.value);
  const handleTheme = () => {
    useIcon(!icon);
    changeTheme();
  };
  return (
    <Nav activate={false}>
      <NavFirst>
        <LogoWrapper to="/">
          <Logo src={data.placeholderImage.publicURL} alt="Cereno logo" />
        </LogoWrapper>
        <div onClick={handleTheme}>
          <ThemeButton>{icon ? '🌞' : '🌙'}</ThemeButton>
        </div>
      </NavFirst>
      <div>
        <a href={`https://jesusbossa.dev/`} target="_blank">
          <HomeButton />
        </a>
        <a href={`https://twitter.com/jesMakinox`} target="_blank">
          <TwitterButton />
        </a>
        <a href={`https://www.linkedin.com/in/makinox/`} target="_blank">
          <LinkedinButton />
        </a>
      </div>
    </Nav>
  );
};
