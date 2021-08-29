import React from 'react';
import { useRecomendedQuery } from './recomended.graph';
import { CardContainer } from '../postCard/postCard.styles';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { RecomendedRow } from './recomended.styles';
import { navigate } from 'gatsby';

type recomendedObject = {
  timeToRead: number;
  frontmatter: {
    title: string;
    timage: { postImage: ImageDataLike };
  };
  fields: { slug: string };
};

export default function Recomended({ postTitle }: { postTitle: string }) {
  const { allMarkdownRemark: data } = useRecomendedQuery();
  return (
    <section>
      <h2 style={{ marginTop: 40 }}>Últimas historias</h2>
      <RecomendedRow className="flex justify-evenly">
        {data.nodes
          .filter((aux: recomendedObject) => aux.frontmatter.title !== postTitle)
          .slice(0, 3)
          .map((el: recomendedObject) => {
            const image = getImage(el.frontmatter.timage.postImage);
            return (
              <CardContainer
                use="elevated"
                maxWidth="220px"
                title={el.frontmatter.title}
                customMedia={<GatsbyImage image={image} alt={`${el.frontmatter.title} imagen`} />}
                onClick={() => navigate(`/${el.fields.slug}`)}
              />
            );
          })}
      </RecomendedRow>
    </section>
  );
}
