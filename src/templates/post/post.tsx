import React, { useState } from 'react';
import './styles.css';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Navbar, LayoutContainer, PostContainer, SEO, PostFooter, ModalContainer, ModalContent } from '../../components';

export default function BlogPost({ data }) {
  const post = data.markdownRemark;
  const [modal, useModal] = useState(false);
  const toggleModal = () => {
    useModal(!modal);
    console.log(modal);
  };
  return (
    <>
      <SEO title={post.frontmatter.title} description={post.excerpt} image={post.frontmatter.timage.childImageSharp.fluid.src} />
      <LayoutContainer>
        <Navbar />
      </LayoutContainer>
      <Img fluid={post.frontmatter.timage.childImageSharp.fluid} />
      <PostContainer>
        <h1 style={{ fontSize: 40 }}>{post.frontmatter.title}</h1>
        <div className="pan" dangerouslySetInnerHTML={{ __html: post.html }} />
        <PostFooter data={post.frontmatter} modalHandler={toggleModal} />
      </PostContainer>
      {modal ? (
        <ModalContainer full={true} modalHandler={toggleModal}>
          <ModalContent />
        </ModalContainer>
      ) : (
        <></>
      )}
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
