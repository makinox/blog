import React from 'react';
import { ModalContent, ModalTitle, ModalHeader, CloseIcon } from './styles';

export default ({ modalHandler }) => (
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Me elegra que te haya gustado</ModalTitle>
      <CloseIcon onClick={modalHandler} />
    </ModalHeader>
    <div>
      <p>Si te interesa colaborar, podrias ayudarme compartiendo el post, comprandome un cafe o simplemente hablandome en twitter</p>
    </div>
  </ModalContent>
);
