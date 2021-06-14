const React = require('react');

const { GlobalStyles } = require('./src/components/globalStyles/GlobalStyles');
const { BlogProvider, BlogContext } = require('./src/utils/context/context');

require('./src/layout/colors.css');
require('@makinox/makinox-ui/dist/index.css');

function RootElement() {
  const { isDark } = React.useContext(BlogContext);

  return <GlobalStyles theme={{ isDark }} />;
}

exports.wrapRootElement = ({ element }) => (
  <BlogProvider>
    <RootElement />
    {element}
  </BlogProvider>
);
