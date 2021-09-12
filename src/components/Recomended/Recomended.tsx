import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { CardContainer } from '../PostCard/PostCard.styles';
import { useRecomendedQuery } from './Recomended.graph';
import { RecomendedRow } from './Recomended.styles';
import { navigate } from 'gatsby';

export default function Recomended({ postTitle, isDark }: { postTitle: string; isDark: boolean }) {
  const { allMarkdownRemark: data } = useRecomendedQuery();
  return (
    <section>
      <h2 style={{ marginTop: 40 }}>Últimas historias</h2>
      <RecomendedRow className="flex justify-evenly">
        {data.nodes
          .filter(aux => aux.frontmatter.title !== postTitle)
          .slice(0, 3)
          .map((el, idx) => {
            const image = getImage(el.frontmatter.timage.postImage);
            return (
              <CardContainer
                key={idx}
                use="elevated"
                maxWidth="220px"
                isDark={isDark}
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
