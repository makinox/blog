import React, { useContext, useState } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

import { Navbar, PostContainer, SEO, PostFooter, ModalContainer, ModalContent, AuthorImage } from '../../components';
import { BlogContext } from '../../utils/context/context';
import { PostResumen, PrimaryImage } from './post.styles';
import moment from 'moment';
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
        image={post.frontmatter.timage.thumb.childImageSharp.gatsbyImageData.images.fallback.src}
        pathname={`/${pageContext.slug}`}
        keyw={post.frontmatter.tags}
      />
      <Navbar />
      <PrimaryImage image={postImage} alt={post.frontmatter.title} />
      <PostContainer>
        <PostResumen className="flex justify-start" isDark={isDark}>
          <div className="flex items-center">
            <AuthorImage imageSrc={post.frontmatter.authorImage.authorSrc} authorName={post.frontmatter.author} size={40} />
            <div className="flex items-center">
              <span>{post.frontmatter.author}</span>
              <span>·</span>
              <span>{moment(post.frontmatter.date, 'YYYYMMDD').locale('es').fromNow()}</span>
              <span>·</span>
              <span>{post.timeToRead} minutos</span>
            </div>
          </div>
          {/* <ShareFooter isDark={isDark} data={post.frontmatter} slug={pageContext.slug} /> */}
        </PostResumen>
        <h1 style={{ fontSize: 40, marginTop: 16 }}>{post.frontmatter.title}</h1>
        <div className="pan" dangerouslySetInnerHTML={{ __html: post.html }} />
        <PostFooter isDark={isDark} data={post.frontmatter} slug={pageContext.slug} />
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
      timeToRead
      frontmatter {
        title
        author
        date
        authorDescription
        tags
        authorImage {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed
            }
          }
          authorSrc: childImageSharp {
            gatsbyImageData(width: 100, height: 100, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        timage {
          thumb: childImageSharp {
            gatsbyImageData(
              width: 1200
              height: 630
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              transformOptions: { fit: COVER, cropFocus: NORTH }
            )
          }
          postImage: childImageSharp {
            gatsbyImageData(width: 1200, height: 460, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], transformOptions: { fit: COVER })
          }
        }
      }
    }
  }
`;
