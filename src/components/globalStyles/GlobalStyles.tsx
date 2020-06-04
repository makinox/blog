import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --backgroundColor: #fff;
    --backgroundSecondaryColor: #fafafa;
    --textColor: #000;
    --textSecondaryColor: #292b2e;
    --textTercColor: #00a5b8;
    --linkColor: #345f83;
  }

  body {
    background: var(--backgroundColor) ;
    color: var(--textColor);
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cabin';
    color: var(--textColor);
  }
`;
