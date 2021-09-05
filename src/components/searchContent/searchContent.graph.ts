import { useStaticQuery, graphql } from 'gatsby';

export const useSearchContent = () => {
  const data = useStaticQuery(
    graphql`
      query SEO {
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
