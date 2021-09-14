import { useStaticQuery, graphql } from 'gatsby';
import { NavbarQuery } from '../../../graphql-types';

export const useNavbarQuery = () => {
  const data: NavbarQuery = useStaticQuery(
    graphql`
      query Navbar {
        placeholderImage: file(relativePath: { eq: "logo/Blog.svg" }) {
          publicURL
        }
      }
    `
  );
  return data;
};
