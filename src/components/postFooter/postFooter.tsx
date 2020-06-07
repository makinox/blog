import React from 'react';
import { ShareFooter } from '../../components';
import { Footer, Image, Subtitle, Title, Description, TagFooter, FooterTags } from './styles';

export default ({ data }) => (
  <>
    <TagFooter>
      {data.tags.map((el, key) => (
        <FooterTags to={`/tags/${el}`} key={key}>
          {el}
        </FooterTags>
      ))}
    </TagFooter>
    <ShareFooter />
    <Footer href="https://jesusbossa.dev/" target="_blank">
      {console.log(data)}
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
