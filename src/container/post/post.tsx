import React from 'react';
import { graphql } from 'gatsby';
import './styles.css';
import { Navbar, LayoutContainer } from '../../components';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <LayoutContainer>
      <Navbar />
      <div>
        <h1 style={{ fontSize: 40 }}>{post.frontmatter.title}</h1>
        <div className="pan" dangerouslySetInnerHTML={{ __html: post.html }} />
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
