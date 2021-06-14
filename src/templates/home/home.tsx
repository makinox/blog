import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import { SEO, LayoutContainer, Navbar, PostList, Pagination } from '../../components';
import { BlogContext } from '../../utils/context/context';

export default ({ data, pageContext }) => {
  const { isDark } = useContext(BlogContext);
  return (
    <>
      <SEO title="Home" pathname="/home" />
      <Navbar />
      <LayoutContainer>
        <PostList data={data.allMarkdownRemark.edges} />
        <Pagination isDark={isDark} pag={pageContext} />
      </LayoutContainer>
    </>
  );
};

export const query = graphql`
  query query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            timage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
          excerpt
        }
      }
    }
  }
`;
