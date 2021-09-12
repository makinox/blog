import { useStaticQuery, graphql } from 'gatsby';
import { SeoQuery } from '../../../graphql-types';

export const useSeoContent = () => {
  const data: SeoQuery = useStaticQuery(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  );
  return data;
};
