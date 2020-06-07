import React from 'react';
import { SEO, Navbar, LayoutContainer, PostList } from '../components/';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <LayoutContainer>
      <Navbar />
      <PostList data={data.allMarkdownRemark.edges} />
    </LayoutContainer>
  </>
);

export default IndexPage;

export const query = graphql`
  query blogListQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
