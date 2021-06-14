import React from 'react';
import { navigate } from 'gatsby';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { CardContainer } from './postCard.styles';

export default ({ data }: { data: object | any }) => {
  const image = getImage(data.node.frontmatter.timage.postImage);

  return (
    <CardContainer
      use="elevated"
      maxWidth="auto"
      onClick={() => navigate(`/${data.node.fields.slug}`)}
      text={data.node.excerpt}
      title={data.node.frontmatter.title}
      secondary={`${data.node.timeToRead} minutos de lectura`}
      customMedia={<GatsbyImage image={image} alt={`${data.node.frontmatter.title} imagen`} />}
    />
  );
};
