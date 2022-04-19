import React from 'react';
import '../Styles/Loader.styles.css';

const Loader = ({ modalRef }) => {
    return (
        <div ref={modalRef} className='modal'>
            <div className='loader'></div>
        </div>
    );
}

export default Loader;