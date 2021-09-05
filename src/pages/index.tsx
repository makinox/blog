import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Navbar } from '../components';

const IndexPage = () => (
  <>
    <Navbar />
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </>
);

export default IndexPage;
