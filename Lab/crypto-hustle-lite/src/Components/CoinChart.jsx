import React, { Component, useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Label
} from "recharts";

const CoinChart = ({ symbol, market }) => {
    const [histData, setHistData] = useState(null);

    const cleanData = (data) => {
        let filteredData = [];
        let countDays = 0;
        for (const item of data) {
            let accurateTime = new Date(item.time).toLocaleTimeString("en-US");
            let accurateDay = new Date();
            accurateDay.setDate(accurateDay.getDate() - countDays);

            filteredData.push({
                'time': accurateDay.toLocaleDateString("en-US") + " " + accurateTime,
                'open price': item.open,
            });
            countDays++;
        }

        // data is given counting backwards, so return the reverse to have data ordered from oldest to newest for accurate plotting
        return filteredData.reverse();
    };

    useEffect(() => {
        const getCoinHist = async () => {
            const response = await fetch(
                `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${symbol}&tsym=USD&e=${market}&limit=30&api_key=` +
                API_KEY
            );

            const json = await response.json();
            setHistData(json.Data.Data);
        };
        getCoinHist().catch(console.error);
    }, []);

    return (
        <div>
            {histData ? (// rendering only if API call actually returned us data
                <div>
                    <br></br>
                    <h2>30-Day Price Data for {symbol}</h2>

                    <LineChart
                        width={1300}
                        height={400}
                        data={cleanData(histData)}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 20,
                            bottom: 30,
                        }}
                    >
                        <Line
                            type="monotone"
                            dataKey="open price"
                            stroke="#8884d8"
                        />
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="time" interval={2} angle={20} dx={20}>
                            <Label value="Date and Time" offset={0} position="insideBottom" />
                        </XAxis>

                        <YAxis
                            label={{
                                value: "Price",
                                angle: -90,
                                position: "insideLeft",
                                textAnchor: "middle",
                            }}
                        />
                        <Tooltip />
                    </LineChart>
                </div>
            ) : null}
        </div>
    );

};

export default CoinChart;