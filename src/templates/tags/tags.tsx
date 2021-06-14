import React, { useContext } from 'react';
import { graphql, navigate } from 'gatsby';

import { SEO, LayoutContainer, Navbar, PostList } from '../../components';
import { BlogContext } from '../../utils/context/context';
import { Button } from '@makinox/makinox-ui';

export default function Tags({ pageContext, data }) {
  const { isDark } = useContext(BlogContext);
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;
  return (
    <>
      <SEO title={`Tag ${tag}`} pathname="tag" />

      <Navbar />
      <LayoutContainer>
        <h1>{tagHeader}</h1>
        <PostList data={data.allMarkdownRemark.edges} />
        <div style={{ margin: '30px 0 60px 0' }}>
          <Button use="outlined" isDark={isDark} style={{ margin: 5 }} message="Todos los tags" onClick={() => navigate('/tags')} />
        </div>
      </LayoutContainer>
    </>
  );
}

export const query = graphql`
  query($tag: String) {
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
