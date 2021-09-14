import React from 'react';
import { ButtonOutline } from '@makinox/makinox-ui';

import { SitePageContext } from '../../../graphql-types';
import { PaginationSection } from './Pagination.styles';
import { navigate } from 'gatsby';

export default function Pagination({ pag, isDark }: { pag: SitePageContext; isDark: boolean }) {
  const before = pag.currentPage - 1;
  const next = pag.currentPage + 1;

  return (
    <PaginationSection>
      {pag.currentPage !== 1 ? (
        <button className={ButtonOutline({ isDark })} onClick={() => navigate(before === 1 ? '/' : `/home/${before}`)}>
          Anterior
        </button>
      ) : (
        <div></div>
      )}
      {pag.currentPage < pag.numPages ? (
        <button className={ButtonOutline({ isDark })} onClick={() => navigate(`/home/${next}`)}>
          Siguiente
        </button>
      ) : (
        <></>
      )}
    </PaginationSection>
  );
}
