import React, { useEffect, useState } from "react";
import "./Weatherfile.css";
import { FaThermometerHalf } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Weatherfile(){

    const [city,setcity]=useState();
    const [change,setchange]=useState("Delhi");
    const [search,setsearch]=useState("Delhi");
    
    const changecity=(event)=>{
        setsearch(event.target.value);
        // setcity(event.target.value);
    }

    const clickfun=()=>{
        setchange(search);
    }

    useEffect(()=>{
        const fetchApi= async ()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c49839aebe217b48a718f44ae69b6e69`;
            const response=await fetch(url);
            const respjson=await response.json();
            setcity(respjson.main);
        }
        
        fetchApi();
    },[change])

    return (
        <div>
            <div className="parent">
                <div className="weatherinp">
                    <div className="start">
                        <span id="searchsign"><FaSearch /></span>
                        <input id="inp" value={search} type="text" onChange={changecity} />
                        <button id="searchbut"  onClick={clickfun}>Search</button>
                    </div>
                    
                    {
                        city ? (
                        <>
                            <h3 id="location"><FaMapMarkerAlt /> {change}</h3>
                            <h5 id="celcius"> <FaThermometerHalf />{city.temp}</h5>
                            <div id="minmax">Max: {city.temp_max} | Min: {city.temp_min}</div>
                        </>) :
                            <p className="par">No Data Found</p>
                }
                </div>
            </div>
        </div>
    )
}

export default Weatherfile;