import React from "react";
import "./BrewInfo.css";
import { useLocation } from 'react-router-dom';

const BrewInfo = () => {

    // get the state from the Link
    const location = useLocation();
    const data = location.state.brewData;

    return (
        <div className="details">
            <h1>More info</h1>
            <h4>name: {data.name}</h4>
            <h4>brewery_type: {data.brewery_type}</h4>
            <h4>address_1: {data.address_1}</h4>
            <h4>city: {data.city}</h4>
            <h4>state_province: {data.state_province}</h4>
            <h4>postal_code: {data.postal_code}</h4>
            <h4>country: {data.country}</h4>
            <h4>longitude: {data.longitude}</h4>
            <h4>latitude: {data.latitude}</h4>
            <h4>phone: {data.phone}</h4>
            <h4>website_url:<a href={data.website_url} style={{"justifyContent": "left"}}>{data.website_url}</a></h4>
            <h4>state: {data.state}</h4>
            <h4>street: {data.street}</h4>
        </div>
    );
}

export default BrewInfo;