import React from 'react';
import { ModalContent, ModalTitle, ModalHeader, CloseIcon, ModalParragraph } from './styles';

export default ({ modalHandler }) => (
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Me elegra que te haya gustado</ModalTitle>
      <CloseIcon onClick={modalHandler} />
    </ModalHeader>
    <div>
      <ModalParragraph>
        Si te interesa colaborar, podrias ayudarme compartiendo el post o simplemente hablandome en{' '}
        <a href="https://twitter.com/jesMakinox" target="_blank">
          twitter
        </a>
      </ModalParragraph>
    </div>
  </ModalContent>
);
