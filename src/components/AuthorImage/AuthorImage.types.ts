import { ImageDataLike } from 'gatsby-plugin-image';

export interface authorImageProps {
  imageSrc: ImageDataLike;
  authorName: string;
  size?: number;
}
