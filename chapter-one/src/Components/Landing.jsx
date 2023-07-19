import React, { useState } from 'react';
import './Landing.css'
import Searchbox from './Searchbox';
import Category from './Category';
import SocialProof from './SocialProof';
import Footer from './Footer';
import Navbar from './Navbar';



const Landing = () => {
    sessionStorage.setItem('histButton',true);
    sessionStorage.setItem('artButton',true);
    sessionStorage.setItem('litButton',true);
    sessionStorage.setItem('philButton',true);
    sessionStorage.setItem('novelButton',true);
    sessionStorage.setItem('poetryButton',true);
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