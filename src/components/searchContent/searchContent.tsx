import React, { useEffect, useRef } from 'react';
import { ModalContainer } from '../modalContainer/styles';
import { SearchContainer } from './searchContent.styles';
import { BsFullscreenExit } from 'react-icons/bs';

function SearchContent({ isVisble = false, onDismiss }: { isVisble: boolean; onDismiss: VoidFunction }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isVisble && !ref?.current.contains(e.target)) {
        onDismiss();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isVisble]);

  if (isVisble) {
    return (
      <ModalContainer full>
        <SearchContainer ref={ref}>
          <div className="search-header flex justify-between items-center">
            <h3></h3>
            <BsFullscreenExit size={25} onClick={onDismiss} />
          </div>
          <div className="search-input">
            <input type="text" placeholder="Mejoran la vida" />
          </div>
          <div className="search-content flex flex-col items-center">
            <span>lista</span>
            <span>lista</span>
            <span>lista</span>
          </div>
        </SearchContainer>
      </ModalContainer>
    );
  }

  return <></>;
}

export default SearchContent;
