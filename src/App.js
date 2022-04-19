import React from 'react';
import { useState, useEffect, useRef } from 'react';
import themeService from './Services/themeService';
import countryService from './Services/countryService';
import Header from './Components/Header.component';
import Search from './Components/Search.component';
import Countries from './Components/Countries/Countries.component';
import Loader from './Components/Loader.component';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const headingRef = useRef(HTMLHeadElement);
  const buttonRef = useRef(HTMLButtonElement);
  const modalRef = useRef(HTMLDivElement);

  // if isDarkMode state is true then appBgColor becomes dark, otherwise it becomes white
  const appBgColor = isDarkMode ? '#333' : '#fff';

  useEffect(() => {
    // if there are no countries show loader, otherwise don't show it
    const showLoading = () => {
      if (countries.length === 0) {
        modalRef.current.style.display = 'block';
      } else {
        modalRef.current.style.display = 'none';
      }
    }

    showLoading();
  }, [countries]);

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
    document.body.style.backgroundColor = appBgColor;
    themeService
    .setTheme(
      appBgColor,
      headingRef,
      buttonRef
    );
  }, [isDarkMode]);

  const toggleAppBgColor = () => {
    // if isDarkMode state is true we change its state to false, otherwise to true
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    // filter countries based on their name
    const filtered_countries = countries.filter(country => {
      return country.name.common.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredCountries(filtered_countries);
  }

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    // filter countries based on their region
    const filtered_countries = countries.filter(country => {
      return country.region.toLowerCase().includes(filterValue.toLowerCase());
    });
    setFilteredCountries(filtered_countries);
  }

  return (
    <div>
      <Header
        onDarkMode={toggleAppBgColor}
        headingRef={headingRef}
        buttonRef={buttonRef}
      />
      <Search
        handleSearch={handleSearch}
        handleFilter={handleFilter}
      />
      <Countries countries={filteredCountries.length > 0 ? filteredCountries : countries} />
      <Loader modalRef={modalRef} />
    </div>
  );
}

export default App;