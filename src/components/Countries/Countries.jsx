import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';


const Countries = ({ countriesPromise }) => {
    const [visitedFlags, setVisitedFlags] = useState([]);
    const handleVisitedFlags = (flag) => {
      console.log('flg added', flag)
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    };

    const [visitedCountry, setVisitedCountry] = useState([]);
    const handleVisitedCountry = (country) => {
      const newVisitedCountry = [...visitedCountry, country]
      setVisitedCountry(newVisitedCountry)
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
  return (
    <div>
      <h1>You, me and baby, Visited Countries: {countries.length}</h1>
      <h3>Total Country Visited: {visitedCountry.length} </h3>
      <h3>Total Flags Visited {visitedFlags.length}</h3>
      <ol>
        {visitedCountry.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className='visited-container'>
        {
          visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
        }
      </div>
      <div id="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;