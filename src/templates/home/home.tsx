import React from 'react';
import { graphql } from 'gatsby';
import { SEO, LayoutContainer, Navbar, PostList, Pagination } from '../../components';

export default ({ data, pageContext }) => (
  <>
    <SEO title="Pan" />
    <LayoutContainer>
      <Navbar />
      <PostList data={data.allMarkdownRemark.edges} />
      <Pagination pag={pageContext} />
    </LayoutContainer>
  </>
);

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
