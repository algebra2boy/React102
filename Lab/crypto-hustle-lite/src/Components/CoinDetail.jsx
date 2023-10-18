import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import CoinChart from "./CoinChart";
import "./CoinDetail.css"

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
        };

        getCoinDetail().catch(console.error);
    }, []);

    return (
        <>
            {
                fullDetails
                    ? (
                        <div>
                            <h1>{fullDetails.textData[params.symbol].FullName}</h1>
                            <img
                                className="images"
                                src={`https://www.cryptocompare.com${fullDetails.numbers[params.symbol].USD.IMAGEURL}`}
                                alt={`Small icon for ${params.symbol} crypto coin`}
                            />
                            <div>
                                <h4>{fullDetails.textData[params.symbol].Description}</h4>
                            </div>
                            <br />
                            <div>
                                <h3>This coin was built with the algorithm {fullDetails.textData[params.symbol].Algorithm}
                                </h3>
                            </div>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Launch Date </th>
                                        <td>{fullDetails.textData[params.symbol].AssetLaunchDate}</td>
                                    </tr>
                                    <tr>
                                        <th>Website </th>
                                        <td>
                                            <a href={fullDetails.textData[params.symbol].AssetWebsiteUrl}>
                                                {fullDetails.textData[params.symbol].AssetWebsiteUrl}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Whitepaper </th>
                                        <td>
                                            <a href={fullDetails.textData[params.symbol].AssetWhitepaperUrl}>
                                                {fullDetails.textData[params.symbol].AssetWhitepaperUrl}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Monetary Symbol </th>
                                        <td>{fullDetails.numbers[params.symbol].USD.FROMSYMBOL}</td>
                                    </tr>

                                    <tr>
                                        <th>Last Transaction </th>
                                        <td>{fullDetails.numbers[params.symbol].USD.LASTUPDATE}</td>
                                    </tr>
                                    <tr>
                                        <th>Volume</th>
                                        <td>{fullDetails.numbers[params.symbol].USD.VOLUMEDAY}</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <CoinChart
                                symbol={params.symbol}
                                market={fullDetails.numbers[params.symbol].USD.MARKET}
                            />
                        </div>

                    )
                    :
                    <>
                        <h1>Loading to fetch the data</h1>
                    </>
            }
        </>
    );

};

export default CoinDetails;