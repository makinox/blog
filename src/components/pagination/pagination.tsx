import React from 'react';
import { PaginationSection, PaginationButton } from './styles';

export default ({ pag }) => {
  const before = pag.currentPage - 1;
  const next = pag.currentPage + 1;

  return (
    <PaginationSection>
      {pag.currentPage !== 1 ? <PaginationButton to={before === 1 ? '/' : `/home/${before}`}>{before}</PaginationButton> : <div></div>}
      {pag.currentPage < pag.numPages ? <PaginationButton to={`/home/${next}`}>{next}</PaginationButton> : <></>}
    </PaginationSection>
  );
};
