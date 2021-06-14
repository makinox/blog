import React, { useContext, useState } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

import { Navbar, PostContainer, SEO, PostFooter, ModalContainer, ModalContent } from '../../components';
import { BlogContext } from '../../utils/context/context';
import { PrimaryImage } from './post.styles';
import './styles.css';

export default function BlogPost({ data, pageContext }) {
  const { isDark } = useContext(BlogContext);
  const post = data.markdownRemark;
  const postImage = getImage(post.frontmatter.timage.postImage);

  const [modal, useModal] = useState(false);
  const toggleModal = () => useModal(!modal);
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        image={post.frontmatter.timage.thumb.fluid.src}
        pathname={`/${pageContext.slug}`}
        keyw={post.frontmatter.tags}
      />
      <Navbar />
      <PrimaryImage image={postImage} alt={post.frontmatter.title} />
      <PostContainer>
        <h1 style={{ fontSize: 40 }}>{post.frontmatter.title}</h1>
        <div className="pan" dangerouslySetInnerHTML={{ __html: post.html }} />
        <PostFooter data={post.frontmatter} modalHandler={toggleModal} slug={pageContext.slug} />
      </PostContainer>
      {modal ? (
        <ModalContainer full={true}>
          <ModalContent isDark={isDark} modalHandler={toggleModal} />
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
          thumb: childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 628) {
              ...GatsbyImageSharpFluid
            }
          }
          postImage: childImageSharp {
            gatsbyImageData(width: 1200, height: 460, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], transformOptions: { fit: COVER })
          }
        }
      }
    }
  }
`;
