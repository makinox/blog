import React from 'react';
import { graphql } from 'gatsby';
import { FooterTags } from '../utils/styles/re';
import { SEO, LayoutContainer, Navbar } from '../components';

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <>
    <SEO title={'Tags'} />
    <LayoutContainer>
      <Navbar />
      <div>
        <h1 style={{ fontSize: 35 }}>Tags</h1>
      </div>
      <div>
        {group.map((tag, idx) => (
          <FooterTags key={idx} to={`/tags/${tag.fieldValue.split(' ').join('-')}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </FooterTags>
        ))}
      </div>
    </LayoutContainer>
  </>
);

export default TagsPage;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
