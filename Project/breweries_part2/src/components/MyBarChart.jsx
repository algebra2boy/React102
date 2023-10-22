import React, { useEffect, useState } from "react";
import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    BarChart,
    Legend,
    Label,
} from "recharts";
import "./MyBarChart.css";

const MyBarChart = ({ chartData, attribute, yLabel, title }) => {

    const [goodData, setGoodData] = useState([]);

    // example data
    // const data = [
    //     { name: 'Page A', uv: 4000 },
    //     { name: 'Page B', uv: 3000 },
    // ];
    const dataClean = (chartData) => {
        const category = {};
        /* [{ type: "micro", count: 20}, { type: "large", count: 20} ...] */
        // get the unique labels
        const uniqueTypes = new Set(chartData.map(data => data[attribute]));
        uniqueTypes.forEach((type) => category[type] = { "type": type, "count": 0 });

        // iterate each label
        chartData.forEach((data) => ++category[data[attribute]]["count"]);
        return Object.values(category);
    }

    useEffect(() => {
        setGoodData(dataClean(chartData));
    }, [chartData]);

    return (
        <div className="chart-container">
            {goodData.length !== 0 ? (
                <BarChart
                    layout="vertical"
                    width={400}
                    height={400}
                    data={goodData}
                    margin={{
                        top: 30,
                        right: 20,
                        left: 60,
                        bottom: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="type" type="category" tick={{ fontSize: 10 }} >
                        <Label value={yLabel} angle={-90} position='left' style={{ textAnchor: 'middle' }} />
                    </YAxis>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#82ca9d" />
                    <text x={200} y={20} textAnchor="middle" style={{ fontSize: '15px' }}>
                        {title}
                    </text>
                </BarChart>
            ) : null}
        </div>
    )
}

export default MyBarChart;