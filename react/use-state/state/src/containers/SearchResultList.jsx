import React from "react";
import names from "../data/data.json";

const SearchResultList = ({ searchTerm }) => {
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>You searched for: {searchTerm}</h2>
      <ul>
        {filteredNames.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchResultList;
