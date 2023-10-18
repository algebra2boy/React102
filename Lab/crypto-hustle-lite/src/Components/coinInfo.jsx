import React, { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({ image, name, symbol }) => {

    const [price, setPrice] = useState(null);

    // useEffect runs on every render, it willl now run whenever the symbol
    // we pass in changes. 
    useEffect(() => {
        const getCoinPrice = async () => {
            const resposne = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,JPY,EUR&api_key=` + API_KEY);
            const data = await resposne.json();
            setPrice(data);
        };
        getCoinPrice().catch(console.error);
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
                        {name} <span className="tab"></span> {price.USD ? `$${price.USD} USD` : "N/A"}
                    </li>
                )
                : null
            }
        </div>
    )
}

export default CoinInfo;