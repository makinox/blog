const path = require('path');
const fs = require('fs');
const { CreateImage } = require('@makinox/image-creator');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    // console.log('Creating imagessss');
    const metadata = node.frontmatter;
    // console.log({ metadata, getNode });
    if (metadata.timage === 'no') {
      const imageDir = `./src/images/archive/${metadata.idx}`;

      if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir);
      }

      CreateImage({ filePath: `${imageDir}/0.png` })
        .then(created => console.log({ created }))
        .catch(err => console.error({ err }));
    }
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    actions.createNodeField({
      node,
      name: `slug`,
      value: `article/${slug.split('/')[1]}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      indexGroup: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }

      homeGroup: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error: Error while running GraphQL query.`);
    return;
  }

  result.data.indexGroup.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post/post.tsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  result.data.tagsGroup.group.forEach(tag => {
    actions.createPage({
      path: `/tags/${tag.fieldValue.split(' ').join('-')}/`,
      component: path.resolve(`./src/templates/tags/tags.tsx`),
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  const posts = result.data.homeGroup.edges;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/home` : `/home/${i + 1}`,
      component: path.resolve('./src/templates/home/home.tsx'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
