import React from 'react';
import { ModalContent as ModalContainer, ModalTitle, ModalHeader, CloseIcon } from './ModalContent.styles';

export default function ModalContent({ modalHandler, isDark }) {
  return (
    <ModalContainer isDark={isDark}>
      <ModalHeader>
        <ModalTitle>Me alegra que te haya gustado</ModalTitle>
        <CloseIcon onClick={modalHandler} />
      </ModalHeader>
      <div>
        <p>
          Si te interesa colaborar, podrías ayudarme compartiendo el post o simplemente hablandome en{' '}
          <a href="https://twitter.com/jesMakinox" target="_blank">
            twitter
          </a>
        </p>
      </div>
    </ModalContainer>
  );
}
