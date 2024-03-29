module.exports = {
  siteMetadata: {
    title: `Voib - Un blog de Jesús David Bossa`,
    description: `Un blog para compartir opinión de programación y videojuegos. Sientete como en casa, tratare de escribir temas recurrentemente`,
    author: `Jesús David Bossa`,
    keywords: ['Blog', 'Gaming', 'Tech', 'Jesús David Bossa', 'Jesus david bossa'],
    siteUrl: 'https://voib.jesusbossa.dev',
    image: '/preview.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Voib`,
        short_name: `Voib`,
        start_url: `/`,
        background_color: `#0087AA`,
        theme_color: `#0087AA`,
        display: `minimal-ui`,
        icon: `src/images/logo/B.svg`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              quality: 80,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `archive`,
        path: `${__dirname}/src/archive`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Open Sans', 'Cabin'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://voib.jesusbossa.dev',
        sitemap: 'https://voib.jesusbossa.dev/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
        trickle: false,
        minimum: 0.4,
      },
    },
  ],
};
