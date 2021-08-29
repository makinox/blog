import React from 'react';
import { ModalContainer } from '../modalContainer/styles';
import { SearchContainer } from './searchContent.styles';

export default () => (
  <ModalContainer full>
    <SearchContainer>
      <div>
        <h3>Buscar </h3>
        <span>equis</span>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <span>lista</span>
        <span>lista</span>
        <span>lista</span>
      </div>
    </SearchContainer>
  </ModalContainer>
);
