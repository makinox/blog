import React from 'react';
import { ShareFooter } from '../../components';
import { Footer, Image, Subtitle, Title, Description, TagFooter } from './styles';
import { FooterTags } from '../../utils/styles/re';

export default ({ data, modalHandler, slug }) => (
  <>
    <TagFooter>
      {data.tags.map((el, key) => (
        <FooterTags to={`/tags/${el.split(' ').join('-')}`} key={key}>
          {el}
        </FooterTags>
      ))}
    </TagFooter>
    <ShareFooter modalHandler={modalHandler} data={data} slug={slug} />
    <Footer href="https://jesusbossa.dev/" target="_blank">
      {/* {console.log(data)} */}
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
