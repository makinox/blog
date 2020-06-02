import React from 'react';
import { PostCard, PostList } from '../../components';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              timage
            }
            timeToRead
            excerpt
          }
        }
      }
    }
  `);

  return (
    <PostList>
      {console.log(posts.allMarkdownRemark.edges)}
      {posts.allMarkdownRemark.edges.map((el, idx) => (
        <PostCard data={el} key={idx} />
      ))}
    </PostList>
  );
};
