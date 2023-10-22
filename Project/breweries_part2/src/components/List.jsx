import React from "react";
import "./List.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const List = ({ breweries, searchTerm, handleSearchTerm, handleSubmit, handleClear, brewType, handleBrewType }) => {
    return (
        <div className="List">
            <SearchBar
                searchTerm={searchTerm}
                handleSearchTerm={handleSearchTerm}
                handleSubmit={handleSubmit}
                handleClear={handleClear}
                brewType={brewType}
                handleBrewType={handleBrewType}
            />
            {breweries.length !== 0
                ? (
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Phone</th>
                                    <th>Brewery type</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>

                            <tbody>
                                {breweries && breweries.length > 0 &&
                                    breweries.map((brew, index) => (
                                        <tr key={index}>
                                            <td>{brew.name}</td>
                                            <td>{brew.city}</td>
                                            <td>{brew.state}</td>
                                            <td>{brew.phone ? brew.phone : "N/A"}</td>
                                            <td>{brew.brewery_type}</td>
                                            <td className="detail">
                                                {/* passing state to another component so coool! */}
                                                <Link
                                                    to={`/brewinfo/${brew.id}`}
                                                    state={{ "brewData": brew }}
                                                >🔍
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>)
                : null}
        </div >
    )
};

export default List;