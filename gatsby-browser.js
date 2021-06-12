const React = require('react');

const { GlobalStyles } = require('./src/components/globalStyles/GlobalStyles');
const { BlogProvider } = require('./src/utils/context/context');

require('./src/layout/colors.css');
require('@makinox/makinox-ui/dist/index.css');

exports.wrapRootElement = ({ element }) => (
  <BlogProvider>
    <GlobalStyles />
    {element}
  </BlogProvider>
);
