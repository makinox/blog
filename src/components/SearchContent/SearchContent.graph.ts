import { useStaticQuery, graphql } from 'gatsby';
import { SearchQuery } from '../../../graphql-types';

export const useSearchContent = () => {
  const data: SearchQuery = useStaticQuery(
    graphql`
      query Search {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    `
  );
  return data;
};
