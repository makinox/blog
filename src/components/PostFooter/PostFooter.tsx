import React from 'react';
import { navigate } from 'gatsby';
import { AuthorImage, ShareFooter } from '..';

import { Footer, Subtitle, Title, Description, TagFooter } from './PostFooter.styles';
import { getImage } from 'gatsby-plugin-image';
import { Button } from '@makinox/makinox-ui';

export default ({ data, slug, isDark }) => {
  const authorImage = getImage(data.authorImage.authorSrc);

  return (
    <>
      <TagFooter>
        {data.tags.map((el, idx) => (
          <Button
            key={idx}
            use="outlined"
            isDark={isDark}
            style={{ margin: 5 }}
            message={el}
            onClick={() => navigate(`/tags/${el.split(' ').join('-')}`)}
          />
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
