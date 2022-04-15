import React from 'react';
import Banner from '../Banner/Banner';
import Chose from '../Chose/Chose';
import Meal from '../Meals/Meal/Meal';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Meal/>
            <Chose/>
        </div>
    );
};

export default Home;