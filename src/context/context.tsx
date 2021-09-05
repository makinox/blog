import React, { createContext, useState } from 'react';
import { useEffect } from 'react';

export const BlogContext = createContext({ isDark: false, changeTheme: () => {} });

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
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = React.useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogContext.Provider');
  }
  return context;
};
