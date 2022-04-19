import React from 'react';
import PropTypes from 'prop-types';
import Country from './Country.component';
import '../../Styles/Countries/Countries.styles.css';

const Countries = ({ countries }) => {
    return (
        <div className='countries'>
            {countries.map(country => {
                return (
                    <Country
                        key={country.name.common}
                        country={country}
                    />
                );
            })}
        </div>
    );
}

Countries.propTypes = {
    countries: PropTypes.array.isRequired
};

export default Countries;