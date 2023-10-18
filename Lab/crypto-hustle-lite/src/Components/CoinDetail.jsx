import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinDetails = () => {
    const [fullDetails, setFullDetails] = useState(null);

    // this extracts whatever the symbol that is on the url
    let params = useParams();

    useEffect(() => {
        const getCoinDetail = async () => {
            const details = await fetch(
                `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${params.symbol}&tsyms=USD&api_key=` +
                API_KEY
            );
            const description = await fetch(
                `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${params.symbol}&api_key=` +
                API_KEY
            );

            const detailsJson = await details.json();
            const descripJson = await description.json();

            setFullDetails({ "numbers": detailsJson.DISPLAY, "textData": descripJson.Data });
            console.log(fullDetails);
            console.log(API_KEY);
            console.log("HELLO");
        };

        getCoinDetail().catch(console.error);
    }, []);

    return (
        <>
            <h1>{fullDetails.textData[params.symbol].FullName}</h1>
            <img
                className="images"
                src={`https://www.cryptocompare.com${fullDetails.numbers[params.symbol].USD.IMAGEURL
                    }`}
                alt={`Small icon for ${params.symbol} crypto coin`}
            />
            <div> {fullDetails.textData[params.symbol].Description}</div>
            <br></br>
            <div>
                This coin was built with the algorithm{" "}
                {fullDetails.textData[params.symbol].Algorithm}{" "}
            </div>

            <table>
                <tbody>
                    <tr>
                        <th>Launch Date </th>
                        <td>{fullDetails.AssetLaunchDate}</td>
                    </tr>
                    <tr>
                        <th>Website </th>
                        <td>{fullDetails.AssetWebsiteUrl}</td>
                    </tr>
                    <tr>
                        <th>Whitepaper </th>
                        <td>{fullDetails.AssetWhitepaperUrl}</td>
                    </tr>
                    <tr>
                        <th>Monetary Symbol </th>
                        <td>{fullDetails.BTC}</td>
                    </tr>
                    <tr>
                        <th>Market </th>
                        <td> </td>
                    </tr>
                    <tr>
                        <th>Last Transaction </th>
                        <td> </td>
                    </tr>
                    <tr>
                        <th>Last Transaction Value</th>
                        <td> </td>
                    </tr>
                    <tr>
                        <th>Volume </th>
                        <td> </td>
                    </tr>
                    <tr>
                        <th>Today's Open Price </th>
                        <td> </td>
                    </tr>
                    <tr>
                        <th>Highest Price during the Day </th>
                        <td> </td>
                    </tr>
                    <tr>
                        <th>Lowest Price during the Day </th>
                        <td> </td>
                    </tr>
                    <tr>
                        <th>Change from Previous Day </th>
                        <td> </td>
                    </tr>
                    <tr>
                        <th>Market Cap </th>
                        <td> </td>
                    </tr>
                </tbody>
            </table>

        </>

    );

};

export default CoinDetails;