const setTheme = (appBgColor, headingRef, buttonRef) => {
    if (appBgColor === '#333') {
        headingRef.current.style.color = '#fff';
        buttonRef.current.style.color = '#fff';
        buttonRef.current.style.border = '2px solid #fff';
    } else {
        headingRef.current.style.color = '#333';
        buttonRef.current.style.color = '#333';
        buttonRef.current.style.border = '2px solid #333';
    }
}

export default { setTheme };