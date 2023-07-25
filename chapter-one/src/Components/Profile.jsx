import React, { useEffect, useState } from 'react';
import './Profile.css';
import Navbar from './Navbar';
import BookCard from './BookCard';
import Footer from './Footer';
import Follow from './Follow';
import profileImg from './rezajamshidi.jpg';
import sampleimg from './booksample.png';
import book1 from './booksample1.jpg';
import book2 from './booksample2.jpg';
import book3 from './booksample3.jpg';
import book4 from './booksample4.jpg';
import Popup from 'reactjs-popup';
import Axios from "axios";




function Profile() {
    const [profileInfo,setProfileInfo]=useState({});
    const [favBooks,setFavBooks] = useState([]);
    function logOut(){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        window.location.href='/';
    }
    function getFavBooks(){
        Axios.get(`api/socialmedia/get-favorite-books/${sessionStorage.getItem('userId')}`,
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}).then(
            (res)=>{
                console.log(res);
                setFavBooks(res.data.data);
        }).catch((err)=>{console.log(err)});
    }

    function getProfileInfo(){
        Axios.get(`api/user/getprofile/${sessionStorage.getItem('userId')}/`,
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}).then((res)=>{
            setProfileInfo(res.data.data);
        })
    }

    

    useEffect(()=>{
        getProfileInfo();
        getFavBooks();
    },[]);



  return (
    <div className='main-profile-container'>
        <div className="profile-navbar-div">
            <Navbar />
        </div>
        <div className="profile-edit-div">
            <button className="edit-profile-button" onClick={logOut}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.9999 14C6.98991 14 2.90991 17.36 2.90991 21.5C2.90991 21.78 3.12991 22 3.40991 22H20.5899C20.8699 22 21.0899 21.78 21.0899 21.5C21.0899 17.36 17.0099 14 11.9999 14Z" fill="#292D32"/>
            <path d="M16.8501 5.79996C16.7301 5.30996 16.5301 4.82996 16.2501 4.38996C16.0601 4.06996 15.8101 3.74996 15.5401 3.46996C14.6401 2.56996 13.4701 2.07996 12.2701 2.01996C10.9101 1.92996 9.52009 2.42996 8.47009 3.46996C7.48009 4.44996 6.98009 5.75996 7.00009 7.07996C7.01009 8.32996 7.51009 9.57996 8.46009 10.54C9.12009 11.2 9.93009 11.64 10.8001 11.84C11.2701 11.96 11.7701 12.02 12.2701 11.98C13.4601 11.93 14.6201 11.46 15.5301 10.54C16.8201 9.24996 17.2601 7.43996 16.8501 5.79996ZM14.0001 8.99996C13.6401 9.35996 13.0401 9.35996 12.6801 8.99996L11.9901 8.30996L11.3301 8.96996C10.9701 9.32996 10.3701 9.32996 10.0101 8.96996C9.64009 8.59996 9.64009 8.00996 10.0001 7.64996L10.6601 6.98996L10.0201 6.36996C9.66009 5.99996 9.66009 5.40996 10.0201 5.02996C10.3901 4.66996 10.9801 4.66996 11.3601 5.02996L11.9801 5.66996L12.6501 4.99996C13.0101 4.63996 13.6001 4.63996 13.9701 4.99996C14.3301 5.35996 14.3301 5.95996 13.9701 6.31996L13.3101 6.97996L14.0001 7.67996C14.3601 8.03996 14.3601 8.63996 14.0001 8.99996Z" fill="#292D32"/>
            </svg>
            </button>
        </div>
        <div className="profile-page-top">
            <div className="profile-image-div">
                <img className='profile-image' src={profileImg} alt="profile-image" />
                <h className="profile-id">{profileInfo.email}</h>
            </div>
            <hr className="profile-vertical-line" />
            <div className="profile-info-container">
                <div className="profile-name-container">
                    <p className='profile-name'>{profileInfo.full_name}</p>
                </div>
                <div className="profile-info-div">
                    <div className="profile-info">
                        <h className="profile-info-digits">{favBooks.length}</h>
                        <a href="#" className="profile-info-link">Books</a>
                    </div>
                    <div className="profile-info">
                        <h className="profile-info-digits">{profileInfo.followers_num}</h>
                        <Popup trigger={<button className="profile-info-button">Followers</button>}modal nested>
                            <div className="follow-main-div">
                                <div className="follow-head-div">
                                    <h className="follow-header">Followers</h>
                                </div>
                                <Follow />
                                <Follow />
                                <Follow />
                                <Follow />
                                <Follow />
                            </div>
                        </Popup>
                        {/* <a href="#" className="profile-info-link">Followers</a> */}
                    </div>
                    <div className="profile-info">
                        <h className="profile-info-digits">{profileInfo.following_num}</h>
                        <Popup trigger={<button className="profile-info-button">Following</button>}modal nested>
                            <div className="follow-main-div">
                                <div className="follow-head-div">
                                    <h className="follow-header">Following</h>
                                    
                                </div>
                                <Follow />
                                <Follow />
                                <Follow />
                                <Follow />
                                <Follow />
                                <Follow />
                                <Follow />
                            </div>
                        </Popup>
                        
                        {/* <a href="#" className="profile-info-link">Following</a> */}
                    </div>
                </div>
            </div>
            <hr className="profile-vertical-line" />
            <div className="profile-favorite-books">
                <div className="profile-favorite-books-imgs">
                    {favBooks.toReversed().slice(0,4).map((e)=>{return(
                        <img className="profile-sample-book" src={'http://api.chapterone.kveh.ir'+e.image} alt="" />
                        )
                    })}
                </div>
                <h className="profile-favorite-books-header">کتاب‌های اخیر</h>
            </div>
        </div>
        <div className="profile-page-bottom">
            <div className="profile-bottom-sec">
            <div className='favbooks-sec'>
                {/*<button className="profile-see-all-but">مشاهده کامل</button>*/}
                {favBooks.map((e,index)=>{
                if(e.status==="برای خواندن"){
                return(
                    <BookCard key={index}
                image={'http://api.chapterone.kveh.ir'+e.image}
                bookName={e.name}
                avgRate ={e.average_rating}
                authorName={" "+e.authors[0].full_name}
                authorId = {e.authors[0].id}
                id = {e.id}
                />
                );}
                })}
                </div>
                <h className="profile-bottom-header">می‌خواهم بخوانم</h>
                
            </div>

            <div className="profile-finished-sec">
            <div className='favbooks-sec'>
                {/*<button className="profile-see-all-but">مشاهده کامل</button>*/}
                {favBooks.map((e,index)=>{
                if(e.status==="خوانده شده"){
                return(
                    <BookCard key={index}
                image={'http://api.chapterone.kveh.ir'+e.image}
                avgRate ={e.average_rating}
                bookName={e.name}
                authorName={" "+e.authors[0].full_name}
                authorId = {e.authors[0].id}
                id = {e.id}
                />
                );}
                })}
                </div>
                <h className="profile-finished-header">خوانده‌شده  </h>
                
            </div>

            <div className="profile-reading-sec">
                <div className='favbooks-sec'>
                {/*<button className="profile-see-all-but">مشاهده کامل</button>*/}
                {favBooks.map((e,index)=>{
                if(e.status==="درحال خواندن"){
                return(
                    <BookCard key={index}
                image={'http://api.chapterone.kveh.ir'+e.image}
                avgRate ={e.average_rating}
                bookName={e.name}
                authorName={" "+e.authors[0].full_name}
                authorId = {e.authors[0].id}
                id = {e.id}
                />
                );}
                })}
                </div>
                <h className="profile-reading-header">در حال مطالعه </h>
                
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Profile