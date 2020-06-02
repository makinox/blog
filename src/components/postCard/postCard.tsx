import React from 'react';
// import { Link } from 'gatsby';
import { PostCard, PostCardImageContainer, PostCardImage, PostCardInfo, PostCardInfoTitle } from './styles';

export default ({ data }: { data: object | any }) => (
  <PostCard to={'/' + data.node.fields.slug}>
    <PostCardImageContainer>
      <PostCardImage src="https://i.picsum.photos/id/1014/718/358.jpg" alt="Pan foto" />
    </PostCardImageContainer>
    <PostCardInfo>
      <div>
        <PostCardInfoTitle>{data.node.frontmatter.title}</PostCardInfoTitle>
      </div>
      <div>
        <p>{data.node.excerpt}</p>
      </div>
      {/* <div>
        <Link to={'/' + data.node.fields.slug}>Link</Link>
      </div> */}
    </PostCardInfo>
  </PostCard>
);
