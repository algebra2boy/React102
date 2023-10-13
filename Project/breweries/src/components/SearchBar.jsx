import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleSearchTerm, handleSubmit }) => {
    return (
        <div className="searchbar">
            <input
                className="searchBar-textfield"
                type="text"
                placeholder="Search State"
                onChange={handleSearchTerm} />

            <button
                type="submit"
                className="searchBar-button"
                onClick={handleSubmit}
            >
            Search
            </button>
        </div>
    );
};

export default SearchBar;