import { getImage } from 'gatsby-plugin-image';
import { authorImageProps } from './authorImage.types';
import React from 'react';
import { ImageContainer } from './authorImage.styles';

function AuthorImage({ imageSrc, authorName, size = 100 }: authorImageProps) {
  const authorSrc = getImage(imageSrc);

  return <ImageContainer image={authorSrc} alt={`Autor ${authorName}`} size={size} />;
}

export default AuthorImage;
