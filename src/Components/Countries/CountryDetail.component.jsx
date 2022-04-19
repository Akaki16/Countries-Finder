import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import countryService from '../../Services/countryService';
import Loader from '../Loader.component';
import '../../Styles/CountryDetail.styles.css';

const CountryDetail = () => {
    const [countries, setCountries] = useState([]);
    const modalRef = useRef(HTMLDivElement);

    const { id } = useParams();

    let countryObj;
    let countryImg;
    let countryName;
    let countryPopulation;
    let countryRegion;
    let countrySubRegion;
    let countryCapital;
    let countryLanguages;
    let countryArea;

    let languages = [];

    useEffect(() => {
    countryService
    .getAll()
    .then(response => {
        setCountries(response.data);
    })
    .catch(err => {
        alert('for some unexpected reasons, countries could not be shown.');
    });
    }, []);

    useEffect(() => {
        const showLoading = () => {
            if (countries.length === 0) {
                modalRef.current.style.display = 'block';
            } else {
                modalRef.current.style.display = 'none';
            }
        }

        showLoading();
    }, [countries]);

    let country = countries.length !== 0 ? countries.find(country => country.name.common.toLowerCase() === id.toLowerCase()) : '';
    countryObj = country;

    if (countryObj) {
        countryImg = countryObj.flags.svg;
        countryName = countryObj.name.common;
        countryPopulation = countryObj.population;
        countryRegion = countryObj.region;
        countrySubRegion = countryObj.subregion;
        countryCapital = countryObj.capital;
        countryLanguages = countryObj.languages;
        countryArea = countryObj.area;
    }

    for (const lang in countryLanguages) {
        languages.push(lang);
    }

    let countryInfo = countryObj ? <div className='country-container'>
        <div>
            <img src={countryImg} alt={countryName} />
        </div>
        <div>
            <h1>{countryName}</h1>
            <br />
            <h3><span>Population:</span> {countryPopulation.toLocaleString()}</h3>
            <h3><span>Region:</span> {countryRegion}</h3>
            <h3><span>Subregion:</span> {countrySubRegion}</h3>
            <h3><span>Capital:</span> {countryCapital}</h3>
            <h3><span>Area:</span> {countryArea}</h3>
        </div>
        <div style={{ textAlign: 'center' }}>
                <h2 style={{ color: '#fff', fontWeight: 'bold' }}>Languages:</h2>
                {languages.map((lang, i) => {
                    return (
                        <div key={i}>
                            <h3 style={{ color: '#fff', fontWeight: 'normal' }}>{lang}</h3>
                        </div>
                    );
                })}
        </div>
    </div> : <h1>There is no info about the country</h1>;

    return (
        <div>
            <br />
            <br />
            <Link className='back-link' to='/'>
                Go back
            </Link>
            {countryObj ? countryInfo : ''}
            <Loader modalRef={modalRef} />
        </div>
    );
}

export default CountryDetail;