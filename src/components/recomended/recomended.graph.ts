import { useStaticQuery, graphql } from 'gatsby';
export const useRecomendedQuery = () => {
  const data = useStaticQuery(
    graphql`
      query Recomended {
        allMarkdownRemark(limit: 4, sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            timeToRead
            frontmatter {
              title
              timage {
                postImage: childImageSharp {
                  gatsbyImageData(
                    width: 1200
                    height: 460
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                    transformOptions: { fit: COVER }
                  )
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    `
  );
  return data;
};
