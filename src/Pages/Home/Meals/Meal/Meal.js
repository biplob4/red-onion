import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useMeal from '../../../../Utilitis/useMeal';
import Brakfast from '../Brakfast/Brakfast';
import './Meal.css'

const Meal = () => {
    const nevigate = useNavigate()
    const [meals, setMeals] = useMeal();
    const [meal,setMeal] =useState([]);
    const brakfastMeal = meals.filter(meal =>(meal.time === "Breakfast"));
    const lunchMeal = meals.filter(meal => (meal.time === "Lunch"));
    const dinnerMeal = meals.filter(meal => (meal.time === "Dinner"))
 
    const dinnerHandeler =()=>{
       setMeal(dinnerMeal)
    }
    const lunchHandeler =()=>{
       setMeal(lunchMeal)
    }
    const brakfastHandeler =()=>{
        setMeal(brakfastMeal)
    }

    const handelCheckout = ()=>{
        nevigate("/cart")
    }
    return (
        <div className='container mealLink'>
            <Nav className='my-5 me-auto w-100' variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={brakfastHandeler} href="#"> Brakfast</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={dinnerHandeler}>
                    <Nav.Link className='mx-5' eventKey="link-2"> Dinner</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={lunchHandeler} eventKey="link-3">Lunch</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className="">
                <div className="container-sm meals">
                    {
                    meal.map(meal => <Brakfast key={meal.id} meal={meal}></Brakfast>)
                    }
                    {
                    brakfastMeal.map(meal => <Brakfast key={meal.id} meal={meal}></Brakfast>)
                    }
                </div>
                <Button onClick={handelCheckout} className='d-block mx-auto px-5 btn-secondary mb-5 mt-3'>Chack Out Your Food</Button>
            </div>
        </div>
    );
};

export default Meal;