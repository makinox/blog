import React from 'react';
import { PostCard, PostCardImageContainer, PostCardImage, PostCardInfo, PostCardInfoTitle, PostSubtitle } from './styles';

export default ({ data }: { data: object | any }) => {
  return (
    <PostCard to={'/' + data.node.fields.slug}>
      {/* {console.log(data.node)} */}
      <PostCardImageContainer>
        <PostCardImage fluid={data.node.frontmatter.timage.childImageSharp.fluid} alt="Foto del blog" />
      </PostCardImageContainer>
      <PostCardInfo>
        <div>
          <PostCardInfoTitle>{data.node.frontmatter.title}</PostCardInfoTitle>
          <PostSubtitle>{data.node.timeToRead} minutos de lectura</PostSubtitle>
        </div>
        <div>
          <p>{data.node.excerpt}</p>
        </div>
      </PostCardInfo>
    </PostCard>
  );
};
