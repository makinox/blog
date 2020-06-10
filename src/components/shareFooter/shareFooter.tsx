import React from 'react';
import { ShareFooter, LoveButton, MoreButton, ThanksContainer, ThanksCounter, LoveContainer } from './styles';
import { FacebookButton, TwitterButton, LinkedinButton } from '../../utils/styles/re';

export default ({ modalHandler, data }) => {
  const URL = `https://blog.jesusbossa.dev/article/${data.title.split(' ').join('_')}`;
  const copyClipboard = () => {
    navigator.clipboard
      .writeText(URL)
      .then(() => alert(`Se ha copiado la URL para que la compartas`))
      .catch(() => console.log('No copiado'));
  };
  const loveHandler = () => modalHandler();

  return (
    <ShareFooter>
      <ThanksContainer>
        <LoveContainer onClick={loveHandler}>
          <LoveButton />
        </LoveContainer>
        <ThanksCounter>Love</ThanksCounter>
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
