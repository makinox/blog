import React from 'react';
import {
  ShareFooter,
  LoveButton,
  FacebookButton,
  TwitterButton,
  LinkedinButton,
  MoreButton,
  ThanksContainer,
  ThanksCounter,
} from './styles';

export default () => (
  <ShareFooter>
    <ThanksContainer>
      <span>
        <LoveButton />
      </span>
      <ThanksCounter>26 Love</ThanksCounter>
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
