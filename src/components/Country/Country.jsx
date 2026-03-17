import React, { useState } from 'react';
import './Country.css';


const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    ////second shortcut
    //setVisited(visited? false: true)

    //shortcut
    setVisited(!visited);
    handleVisitedCountry(country);
    // handleVisitedFlags(country)
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Capital: {country.capital.capital}</p>
      <p>Currency: {Object.values(country.currencies.currencies)[0]?.name}</p>
      <p>Language: {Object.values(country.languages.languages)[0]}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}
      </p>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={handleVisited}>
          {visited ? "Visited" : "Not Visited"}
        </button>
        <button onClick={() => {handleVisitedFlags(country.flags.flags.png);}}>Add Visited Flag</button>
      </div>
    </div>
  );
};

export default Country;