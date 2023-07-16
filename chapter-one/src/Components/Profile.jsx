import React from 'react';
import './Profile.css';
import Navbar from './Navbar';
import BookCard from './BookCard';
import Footer from './Footer';
import profileImg from './rezajamshidi.jpg';
import sampleimg from './booksample.png';
import book1 from './booksample1.jpg';
import book2 from './booksample2.jpg';
import book3 from './booksample3.jpg';
import book4 from './booksample4.jpg';



function Profile() {
  return (
    <div className='main-profile-container'>
        <div className="profile-navbar-div">
            <Navbar />
        </div>
        <div className="profile-edit-div">
            <button className="edit-profile-button">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z" fill="#292D32"/>
                    <path d="M15.212 22.19C15.002 22.19 14.792 22.16 14.582 22.11C13.962 21.94 13.442 21.55 13.112 21L12.992 20.8C12.402 19.78 11.592 19.78 11.002 20.8L10.892 20.99C10.562 21.55 10.042 21.95 9.42195 22.11C8.79195 22.28 8.14195 22.19 7.59195 21.86L5.87195 20.87C5.26195 20.52 4.82195 19.95 4.63195 19.26C4.45195 18.57 4.54195 17.86 4.89195 17.25C5.18195 16.74 5.26195 16.28 5.09195 15.99C4.92195 15.7 4.49195 15.53 3.90195 15.53C2.44195 15.53 1.25195 14.34 1.25195 12.88V11.12C1.25195 9.66004 2.44195 8.47004 3.90195 8.47004C4.49195 8.47004 4.92195 8.30004 5.09195 8.01004C5.26195 7.72004 5.19195 7.26004 4.89195 6.75004C4.54195 6.14004 4.45195 5.42004 4.63195 4.74004C4.81195 4.05004 5.25195 3.48004 5.87195 3.13004L7.60195 2.14004C8.73195 1.47004 10.222 1.86004 10.902 3.01004L11.022 3.21004C11.612 4.23004 12.422 4.23004 13.012 3.21004L13.122 3.02004C13.802 1.86004 15.292 1.47004 16.432 2.15004L18.152 3.14004C18.762 3.49004 19.202 4.06004 19.392 4.75004C19.572 5.44004 19.482 6.15004 19.132 6.76004C18.842 7.27004 18.762 7.73004 18.932 8.02004C19.102 8.31004 19.532 8.48004 20.122 8.48004C21.582 8.48004 22.772 9.67004 22.772 11.13V12.89C22.772 14.35 21.582 15.54 20.122 15.54C19.532 15.54 19.102 15.71 18.932 16C18.762 16.29 18.832 16.75 19.132 17.26C19.482 17.87 19.582 18.59 19.392 19.27C19.212 19.96 18.772 20.53 18.152 20.88L16.422 21.87C16.042 22.08 15.632 22.19 15.212 22.19ZM12.002 18.49C12.892 18.49 13.722 19.05 14.292 20.04L14.402 20.23C14.522 20.44 14.722 20.59 14.962 20.65C15.202 20.71 15.442 20.68 15.642 20.56L17.372 19.56C17.632 19.41 17.832 19.16 17.912 18.86C17.992 18.56 17.952 18.25 17.802 17.99C17.232 17.01 17.162 16 17.602 15.23C18.042 14.46 18.952 14.02 20.092 14.02C20.732 14.02 21.242 13.51 21.242 12.87V11.11C21.242 10.48 20.732 9.96004 20.092 9.96004C18.952 9.96004 18.042 9.52004 17.602 8.75004C17.162 7.98004 17.232 6.97004 17.802 5.99004C17.952 5.73004 17.992 5.42004 17.912 5.12004C17.832 4.82004 17.642 4.58004 17.382 4.42004L15.652 3.43004C15.222 3.17004 14.652 3.32004 14.392 3.76004L14.282 3.95004C13.712 4.94004 12.882 5.50004 11.992 5.50004C11.102 5.50004 10.272 4.94004 9.70195 3.95004L9.59195 3.75004C9.34195 3.33004 8.78195 3.18004 8.35195 3.43004L6.62195 4.43004C6.36195 4.58004 6.16195 4.83004 6.08195 5.13004C6.00195 5.43004 6.04195 5.74004 6.19195 6.00004C6.76195 6.98004 6.83195 7.99004 6.39195 8.76004C5.95195 9.53004 5.04195 9.97004 3.90195 9.97004C3.26195 9.97004 2.75195 10.48 2.75195 11.12V12.88C2.75195 13.51 3.26195 14.03 3.90195 14.03C5.04195 14.03 5.95195 14.47 6.39195 15.24C6.83195 16.01 6.76195 17.02 6.19195 18C6.04195 18.26 6.00195 18.57 6.08195 18.87C6.16195 19.17 6.35195 19.41 6.61195 19.57L8.34195 20.56C8.55195 20.69 8.80195 20.72 9.03195 20.66C9.27195 20.6 9.47195 20.44 9.60195 20.23L9.71195 20.04C10.282 19.06 11.112 18.49 12.002 18.49Z" fill="#292D32"/>
                </svg>
            </button>
        </div>
        <div className="profile-page-top">
            <div className="profile-image-div">
                <img className='profile-image' src={profileImg} alt="profile-image" />
                <h className="profile-id">RezaJammshidi</h>
            </div>
            <hr className="profile-vertical-line" />
            <div className="profile-info-container">
                <div className="profile-name-container">
                    <p className='profile-name'>رضا جمشیدی</p>
                </div>
                <div className="profile-info-div">
                    <div className="profile-info">
                        <h className="profile-info-digits">83</h>
                        <a href="#" className="profile-info-link">Books</a>
                    </div>
                    <div className="profile-info">
                        <h className="profile-info-digits">83</h>
                        <a href="#" className="profile-info-link">Followers</a>
                    </div>
                    <div className="profile-info">
                        <h className="profile-info-digits">83</h>
                        <a href="#" className="profile-info-link">Following</a>
                    </div>
                </div>
            </div>
            <hr className="profile-vertical-line" />
            <div className="profile-favorite-books">
                <div className="profile-favorite-books-imgs">
                    <img className="profile-sample-book" src={book1} alt="" />
                    <img className="profile-sample-book" src={book2} alt="" />
                    <img className="profile-sample-book" src={book3} alt="" />
                    <img className="profile-sample-book" src={book4} alt="" />
                </div>
                <h className="profile-favorite-books-header">کتاب‌های مورد علاقه</h>
            </div>
        </div>
        <div className="profile-page-bottom">
            <div className="profile-bottom-sec">
                <button className="profile-see-all-but">مشاهده کامل</button>
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
                <h className="profile-bottom-header">کتابخانه </h>
                
            </div>

            <div className="profile-finished-sec">
                <button className="profile-see-all-but">مشاهده کامل</button>
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
                <h className="profile-finished-header">خوانده‌شده  </h>
                
            </div>

            <div className="profile-reading-sec">
                <button className="profile-see-all-but">مشاهده کامل</button>
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
                <h className="profile-reading-header">در حال مطالعه </h>
                
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Profile