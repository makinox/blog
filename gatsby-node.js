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
    }
  `);
  // console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/container/post/post.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};
