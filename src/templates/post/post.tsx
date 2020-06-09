import React from 'react';
import './styles.css';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Navbar, LayoutContainer, PostContainer, SEO, PostFooter } from '../../components';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  return (
    <>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <LayoutContainer>
        <Navbar />
      </LayoutContainer>
      <>
        {/* {console.log(post.frontmatter)} */}
        <Img fluid={post.frontmatter.timage.childImageSharp.fluid} />
      </>
      <PostContainer>
        <h1 style={{ fontSize: 40 }}>{post.frontmatter.title}</h1>
        <div className="pan" dangerouslySetInnerHTML={{ __html: post.html }} />
        <PostFooter data={post.frontmatter} />
      </PostContainer>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        author
        authorDescription
        tags
        authorImage {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        timage {
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