import React, { useContext } from 'react';
import { graphql } from 'gatsby';

import { SEO, Navbar, LayoutContainer, PostList, Pagination } from '../components/';
import { BlogContext } from '../utils/context/context';

function IndexPage({ data }) {
  const { isDark } = useContext(BlogContext);
  return (
    <>
      <SEO title="Home" pathname="/" image={data.preview.childImageSharp.gatsbyImageData.images.fallback.src} />
      <Navbar />
      <LayoutContainer>
        <PostList data={data.allMarkdownRemark.edges} />
        <Pagination isDark={isDark} pag={{ currentPage: 1, numPages: 1 }} />
      </LayoutContainer>
    </>
  );
}

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
    preview: file(relativePath: { eq: "preview.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1200
          height: 630
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
          transformOptions: { fit: COVER, cropFocus: NORTH }
        )
      }
    }
  }
`;
