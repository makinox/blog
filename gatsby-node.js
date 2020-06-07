const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  // console.log({ type: node.internal.type, internal: node.internal })
  if (node.internal.type === `MarkdownRemark`) {
    // console.log({ type: node.internal.type, internal: node.internal, rel: getNode(node.parent).relativePath })

    const slug = createFilePath({ node, getNode, basePath: `pages` });
    // console.log(slug.split('/'));
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
      allMarkdownRemark {
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
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error: Error while running GraphQL query.`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
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
};
