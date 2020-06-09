import React from 'react';
import { ModalContainer } from './styles';

export default ({ children, full, modalHandler }) => (
  <ModalContainer onClick={modalHandler} full={full}>
    {children}
  </ModalContainer>
);
