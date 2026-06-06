import React from "react";

function SearchBar({ search, onSearch, status, onStatus }) {
  const statuses = [
    "",
    "New",
    "Contacted",
    "Qualified",
    "Converted",
    "Lost",
  ];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name, email, company..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => onStatus(e.target.value)}
      >
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s || "All Status"}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;