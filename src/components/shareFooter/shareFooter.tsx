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

export default () => {
  const [love, useLove] = useState(26);

  return (
    <ShareFooter>
      <ThanksContainer>
        <LoveContainer onClick={() => useLove(love + 1)}>
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
