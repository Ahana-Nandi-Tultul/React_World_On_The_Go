import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handlvisitedFlags}) => {
    // console.log(country?.area?.area);
    const [visited, setVisited] = useState(false)
    const handleVisited = (country) =>{
        // console.log(country)
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} srcset="" />
            <h2>Name:{country?.name?.common}</h2>
            <p>Population: {country?.population?.population}</p>
            <p>Area:{country?.area?.area} { country?.area?.area > 300000 ? "Big Country": 
                "Small Country"} </p>
            <button onClick={()=>handleVisited(country)}>{visited? "Visited" : "Not Visited"}</button>
            <button onClick={()=>handlvisitedFlags(country?.flags?.flags?.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;