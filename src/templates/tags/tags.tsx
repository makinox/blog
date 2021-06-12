import React from 'react';
import { graphql } from 'gatsby';
import { SEO, LayoutContainer, Navbar, PostList } from '../../components';
import { FooterTags } from '../../utils/styles/re';

export default function Tags({ pageContext, data }) {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} tagged with "${tag}"`;
  return (
    <>
      <SEO title={`Tag ${tag}`} />

      <Navbar />
      <LayoutContainer>
        <h1>{tagHeader}</h1>
        <PostList data={data.allMarkdownRemark.edges} />
        <div style={{ margin: '30px 0 60px 0' }}>
          <FooterTags to="/tags">All tags</FooterTags>
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
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
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
