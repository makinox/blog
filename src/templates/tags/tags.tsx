import React, { useContext } from 'react';
import { graphql, navigate } from 'gatsby';

import { Seo, LayoutContainer, Navbar, PostList } from '../../components';
import { SitePageContext, TagQuery } from '../../../graphql-types';
import { BlogContext } from '../../context/context';

import { ButtonOutline } from '@makinox/makinox-ui';

export default function Tags({ pageContext, data }: { data: TagQuery; pageContext: SitePageContext }) {
  const { isDark } = useContext(BlogContext);
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${detectPlural(totalCount)} tageado${detectPlural(totalCount)} como "${tag}"`;

  function detectPlural(num: number) {
    return num === 1 ? '' : 's';
  }

  return (
    <>
      <Seo title={`Tag ${tag}`} pathname={`tags/${tag}`} />

      <Navbar />
      <LayoutContainer>
        <h1>{tagHeader}</h1>
        <PostList data={data.allMarkdownRemark.edges} />
        <div style={{ margin: '30px 0 60px 0' }}>
          <button className={ButtonOutline({ isDark })} style={{ margin: 5 }} onClick={() => navigate('/tags')}>
            Todos los tags
          </button>
        </div>
      </LayoutContainer>
    </>
  );
}

export const query = graphql`
  query Tag($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
