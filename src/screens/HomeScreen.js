import React from 'react';
import Banner from '../Banner';
import Films from '../Films';
import Nav from '../Nav';

import './HomeScreen.css'
const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Films />
        </div>
    );
};

export default HomeScreen;