import React from 'react';
import { PostCard, PostList } from '../../components';
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              timage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
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
      {posts.allMarkdownRemark.edges.map((el, idx) => (
        <PostCard data={el} key={idx} />
      ))}
    </PostList>
  );
};
