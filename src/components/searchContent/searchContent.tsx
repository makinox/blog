import React from 'react';
import { ModalContainer } from '../modalContainer/styles';
import { SearchContainer } from './searchContent.styles';
import { BsFullscreenExit } from 'react-icons/bs';

export default () => (
  <ModalContainer full>
    <SearchContainer>
      <div className="search-header flex justify-between items-center">
        <h3>Buscar </h3>
        <BsFullscreenExit />
      </div>
      <div className="search-input">
        <input type="text" />
      </div>
      <div className="search-content flex flex-col items-center">
        <span>lista</span>
        <span>lista</span>
        <span>lista</span>
      </div>
    </SearchContainer>
  </ModalContainer>
);
