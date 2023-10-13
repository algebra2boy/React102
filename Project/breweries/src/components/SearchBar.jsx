import React from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, handleSearchTerm, handleSubmit, handleClear, brewType, handleBrewType }) => {
    return (
        <div className="searchbar">
            <input
                className="searchBar-textfield"
                type="text"
                value={searchTerm}
                placeholder="Search state or city..."
                onChange={handleSearchTerm} />

            <label>Choose a brew type: </label>
            <select name="brew-type" value={brewType} onChange={handleBrewType}>
                <option value="micro">micro</option>
                <option value="large">large</option>
                <option value="brewpub">brewpub</option>
                <option value="contract">contract</option>
                <option value="proprietor">proprietor</option>
                <option value="closed">closed</option>
            </select>

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