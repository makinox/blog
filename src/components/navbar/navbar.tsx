import React, { useContext, useState } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { BlogContext } from '../../utils/context/context';
import { TwitterButton, LinkedinButton, HomeButton } from '../../utils/styles/re';
import { Bar, Logo, ThemeButton } from './navbar.styles';

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
  const handleTheme = () => {
    useIcon(!icon);
    changeTheme();
  };
  return (
    <Bar
      isDark={icon}
      leftChild={
        <div className="flex items-center">
          <Logo src={data.placeholderImage.publicURL} alt="Cereno logo" onClick={() => navigate('/')} />
          <div onClick={handleTheme}>
            <ThemeButton>{icon ? '🌞' : '🌙'}</ThemeButton>
          </div>
        </div>
      }
      rightChild={
        <>
          <a href={`https://jesusbossa.dev/`} target="_blank">
            <HomeButton />
          </a>
          <a href={`https://twitter.com/jesMakinox`} target="_blank">
            <TwitterButton />
          </a>
          <a href={`https://www.linkedin.com/in/makinox/`} target="_blank">
            <LinkedinButton />
          </a>
        </>
      }
    />
  );
};
