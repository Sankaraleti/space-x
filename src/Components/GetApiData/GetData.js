import React, { useState, useEffect } from 'react';
import axios from 'axios'
import LaunchList from '../LaunchList/LaunchList';
import { Link } from "react-router-dom"
function GetData() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://api.spacexdata.com/v3/launches").then((response) => {
            // console.log(response.data)
            setData(response.data)
        })
    }, [])
    return (
        <>
            {/* {data.map((racket) => racket.flight_number)} */}
            {/* <LaunchList data={data} /> */}
            {
                data.map(launchData => {
                    return (
                        <Link to="/launch" style={{ textDecoration: "none" }}>
                            < LaunchList key={Math.random()} data={launchData} />
                        </Link>
                    )
                })
            }

        </>
    )
}
export default GetData;