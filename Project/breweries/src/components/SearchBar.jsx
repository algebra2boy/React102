import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, handleSearchTerm, handleSubmit, handleClear }) => {
    return (
        <div className="searchbar">
            <input
                className="searchBar-textfield"
                type="text"
                value={searchTerm}
                placeholder="Search state or city..."
                onChange={handleSearchTerm} />

            <button
                type="submit"
                className="searchBar-button"
                onClick={handleSubmit}
            >
                Search
            </button>

            <button
                type="submit"
                className="searchBar-button"
                onClick={handleClear}
            >Clear
            </button>
        </div>
    );
};

export default SearchBar;