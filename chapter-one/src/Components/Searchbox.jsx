import React, { useState } from 'react';
import './Searchbox.css';
import image from './searchbox-img.jpg';
import Button from './Button';


function Searchbox() {
  const [landingSearch,setLandingSearch] = useState('');
  function handleSearch(){
    sessionStorage.setItem('searchValue',landingSearch);
    window.location.href="/genre-page";
  }




  return (
    <div className='main-searchbox'>
      <img className="searchbox-img" src={image} alt="library-img" />
      <div className="line"></div>
      <h className="search-header">!با  چپتر وان، کتاب بخوان</h>
      <p className="search-text">
      کتاب‌ها، سفرهایی هستند که درونشان در دنیایی جدید غرق می‌شوی. بیا، همین حالا بگذار"
      <br />
       ".که کتاب‌ها تو را به سرزمین‌های ناشناخته و دست‌نیافتنی ببرند
      </p>
      <div className="searchbar">
        <input className="search-input" type="text" placeholder='دنبال چه کتابی میگردی؟' 
        onChange={(e)=>{setLandingSearch(e.target.value)}}/>
      </div>
      <Button className="btn-search" type="submit" text="" icon="fas fa-search" onClick={handleSearch}
      />
      

    </div>
  )
}

export default Searchbox;