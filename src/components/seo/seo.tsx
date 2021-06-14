import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description = '', lang = 'es', meta = [], title, image = '', pathname, keyw = [] }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const pathImage = `${site.siteMetadata.siteUrl}${image || site.siteMetadata.image}`;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  if (keyw) {
    site.siteMetadata.keywords.push(...keyw);
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title}`}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: pathImage,
        },
        {
          property: `og:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `article`,
        },
        {
          property: `og:image`,
          content: pathImage,
        },
        {
          name: `twitter:image`,
          content: pathImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
        },
      ].concat(meta)}
    />
  );
}

export default SEO;
