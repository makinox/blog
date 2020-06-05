import React from 'react';
import './styles.css';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Navbar, LayoutContainer, PostContainer, SEO } from '../../components';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <>
      <SEO title={post.frontmatter.title} />
      <LayoutContainer>
        <Navbar />
      </LayoutContainer>
      <>
        {console.log(post.frontmatter)}
        <Img fluid={post.frontmatter.timage.childImageSharp.fluid} />
      </>
      <PostContainer>
        <h1 style={{ fontSize: 40 }}>{post.frontmatter.title}</h1>
        <div className="pan" dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostContainer>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        timage {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 460) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
