import React from 'react';
import { PostCard, PostCardImageContainer, PostCardImage, PostCardInfo, PostCardInfoTitle } from './styles';

export default ({ data }: { data: object | any }) => {
  return (
    <PostCard to={'/' + data.node.fields.slug}>
      {/* {console.log(data.node)} */}
      <PostCardImageContainer>
        <PostCardImage fluid={data.node.frontmatter.timage.childImageSharp.fluid} alt="Pan foto" />
      </PostCardImageContainer>
      <PostCardInfo>
        <div>
          <PostCardInfoTitle>{data.node.frontmatter.title}</PostCardInfoTitle>
        </div>
        <div>
          <p>{data.node.excerpt}</p>
        </div>
      </PostCardInfo>
    </PostCard>
  );
};
