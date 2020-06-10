import React from 'react';
import { SEO, Navbar, LayoutContainer, PostList, Pagination } from '../components/';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <LayoutContainer>
      <Navbar />
      {console.log(data.allMarkdownRemark.edges)}
      <PostList data={data.allMarkdownRemark.edges} />
      <Pagination pag={{ currentPage: 1, numPages: 200 }} />
    </LayoutContainer>
  </>
);

export default IndexPage;

export const query = graphql`
  query blogListQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 6) {
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
