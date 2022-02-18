import { useState } from 'react';
const useDark = () => {
    const theme = localStorage.getItem('theme')
    return{
       theme
    }
};

export default useDark;