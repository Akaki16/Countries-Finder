import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Header.styles.css';

const Header = ({
    title,
    onDarkMode,
    headingRef,
    buttonRef
}) => {
    return (
        <header className='header'>
            <h1 ref={headingRef}>{title}</h1>
            <button ref={buttonRef} onClick={onDarkMode}>Dark mode</button>
        </header>
    );
}

Header.defaultProps = {
    title: 'Where in the world?'
}

Header.propTypes = {
    title: PropTypes.string,
    onDarkMode: PropTypes.func.isRequired
}

export default Header;