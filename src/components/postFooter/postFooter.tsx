import React from 'react';
import { Footer, Image, Subtitle, Title, Description, BeFooter, FooterTags } from './styles';

export default ({ data }) => (
  <>
    <BeFooter>
      {data.tags.map((el, key) => (
        <FooterTags to="/" key={key}>
          {el}
        </FooterTags>
      ))}
    </BeFooter>
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
