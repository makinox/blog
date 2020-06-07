import React from 'react';
import { graphql } from 'gatsby';

export default function home({ data, pageContext }) {
  const posts = data.allMarkdownRemark.edges;
  console.log({ ...pageContext });
  return (
    <>
      {posts.map(({ node }) => {
        const title = node.fields.slug;
        return <div key={node.fields.slug}>{title}</div>;
      })}
    </>
  );
}

export const query = graphql`
  query query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
