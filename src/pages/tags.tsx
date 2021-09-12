import React, { useContext } from 'react';
import { graphql, navigate } from 'gatsby';
import { Button } from '@makinox/makinox-ui';

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
            <Button
              key={idx}
              use="outlined"
              isDark={isDark}
              style={{ margin: 5 }}
              message={`${tag.fieldValue} (${tag.totalCount})`}
              onClick={() => navigate(`/tags/${tag.fieldValue.split(' ').join('-')}/`)}
            />
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
