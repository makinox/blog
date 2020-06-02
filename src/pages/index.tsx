import React from 'react';
import { SEO, Navbar, LayoutContainer } from '../components/';
import { Main } from '../container/';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <LayoutContainer>
      <Navbar />
      <Main />
    </LayoutContainer>
  </>
);

export default IndexPage;
