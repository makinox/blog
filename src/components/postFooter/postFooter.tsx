import React from 'react';
import { navigate } from 'gatsby';
import { ShareFooter } from '../../components';

import { Footer, Image, Subtitle, Title, Description, TagFooter } from './styles';
import { Button } from '@makinox/makinox-ui';

export default ({ data, modalHandler, slug, isDark }) => (
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
    <ShareFooter isDark={isDark} modalHandler={modalHandler} data={data} slug={slug} />
    <Footer isDark={isDark} href="https://jesusbossa.dev/" target="_blank">
      <div>
        <Image fixed={data.authorImage.childImageSharp.fixed} />
      </div>
      <div>
        <Subtitle>Escrito por</Subtitle>
        <Title>{data.author}</Title>
        <Description>{data.authorDescription}</Description>
      </div>
    </Footer>
  </>
);
