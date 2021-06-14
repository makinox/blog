import { useStaticQuery, graphql } from 'gatsby';
export const useNavbarQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo/Blog.svg" }) {
          publicURL
        }
      }
    `
  );
  return data;
};
