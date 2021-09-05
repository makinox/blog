const React = require('react');

const { BlogProvider } = require('./src/context/context');

require('./src/layout/colors.css');
require('@makinox/makinox-ui/dist/index.css');

exports.wrapRootElement = ({ element }) => <BlogProvider>{element}</BlogProvider>;
