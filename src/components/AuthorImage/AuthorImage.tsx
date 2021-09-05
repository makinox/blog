import React from 'react';

import { getImage } from 'gatsby-plugin-image';

import { authorImageProps } from './AuthorImage.types';
import { ImageContainer } from './AuthorImage.styles';

function AuthorImage({ imageSrc, authorName, size = 100 }: authorImageProps) {
  const authorSrc = getImage(imageSrc);

  return <ImageContainer image={authorSrc} alt={`Autor ${authorName}`} size={size} />;
}

export default AuthorImage;
