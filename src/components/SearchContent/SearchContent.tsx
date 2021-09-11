import React, { useEffect, useRef } from 'react';
import { ModalContainer } from '../ModalContainer/ModalContainer.styles';
import { SearchContainer } from './SearchContent.styles';
import { useSearchContent } from './SearchContent.graph';
import { BsFullscreenExit } from 'react-icons/bs';
import SearchItems from './ui/SearchItem';
import { useInputValue } from '../../hooks/useInputValue';

function SearchContent({ isVisble = false, isDark, onDismiss }: { isVisble: boolean; isDark: boolean; onDismiss: VoidFunction }) {
  const ref = useRef<HTMLDivElement>(null);
  const { allMarkdownRemark: data } = useSearchContent();
  const SearchInput = useInputValue({});

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isVisble && !ref?.current.contains(e.target)) {
        onDismiss();
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isVisble]);

  if (isVisble) {
    return (
      <ModalContainer full>
        <SearchContainer ref={ref} isDark={isDark}>
          <div className="search-header flex justify-between items-center">
            <h3></h3>
            <BsFullscreenExit size={25} onClick={onDismiss} />
          </div>
          <div className="search-input">
            <input type="text" placeholder="Buscar" {...SearchInput} />
          </div>
          <SearchItems items={data} searchValue={SearchInput.value.toLowerCase()} />
        </SearchContainer>
      </ModalContainer>
    );
  }

  return <></>;
}

export default SearchContent;
