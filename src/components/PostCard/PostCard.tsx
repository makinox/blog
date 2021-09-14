import React, { useContext } from 'react';
import { Card } from '@makinox/makinox-ui';
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
      className={Card({ isDark, css: { maxWidth: '100%' }, type: 'elevated' })}
      onClick={() => navigate(`/${data.node.fields.slug}`)}
    >
      <div className="card-media">
        <GatsbyImage image={image} alt={`${data.node.frontmatter.title} imagen`} />
      </div>
      <div className="card-header">
        <h6 className="headline6">{data.node.frontmatter.title}</h6>
        <span className="subtitle1">
          {data.node.timeToRead} {data.node.timeToRead > 1 ? 'minutos' : 'minuto'} de lectura
        </span>
      </div>
      <div className="card-body">
        <p className="body2">{data.node.excerpt}</p>
      </div>
    </CardContainer>
  );
};
