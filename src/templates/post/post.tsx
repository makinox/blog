import React, { useContext, useState } from 'react';
import { subDays, formatDistance } from 'date-fns';
import { getImage } from 'gatsby-plugin-image';
import { IoMdArrowBack } from 'react-icons/io';
import { ButtonText } from '@makinox/makinox-ui';
import { graphql, navigate } from 'gatsby';
import { es } from 'date-fns/locale';

import { Navbar, PostContainer, Seo, PostFooter, ModalContainer, ModalContent, AuthorImage, Recomended } from '../../components';
import { PostQuery, SitePageContext } from '../../../graphql-types';
import { PostResumen, PrimaryImage } from './post.styles';
import { BlogContext } from '../../context/context';
import './styles.css';

export default function BlogPost({ data, pageContext }: { data: PostQuery; pageContext: SitePageContext }) {
  const { isDark } = useContext(BlogContext);
  const post = data.markdownRemark;
  const postImage = getImage(post.frontmatter.timage.postImage);

  const [modal, useModal] = useState(false);
  const toggleModal = () => useModal(!modal);
  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.excerpt}
        image={post.frontmatter.timage.thumb.gatsbyImageData.images.fallback.src}
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
              <span>{formatDistance(subDays(new Date(post.frontmatter.date), 0), new Date(), { locale: es, addSuffix: true })}</span>
              <span>·</span>
              <span>
                {post.timeToRead} {post.timeToRead > 1 ? 'minutos' : 'minuto'}
              </span>
            </div>
          </div>
        </PostResumen>
        <h1 style={{ fontSize: 40, marginTop: 16 }}>{post.frontmatter.title}</h1>
        <div className="pan" dangerouslySetInnerHTML={{ __html: post.html }} />
        <Recomended isDark={isDark} postTitle={post.frontmatter.title} />
        <section style={{ marginTop: 20 }}>
          <button className={ButtonText({ isDark })} onClick={() => navigate('/')}>
            <IoMdArrowBack size={18} style={{ marginRight: 10 }} />
            <span>Regresar al home</span>
          </button>
        </section>
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
  query Post($slug: String!) {
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
