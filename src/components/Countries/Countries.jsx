import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {

    const [visitedCountries, setVisitedCountries] = useState([])
    const handleVisitedCountries = () => {
        alert("clieck handleVisitedCountries");
    }
    const countriesObj = use(countriesPromise);
    const countries = countriesObj.countries;


    // console.log(countries);
    return (
        <div>
            <h1>In the world: {countries.length}</h1>
            <h3>Total Country Visited: </h3>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country?.cca3?.cca3}
                        country={country}
                        handleVisitedCountries = {handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;