import React, { useState } from 'react';
import {
  ShareFooter,
  LoveButton,
  FacebookButton,
  TwitterButton,
  LinkedinButton,
  MoreButton,
  ThanksContainer,
  ThanksCounter,
  LoveContainer,
} from './styles';

export default ({ modalHandler, data }) => {
  const [love, useLove] = useState(26);
  const URL = typeof window !== 'undefined' && window.location.href.replace('http://localhost:8000', 'https://blog.jesusbossa.dev');
  const copyClipboard = () => {
    document.execCommand(URL);
    alert(`Se ha copiado la URL para que la compartas`);
  };
  const loveHandler = () => {
    modalHandler();
    useLove(love + 1);
  };

  return (
    <ShareFooter>
      <ThanksContainer>
        <LoveContainer onClick={loveHandler}>
          <LoveButton />
        </LoveContainer>
        <ThanksCounter>{love} Love</ThanksCounter>
      </ThanksContainer>
      <div>
        <a href={`https://www.facebook.com/sharer/sharer.php?t=hola mundo&u=${URL}`} target="_blank">
          <FacebookButton />
        </a>
        <a href={`https://twitter.com/intent/tweet?text=${data.title}&url=${URL}&hashtags=${data.tags.join(',')}`} target="_blank">
          <TwitterButton />
        </a>
        <a href={`https://www.linkedin.com/shareArticle?&url=${URL}&title=${data.title}`} target="_blank">
          <LinkedinButton />
        </a>
        <span onClick={copyClipboard}>
          <MoreButton />
        </span>
      </div>
    </ShareFooter>
  );
};
