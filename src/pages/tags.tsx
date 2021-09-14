import React, { useContext } from 'react';
import { graphql, navigate } from 'gatsby';
import { ButtonOutline } from '@makinox/makinox-ui';

import { Seo, LayoutContainer, Navbar } from '../components';
import { BlogContext } from '../context/context';
import { TagsQuery } from '../../graphql-types';

function TagsPage({
  data: {
    allMarkdownRemark: { group },
  },
}: {
  data: TagsQuery;
}) {
  const { isDark } = useContext(BlogContext);
  return (
    <>
      <Seo title={'Tags'} pathname="tags/" />
      <Navbar />
      <LayoutContainer>
        <div>
          <h1 style={{ fontSize: 35 }}>Tags</h1>
        </div>
        <div>
          {group.map((tag, idx) => (
            <button
              className={ButtonOutline({ isDark })}
              key={idx}
              style={{ margin: 5 }}
              onClick={() => navigate(`/tags/${tag.fieldValue.split(' ').join('-')}/`)}
            >
              {tag.fieldValue} ({tag.totalCount})
            </button>
          ))}
        </div>
      </LayoutContainer>
    </>
  );
}

export default TagsPage;
export const pageQuery = graphql`
  query Tags {
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
