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

export default ({ modalHandler }) => {
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
        <span>
          <FacebookButton />
        </span>
        <span>
          <TwitterButton />
        </span>
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
