import React from 'react';
// import lazy from '@loadable/component';
// const Main = lazy(() => import('../container/main/main'));
// const SEO = lazy(() => import('../components/seo/seo'));
// const Navbar = lazy(() => import('../components/navbar/navbar'));
// const LayoutContainer = lazy(() => import('../components/layoutContainer/layoutContainer'));
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
