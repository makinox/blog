import React, { createContext, useState, useEffect } from 'react';
import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles';
import { ContextProp } from './context.types';

export const BlogContext = createContext<ContextProp | undefined>(undefined);

export const BlogProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => {
    setIsDark(prev => !prev);
  };

  useEffect(() => {
    setIsDark(Boolean(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches));
  }, []);

  return (
    <BlogContext.Provider
      value={{
        isDark,
        changeTheme,
      }}
    >
      <GlobalStyles theme={{ isDark }} />
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = React.useContext(BlogContext);
  if (context === undefined) {
    console.error('useBlog must be used within a BlogContext.Provider');
  }
  return context;
};
