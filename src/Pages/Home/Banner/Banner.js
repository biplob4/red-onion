import React from 'react';
import './Banner.css'
// import {Img} from  '../../images/bannerbackground.png'

const Banner = () => {
    return (
        <div className='banner container'>
            <div>
                <h1>Bast Food Wating For Your Belly</h1>
                <div className="sreachfrom">
                    <input type="text" name="text" placeholder="Sreach Food Items" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;