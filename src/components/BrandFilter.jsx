import React, { useState } from "react";

function BrandFilter({ onFilter }) {
  const [search, setSearch] = useState("");
  const [style, setStyle] = useState("");
  const [size, setSize] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const query = `${search} ${style} ${size}`.trim();
    onFilter(query);
  }

  return (
    <div className="brand-filter">
      <form id="shoe-search" className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search for shoes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="filter-controls">
        <select
          id="style-filter"
          value={style}
          onChange={(e) => {
            setStyle(e.target.value);
            onFilter(e.target.value);
          }}
        >
          <option value="">All Styles</option>
          <option value="sneakers">Sneakers</option>
          <option value="running_sneakers">Running Sneakers</option>
          <option value="boots">Boots</option>
        </select>

        <select
          id="size-filter"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
            onFilter(e.target.value);
          }}
        >
          <option value="">All Sizes</option>
          <option value="plus">Plus Size</option>
          <option value="tiny">Tiny Size</option>
        </select>
      </div>
    </div>
  );
}

export default BrandFilter;