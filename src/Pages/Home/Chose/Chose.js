import React from 'react';
import './Chose.css';
import chose1 from '../../../images/adult-blur-blurred-background-687824.png';
import chose2 from '../../../images/chef-cook-food-33614.png';
import chose3 from '../../../images/architecture-building-city-2047397.png';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Chose = () => {
    return (
        <div className="">
            <h2 className='text-center mb-3 mt-5'>Why You Chose us</h2>
            <div className='container mt-5 chose'>
                <div className="">
                    <img src={chose1} alt="img" />
                    <h5>Fast Delivary</h5>
                    <p>Keep your systems in sync with automatic web hook based notification each time link is paid and how we dream our future</p>
                    <button className='btn btn-link'>See more  <FontAwesomeIcon icon={faArrowRightLong} className="icon" /> </button>
                </div>
                <div className="">
                    <img src={chose2} alt="img" />
                    <h5>A Good Auto Responder</h5>
                    <p>Keep your systems in sync with automatic web hook based notification each time link is paid and how we dream our future</p>
                    <button className='btn btn-link'>See more  <FontAwesomeIcon icon={faArrowRightLong} className="icon" /> </button>
                </div>
                <div className="">
                    <img src={chose3} alt="img" />
                    <h5>Home Delivary</h5>
                    <p>Keep your systems in sync with automatic web hook based notification each time link is paid and how we dream our future</p>
                    <button className='btn btn-link'>See more  <FontAwesomeIcon icon={faArrowRightLong} className="icon" /> </button>
                </div>
            </div>
        </div>
    );
};

export default Chose;