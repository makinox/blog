import React, { useContext } from 'react';
import { navigate } from 'gatsby';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { CardContainer } from './PostCard.styles';

import { BlogListQuery } from '../../../graphql-types';
import { BlogContext } from '../../context/context';

export default ({ data }: { data: BlogListQuery['allMarkdownRemark']['edges'][0] }) => {
  const image = getImage(data.node.frontmatter.timage.postImage);
  const { isDark } = useContext(BlogContext);

  return (
    <CardContainer
      use="elevated"
      maxWidth="auto"
      isDark={isDark}
      text={data.node.excerpt}
      title={data.node.frontmatter.title}
      onClick={() => navigate(`/${data.node.fields.slug}`)}
      secondary={`${data.node.timeToRead} ${data.node.timeToRead > 1 ? 'minutos' : 'minuto'} de lectura`}
      customMedia={<GatsbyImage image={image} alt={`${data.node.frontmatter.title} imagen`} />}
    />
  );
};
