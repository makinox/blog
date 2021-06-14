import React from 'react';
import { SEO, Navbar, LayoutContainer, PostList, Pagination } from '../components/';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" pathname="/" />
    <Navbar />
    <LayoutContainer>
      <PostList data={data.allMarkdownRemark.edges} />
      <Pagination pag={{ currentPage: 1, numPages: 1 }} />
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
              postImage: childImageSharp {
                gatsbyImageData(
                  width: 900
                  height: 350
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  transformOptions: { fit: COVER }
                )
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
