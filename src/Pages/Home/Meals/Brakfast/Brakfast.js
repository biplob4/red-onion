import React, { useContext } from 'react';
import { MealContext } from '../../../../App';
import './Brakfast.css'


const Brakfast = ({ meal }) => {
    return (
        <div className='meal'>
            <img src={meal.image} alt="imaige" />
            <h6>{meal.name}</h6>
            <p>{meal.about}</p>
            <h5>{meal.rate}</h5>
        </div>
    );
};

export default Brakfast;