import { useStaticQuery, graphql } from 'gatsby';
import { RecomendedQuery } from '../../../graphql-types';

export const useRecomendedQuery = () => {
  const data: RecomendedQuery = useStaticQuery(
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
