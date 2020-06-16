import React from 'react';
import { ModalContent, ModalTitle, ModalHeader, CloseIcon, ModalParragraph } from './styles';

export default ({ modalHandler }) => (
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Me alegra que te haya gustado</ModalTitle>
      <CloseIcon onClick={modalHandler} />
    </ModalHeader>
    <div>
      <ModalParragraph>
        Si te interesa colaborar, podrías ayudarme compartiendo el post o simplemente hablandome en{' '}
        <a href="https://twitter.com/jesMakinox" target="_blank" style={{ color: 'var(--linkColor)' }}>
          twitter
        </a>
      </ModalParragraph>
    </div>
  </ModalContent>
);
