import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({ image, name, symbol }) => {

    const [price, setPrice] = useState(null);

    // useEffect runs on every render, it willl now run whenever the symbol
    // we pass in changes. 
    useEffect(() => {
        const controller = new AbortController();

        const getCoinPrice = async () => {
            try {
                const resposne = await fetch(
                    `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,JPY,EUR&api_key=` + API_KEY,
                    { signal: controller.signal });

                const data = await resposne.json();
                setPrice(data);
            } catch (error) {
                if (error.name === "AbortError") {
                    // It's ok, don't do anything
                } else {
                    console.error(error);
                }
            }
        };
        getCoinPrice();
        return () => controller.abort();
    }, [symbol]);

    return (
        <div>
            {price
                ? (
                    <li className="main-list">
                        <img
                            className="icons"
                            src={`https://www.cryptocompare.com${image}`}
                            alt={`Small icon for ${name} crypto coin`}
                        />
                        <Link
                            style={{ color: "white" }}
                            to={`/coinDetails/${symbol}`}
                            key={symbol}
                        >
                            {name} <span className="tab"></span> {price.USD ? `$${price.USD} USD` : "N/A"}
                        </Link>
                    </li>
                )
                : null
            }
        </div>
    )
}

export default CoinInfo;