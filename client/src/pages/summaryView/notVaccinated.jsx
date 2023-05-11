import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function VaccinationsBar() {
    const [data, setData] = useState([]);


    useEffect(() => {
        loadMembersData();
        loadVaccinationsData();
    }, []);

    let membersId = [];
    let vaccinatedId = [];

    const loadMembersData = async () => {
        const res = await axios.get(`http://localhost:3600/api/member/`);
        if (res.statusText === 'OK') {
            res.data.forEach(e => {
                membersId.push(e.memberId);
            });
        }
    };

    const loadVaccinationsData = async () => {
        const res = await axios.get(`http://localhost:3600/api/vaccination/`);
        if (res.statusText === 'OK') {
            res.data.forEach(e => {
                vaccinatedId.push(e.memberId);
            });
        }
        let uniqueVaccinatedId = [...new Set(vaccinatedId)]
        membersId = [...new Set(membersId)]

        let countVaccinations = 0;
        membersId.forEach((memberId) => {
            uniqueVaccinatedId.includes(memberId) ? countVaccinations += 1 : countVaccinations = countVaccinations;
        });

        setData(countVaccinations);
    };

    return (
        <>
            <h1>{data} מספר חברי הקופה שלא התחסנו כלל - הוא</h1>
        </>
    );
}
