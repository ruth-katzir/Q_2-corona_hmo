import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import VaccinationsBar from './notVaccinated';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

export default function BarParticipations() {

    const [userParticipations, setUserParticipations] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await axios.get(`http://localhost:3600/api/morbidity/`);
        if (res.statusText === 'OK') {
            setUserParticipations(res.data);
            let positiveDates = res.data.map((x) => x.positiveDate); // extract the positiveDates from data
            let uniquePositiveDates = [...new Set(positiveDates)]
            let positiveDatesCount = {};
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const daysInMonth = new Date(year, month, 0).getDate();
            const dates = [];

            for (let day = 1; day <= daysInMonth; day++) {
                const dateString = `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
                dates.push(dateString);
            }
            dates.forEach((date) => {
                positiveDatesCount[date] = res.data.filter((x) => x.positiveDate.slice(0, 10) === date);
            });

            let obj = dates.map((date) => ({
                name: date,
                pv: positiveDatesCount[date].length,
            }));
            setData(obj);
        }
    };

    return (
        <>
            <h2 style={{ marginTop: 100 }}>מספר חברי הקופה שנמצאו חיוביים לקורונה בכל יום בחודש האחרון</h2>
            <BarChart
                width={1000}
                height={150}
                data={data}
                margin={{
                    top: 50,
                    right: 30,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="pv" barSize={20} fill="#8884d8" />
            </BarChart>
            <br />
            <VaccinationsBar />
        </>
    );
}
