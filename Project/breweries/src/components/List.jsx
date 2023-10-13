import React from "react";
import "./List.css";
import SearchBar from "./SearchBar";

const List = ({ breweries, handleSearchTerm, handleSubmit }) => {
    return (
        <div className="List">
            <SearchBar handleSearchTerm={handleSearchTerm} handleSubmit={handleSubmit}/>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Phone</th>
                            <th>Brewery type</th>
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
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default List;