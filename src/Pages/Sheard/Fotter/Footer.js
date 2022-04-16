import React from 'react';
import footerIcon from '../../../images/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ height: "300px" }} className='bg-praimary fotter mt-5'>
            <div className="">
                <img className='d-block' src={footerIcon} alt="imageie" />
                <p className='mt-5'>Copiright@BiploobHossen</p>
            </div>
        </div>
    );
};

export default Footer;