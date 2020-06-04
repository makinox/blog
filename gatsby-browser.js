const React = require('react');
const { GlobalStyles } = require('./src/components/globalStyles/GlobalStyles');
const { BlogProvider } = require('./src/utils/context/context');

exports.wrapRootElement = ({ element }) => (
  <BlogProvider>
    <GlobalStyles />
    {element}
  </BlogProvider>
);
