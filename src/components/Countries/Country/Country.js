import React from 'react';
import './Countries.css'

const Country = (props) => {
    const { name, region, flag, population } = props.country;
    return (
        <div className="country">





            <h2>Name : {name}</h2>
            <p>Region : {region}</p>
            <img className="images" src={flag} alt="" />
            <p> population : {population}</p>


        </div>
    );
};

export default Country;