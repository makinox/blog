import React from 'react';
import { PostCard } from '../';
import { PostListContainer } from './styles';

export default ({ data }) => (
  <PostListContainer id="main">
    {data.map((el, idx) => (
      <PostCard data={el} key={idx} />
    ))}
  </PostListContainer>
);
