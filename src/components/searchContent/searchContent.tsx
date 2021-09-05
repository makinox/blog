import React, { useEffect, useRef } from 'react';
import { ModalContainer } from '../modalContainer/styles';
import { SearchContainer } from './searchContent.styles';
import { useSearchContent } from './searchContent.graph';
import { BsFullscreenExit } from 'react-icons/bs';
import SearchItems from './ui/searchItems';
import { useInputValue } from '../../hooks/useInputValue';

function SearchContent({ isVisble = false, onDismiss }: { isVisble: boolean; onDismiss: VoidFunction }) {
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
        {console.log({ data })}
        <SearchContainer ref={ref}>
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
