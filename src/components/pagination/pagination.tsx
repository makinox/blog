import React from 'react';
import { PaginationSection, PaginationButton } from './styles';

export default function Pagination({ pag, isDark }) {
  const before = pag.currentPage - 1;
  const next = pag.currentPage + 1;

  return (
    <PaginationSection>
      {pag.currentPage !== 1 ? (
        <PaginationButton isDark={isDark} to={before === 1 ? '/' : `/home/${before}`}>
          {before}
        </PaginationButton>
      ) : (
        <div></div>
      )}
      {pag.currentPage < pag.numPages ? (
        <PaginationButton isDark={isDark} to={`/home/${next}`}>
          {next}
        </PaginationButton>
      ) : (
        <></>
      )}
    </PaginationSection>
  );
}
