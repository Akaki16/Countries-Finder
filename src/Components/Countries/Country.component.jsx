import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../Styles/Countries/Country.styles.css';

const Country = ({ country }) => {
    return (
        <Link to={`/countries/${country.name.common}`}>
            <div className='country-card'>
                <img src={country.flags.svg} alt={country.name.common} />
                <h1>{country.name.common}</h1>
                <h2>Population: {country.population.toLocaleString()}</h2>
                <h3>Region: {country.region}</h3>
                <h4>Capital: {country.capital}</h4>
            </div>
        </Link>
    );
}

Country.propTypes = {
    country: PropTypes.object.isRequired
};

export default Country;