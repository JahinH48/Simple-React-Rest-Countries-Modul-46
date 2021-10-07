import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Total Data : {countries.length}</h3>
            <div className="countries-container">{
                countries.map(user => <Country
                    key={user.country}
                    country={user}>

                </Country>)

            }
            </div>
        </div>
    );
};


export default Countries;