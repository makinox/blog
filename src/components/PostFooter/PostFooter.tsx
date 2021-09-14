import React from 'react';
import { navigate } from 'gatsby';
import { AuthorImage, ShareFooter } from '..';

import { Footer, Subtitle, Title, Description, TagFooter } from './PostFooter.styles';
import { getImage } from 'gatsby-plugin-image';
import { ButtonOutline } from '@makinox/makinox-ui';
import { PostQuery, SitePageContext } from '../../../graphql-types';

export default ({
  data,
  slug,
  isDark,
}: {
  data: PostQuery['markdownRemark']['frontmatter'];
  slug: SitePageContext['slug'];
  isDark: boolean;
}) => {
  const authorImage = getImage(data.authorImage.authorSrc);

  return (
    <>
      <TagFooter>
        {data.tags.map((el, idx) => (
          <button
            key={idx}
            className={ButtonOutline({ isDark })}
            style={{ margin: 5 }}
            onClick={() => navigate(`/tags/${el.split(' ').join('-')}`)}
          >
            {el}
          </button>
        ))}
      </TagFooter>
      <div className="flex justify-end">
        <ShareFooter isDark={isDark} data={data} slug={slug} />
      </div>
      <Footer isDark={isDark} href="https://jesusbossa.dev/" target="_blank">
        <AuthorImage imageSrc={authorImage} authorName={data.author} />

        <div>
          <Subtitle>Escrito por</Subtitle>
          <Title>{data.author}</Title>
          <Description>{data.authorDescription}</Description>
        </div>
      </Footer>
    </>
  );
};
