import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Search.styles.css';

const Search = ({ handleSearch, handleFilter }) => {
    return (
        <div className='search'>
            <input
                type='search'
                autoComplete='off'
                autoFocus
                placeholder='Search for a country...'
                onKeyUp={handleSearch}
            />
            <select autoComplete='off' onClick={handleFilter}>
                <option disabled value=''>Filter by Region</option>
                <option value='africa'>Africa</option>
                <option value='americas'>America</option>
                <option value='asia'>Asia</option>
                <option value='europe'>Europe</option>
                <option value='oceania'>Oceania</option>
            </select>
        </div>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired
};

export default Search;