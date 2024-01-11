import { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    console.log(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form>
      <input type="text" onChange={handleInputChange} />
      <button type="submit" onSubmit={handleFormSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
