import React from 'react';
import { Footer, Image, Subtitle, Title, Description } from './styles';

export default ({ data }) => (
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
);
