import React, {useState} from 'react';
import './Author.css';
import Navbar from './Navbar';
import albertimg from './albertcamus.png';
import BookCard from './BookCard';
import sampleimg from './booksample.png';
import Footer from './Footer';

function Author(props) {
  return (
    <div className='main-author-container'>
        <Navbar />
        <div className="author-div">
            <h className="author-header">نویسندگان</h>
            <div className="author-main-info-div">
                <h className="author-name">{props.author}</h>
                <div className="author-bio-div">
                    <p className="author-bio">
                        {props.authorBio}
                    </p>
                </div>
                <img className="author-img" src={props.authorImage} alt="author-image" />
            </div>

        </div>
        <div className="author-books">
            <div className="author-books-container">
                <p className="author-sortby">مرتب سازی بر اساس</p>
                <select name="sortby" id="author-sort-button">
                    <option value="popular">محبوب‌ترین‌ ها</option>
                    <option value="new">تازه‌ترین ها</option>
                    <option value="alphabet">الفبایی</option>
                </select>
                <h className="author-books-div-name">آثار نویسنده</h>  
            </div>
            <div className="author-books-div">
                <BookCard
                image={sampleimg}
                bookName='سقوط'
                authorName=' آلبر کامو'
                />
            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default Author