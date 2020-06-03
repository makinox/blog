import React from 'react';
import { Navbar, LayoutContainer } from '../../components';
import { graphql } from 'gatsby';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <LayoutContainer>
      <Navbar />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </LayoutContainer>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
