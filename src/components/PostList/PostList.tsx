import React from 'react';
import { PostCard } from '..';
import { PostListContainer } from './PostList.styles';

const PostList = ({ data }) => (
  <PostListContainer id="main">
    {data.map((el, idx) => (
      <PostCard data={el} key={idx} />
    ))}
  </PostListContainer>
);

export default React.memo(PostList);
