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
        <a
          href={`https://www.facebook.com/sharer/sharer.php?t=hola mundo&u=${window.location.href.replace(
            'http://localhost:8000',
            'https://blog.jesusbossa.dev'
          )}`}
          target="_blank"
        >
          <FacebookButton />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${data.title}&url=${window.location.href}&hashtags=${data.tags.join(',')}`}
          target="_blank"
        >
          <TwitterButton />
        </a>
        <span>
          <LinkedinButton />
        </span>
        <span>
          <MoreButton />
        </span>
      </div>
    </ShareFooter>
  );
};
