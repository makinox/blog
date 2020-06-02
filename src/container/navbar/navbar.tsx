import React from 'react';
import { graphql } from 'gatsby';
import { Navbar } from '../../components/';

const NavbarContainer = ({ data }) => <Navbar data={data} handleInput={() => {}} />;

export default NavbarContainer;

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "logo/Cereno.svg" }) {
      publicURL
    }
  }
`;
