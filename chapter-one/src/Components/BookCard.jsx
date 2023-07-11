import React from 'react';
import './BookCard.css';


function BookCard(props) {
  return (
    <div className='book-card'>
        
        <div className='book-card-rate-box'>
            <svg className='book-card-rate' width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00042 0.285713L10.3841 5.11486L15.7147 5.894L11.8576 9.65086L12.7678 14.9583L8.00042 12.4511L3.23299 14.9583L4.14328 9.65086L0.286133 5.894L5.6167 5.11486L8.00042 0.285713Z" fill="#FFF737"/>
            </svg>
            <svg className='book-card-rate' width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00042 0.285713L10.3841 5.11486L15.7147 5.894L11.8576 9.65086L12.7678 14.9583L8.00042 12.4511L3.23299 14.9583L4.14328 9.65086L0.286133 5.894L5.6167 5.11486L8.00042 0.285713Z" fill="#FFF737"/>
            </svg>
            <svg className='book-card-rate' width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00042 0.285713L10.3841 5.11486L15.7147 5.894L11.8576 9.65086L12.7678 14.9583L8.00042 12.4511L3.23299 14.9583L4.14328 9.65086L0.286133 5.894L5.6167 5.11486L8.00042 0.285713Z" fill="#FFF737"/>
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00042 1.82139L9.95179 5.77466C10.022 5.91682 10.1575 6.0154 10.3144 6.03833L14.6789 6.67626L11.5212 9.75186C11.4074 9.86263 11.3555 10.0223 11.3824 10.1788L12.1275 14.5232L8.22483 12.4708C8.08434 12.3969 7.91649 12.3969 7.776 12.4708L3.87336 14.5232L4.61848 10.1788C4.64532 10.0223 4.59341 9.86263 4.47968 9.75186L1.32197 6.67626L5.68644 6.03833C5.8433 6.0154 5.97887 5.91682 6.04905 5.77466L8.00042 1.82139Z" stroke="#727272" stroke-width="0.964286" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00042 1.82139L9.95179 5.77466C10.022 5.91682 10.1575 6.0154 10.3144 6.03833L14.6789 6.67626L11.5212 9.75186C11.4074 9.86263 11.3555 10.0223 11.3824 10.1788L12.1275 14.5232L8.22483 12.4708C8.08434 12.3969 7.91649 12.3969 7.776 12.4708L3.87336 14.5232L4.61848 10.1788C4.64532 10.0223 4.59341 9.86263 4.47968 9.75186L1.32197 6.67626L5.68644 6.03833C5.8433 6.0154 5.97887 5.91682 6.04905 5.77466L8.00042 1.82139Z" stroke="#727272" stroke-width="0.964286" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div className="book-card-top">
            <img className="book-card-sample-img" src={props.image} alt="book-image" />
        </div>
        <div className="book-card-bottom">
            <div className="book-card-name-div">
                <h className="book-card-name">{props.bookName}</h>
                <h className="book-card-author">نویسنده:{props.authorName} </h>
            </div>
            
        </div>
        <div className="book-card-button">
            <button className="book-card-add-library">افزودن به کتابخانه </button>
        </div>
    </div>
  )
}

export default BookCard;