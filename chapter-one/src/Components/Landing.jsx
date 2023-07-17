import React, { useState } from 'react';
import './Landing.css'
import Searchbox from './Searchbox';
import Category from './Category';
import SocialProof from './SocialProof';
import Footer from './Footer';
import Navbar from './Navbar';



const Landing = () => {
    sessionStorage.setItem('histButton',false);
    /*function handleClick() {
        window.location.href = '/login';
        }*/
    return (
        <div className='landing-container'>
            <Navbar />
            <div className='search-box'>
                <Searchbox/>
            </div>
            <div className="category-main">
                <Category />
            </div>
            <div className='social-proof'>
                <SocialProof/>
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </div>
    )
}

export default Landing;