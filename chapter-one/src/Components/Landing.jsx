import React, { useState } from 'react';
import './Landing.css'
import Searchbox from './Searchbox';
import Category from './Category';



const Landing = () => {
    function handleClick() {
        window.location.href = '/login';
        }
    return (
        <div className='landing-container'>
            <div className='header-container'>
                <button onClick={handleClick} className='login-button'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                        <g opacity="0.6">
                            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                </button>
                <div className='nav-buttons-container'>
                    <a href='#' className='nav-button'>درباره ما</a>
                    <a href='#' className='nav-button'>گروه ها</a>
                    <a href='#' className='nav-button'>فروشگاه</a>
                    <a href='#' className='nav-button'>صفحه اصلی</a>                   
                </div>
                <div className='logo-container'>
                    <p className='title'>کتاب خوان</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="80" viewBox="0 0 72 80" fill="none" className='logo'>
                    <path d="M59.952 64H0V8C0 3.588 3.588 0 8 0H60C64.824 0 72 3.196 72 12V68C72 76.804 64.824 80 60 80H0V72H59.952C61.8 71.952 64 71.224 64 68C64 67.596 63.964 67.236 63.904 66.908C63.456 64.604 61.568 64.04 59.952 64ZM49.408 22.568C47.7431 20.9243 45.4976 20.0026 43.158 20.0026C40.8184 20.0026 38.5729 20.9243 36.908 22.568L36.012 23.444L35.12 22.568C33.4544 20.924 31.2083 20.0022 28.868 20.0022C26.5277 20.0022 24.2816 20.924 22.616 22.568C21.7898 23.3626 21.1325 24.3158 20.6835 25.3705C20.2346 26.4252 20.0032 27.5597 20.0032 28.706C20.0032 29.8523 20.2346 30.9868 20.6835 32.0415C21.1325 33.0962 21.7898 34.0494 22.616 34.844L36.008 48L49.404 34.844C50.231 34.05 50.889 33.0971 51.3386 32.0425C51.7883 30.9879 52.0202 29.8533 52.0206 28.7069C52.021 27.5604 51.7898 26.4257 51.3408 25.3708C50.8919 24.3159 50.2344 23.3626 49.408 22.568Z" fill="#489FCB"/>
                    </svg>
                </div>
            </div>
            <div className='search-box'>
                <Searchbox/>
            </div>
            <div className="category-main">
                <Category />
            </div>
        </div>
    )
}

export default Landing