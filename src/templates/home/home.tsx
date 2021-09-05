import React, { useContext } from 'react';
import { graphql } from 'gatsby';

// import { SEO, LayoutContainer, Navbar, PostList, Pagination } from '../../components';
// import { BlogContext } from '../../utils/context/context';

export default ({ data, pageContext }) => {
  // const { isDark } = useContext(BlogContext);
  return (
    <>
      {console.log({ data })}
      {/* <SEO title="Home" pathname="/home" image={data.preview.childImageSharp.gatsbyImageData.images.fallback.src} />
      <Navbar />
      <LayoutContainer>
        <PostList data={data.allMarkdownRemark.edges} />
        <Pagination isDark={isDark} pag={pageContext} />
      </LayoutContainer> */}
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
