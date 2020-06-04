import React, { createContext, useState } from 'react';

export const BlogContext = createContext({ theme: {}, changeTheme: null });

export const BlogProvider = ({ children }) => {
  const themes = {
    light: {
      backgroundColor: '#fff',
      backgroundSecondaryColor: '#fafafa',
      textColor: '#000',
      textSecondaryColor: '#292b2e',
      textTercColor: '#00a5b8',
      linkColor: '#345f83',
    },
    dark: {
      backgroundColor: '#282c35',
      backgroundSecondaryColor: '#737c9933',
      textColor: '#fff',
      textSecondaryColor: '#fff',
      textTercColor: '#00a5b8',
      linkColor: '#00a5b8',
    },
  };

  const [theme, setTheme] = useState(themes.dark);

  const changeTheme = () => {
    if (theme.backgroundColor === themes.light.backgroundColor) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
    document.documentElement.style.cssText = `
      --backgroundColor: ${theme.backgroundColor};
      --backgroundSecondaryColor: ${theme.backgroundSecondaryColor};
      --textColor:  ${theme.textColor};
      --textSecondaryColor:  ${theme.textSecondaryColor};
      --textTercColor:  ${theme.textTercColor};
      --linkColor: ${theme.linkColor};
    `;
  };

  return (
    <BlogContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
