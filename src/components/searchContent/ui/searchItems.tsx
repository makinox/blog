import React from 'react';

function SearchItems({ items, searchValue = '' }) {
  const map = item => <span>{item.frontmatter.title}</span>;
  const filter = item => item.frontmatter.title.toLowerCase().includes(searchValue);

  return <div className="search-content flex flex-col items-start">{items.nodes.filter(filter).map(map)}</div>;
}

export default React.memo(SearchItems);
