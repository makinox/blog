import React from 'react';
import { navigate } from 'gatsby';

function SearchItems({ items, searchValue = '' }) {
  const map = item => (
    <span key={item.id} onClick={() => navigate(`/${item.fields.slug}`)}>
      {item.frontmatter.title}
    </span>
  );
  const filter = item => item.frontmatter.title.toLowerCase().includes(searchValue);

  return <div className="search-content flex flex-col items-start">{items.nodes.filter(filter).map(map)}</div>;
}

export default React.memo(SearchItems);
