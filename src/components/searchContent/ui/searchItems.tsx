import React from 'react';

function SearchItems({ items }) {
  const map = item => <span>{item.frontmatter.title}</span>;

  return <div className="search-content flex flex-col items-center">{items.nodes.map(map)}</div>;
}

export default React.memo(SearchItems);
