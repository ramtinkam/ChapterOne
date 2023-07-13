import React from 'react';
import './GenrePage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import BookCard from './BookCard';
import sampleimg from './booksample.png';
import Category from './Category';
import Button from './Button';


function GenrePage() {
  return (
    <div className='main-genre-container'>
        <Navbar />
        <div className="genre-category-div">
            <Category />
        </div>
        <div className="genre-searchbox-div">
            <div className="genre-searchbox">
                <input className="genre-searchbox-input" type="text" placeholder='دنبال چه کتابی میگردی؟  ' />
            </div>
            <Button className="genre-btn-search" type="submit" text="" icon="fas fa-search" />
        </div>

        <div className="genre-sortby-div">
            <a className="genre-sortby-name" href='#'> الفبایی</a>
            <a className="genre-sortby-name" href='#'>محبوب ترین ها</a>
            <a className="genre-sortby-name" href='#'> تازه‌ ترین ها</a>
            <h className="genre-sortby-header">:مرتب سازی بر اساس </h>
            
        </div>

        <div className="genre-bookcard">
            <BookCard
                image={sampleimg}
                bookName='سقوط'
                authorName=' آلبر کامو'
            />
            <BookCard
                image={sampleimg}
                bookName='سقوط'
                authorName=' آلبر کامو'
            />
            <BookCard
                image={sampleimg}
                bookName='سقوط'
                authorName=' آلبر کامو'
            />
            <BookCard
                image={sampleimg}
                bookName='سقوط'
                authorName=' آلبر کامو'
            />
            <BookCard
                image={sampleimg}
                bookName='سقوط'
                authorName=' آلبر کامو'
            />
            <BookCard
                image={sampleimg}
                bookName='سقوط'
                authorName=' آلبر کامو'
            />
        </div>

        <div className="genre-page-navigation">
            <a className="genre-page-back-svg" href="#" >
                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9623 23.525C11.7248 23.525 11.4873 23.4375 11.2998 23.25L3.7123 15.6625C3.3498 15.3 3.3498 14.7 3.7123 14.3375L11.2998 6.75002C11.6623 6.38752 12.2623 6.38752 12.6248 6.75002C12.9873 7.11252 12.9873 7.71252 12.6248 8.07502L5.6998 15L12.6248 21.925C12.9873 22.2875 12.9873 22.8875 12.6248 23.25C12.4498 23.4375 12.1998 23.525 11.9623 23.525Z" fill="#292D32"/>
                    <path d="M25.6254 15.9375H4.58789C4.07539 15.9375 3.65039 15.5125 3.65039 15C3.65039 14.4875 4.07539 14.0625 4.58789 14.0625H25.6254C26.1379 14.0625 26.5629 14.4875 26.5629 15C26.5629 15.5125 26.1379 15.9375 25.6254 15.9375Z" fill="#292D32"/>
                </svg> 
            </a>
            <a href="" className="genre-page-back-text">صفحه قبل </a>
            <a href="" className="genre-pages">1</a>
            <a href="" className="genre-pages">2</a>
            <a href="" className="genre-pages">3</a>
            <a href="" className="genre-pages">4</a>
            <a href="" className="genre-page-forward-text"> صفحه بعد</a>
            <a className="genre-page-forward-svg" href="#" >
                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0379 23.525C17.8004 23.525 17.5629 23.4375 17.3754 23.25C17.0129 22.8875 17.0129 22.2875 17.3754 21.925L24.3004 15L17.3754 8.07502C17.0129 7.71252 17.0129 7.11252 17.3754 6.75002C17.7379 6.38752 18.3379 6.38752 18.7004 6.75002L26.2879 14.3375C26.6504 14.7 26.6504 15.3 26.2879 15.6625L18.7004 23.25C18.5129 23.4375 18.2754 23.525 18.0379 23.525Z" fill="#292D32"/>
                    <path d="M25.4125 15.9375H4.375C3.8625 15.9375 3.4375 15.5125 3.4375 15C3.4375 14.4875 3.8625 14.0625 4.375 14.0625H25.4125C25.925 14.0625 26.35 14.4875 26.35 15C26.35 15.5125 25.925 15.9375 25.4125 15.9375Z" fill="#292D32"/>
                </svg>
            </a>

        </div>
        
        <Footer />
    </div>
  )
}

export default GenrePage