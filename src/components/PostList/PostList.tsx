import React from 'react';
import { PostCard } from '..';
import { BlogListQuery } from '../../../graphql-types';
import { PostListContainer } from './PostList.styles';

const PostList = ({ data }: { data: BlogListQuery['allMarkdownRemark']['edges'] }) => (
  <PostListContainer id="main">
    {data.map((el, idx) => (
      <PostCard data={el} key={idx} />
    ))}
  </PostListContainer>
);

export default React.memo(PostList);
