import React, { createContext, useState } from 'react';

export const BlogContext = createContext({ isDark: false, changeTheme: () => {} });

export const BlogProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => {
    setIsDark(prev => !prev);
  };

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
