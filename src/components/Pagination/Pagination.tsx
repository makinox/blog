import React from 'react';
import { Button } from '@makinox/makinox-ui';

import { SitePageContext } from '../../../graphql-types';
import { PaginationSection } from './Pagination.styles';
import { navigate } from 'gatsby';

export default function Pagination({ pag, isDark }: { pag: SitePageContext; isDark: boolean }) {
  const before = pag.currentPage - 1;
  const next = pag.currentPage + 1;

  return (
    <PaginationSection>
      {pag.currentPage !== 1 ? (
        <Button use="outlined" isDark={isDark} message={'Anterior'} onClick={() => navigate(before === 1 ? '/' : `/home/${before}`)} />
      ) : (
        <div></div>
      )}
      {pag.currentPage < pag.numPages ? (
        <Button use="outlined" isDark={isDark} message={'Siguiente'} onClick={() => navigate(`/home/${next}`)} />
      ) : (
        <></>
      )}
    </PaginationSection>
  );
}
