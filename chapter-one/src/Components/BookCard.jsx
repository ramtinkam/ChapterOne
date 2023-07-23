import React, { useEffect, useState } from 'react';
import './BookCard.css';
import Axios from "axios";
import Popup from 'reactjs-popup'
import StarRating from './StarRating';
import {Rating} from 'react-simple-star-rating'



function BookCard(props) {
    const [favBooks,setFavBooks] = useState([]);
    function popupFunc(){
        let flg =false
        favBooks.forEach(e => {
            if(e.id === props.id){flg=true}
        })
        if (flg==false){
        return(
            <div>
            <button className="book-popup-buttons" onClick={addWillRead}>می‌خواهم بخوانم</button>
            <button className="book-popup-buttons" onClick={addReading}>در حال مطالعه</button>
            <button className="book-popup-buttons" onClick={addRead}>خوانده شده</button>
            </div>
        )}
        else{
            return(
                <button className="book-popup-buttons" onClick={addWillRead}>حذف کتاب</button>
            )
        }}

    function getFavBooks(){
        Axios.get(`http://127.0.0.1:8000/api/socialmedia/get-favorite-books/${sessionStorage.getItem('userId')}`,
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}).then(
            (res)=>{
                console.log(res);
                setFavBooks(res.data.data);
        }).catch((err)=>{console.log(err)
        setFavBooks([])});}

    useEffect(()=>{
        getFavBooks();
    },[]);
    
    function addWillRead(){
        Axios.put("http://127.0.0.1:8000/api/socialmedia/toggle-favorite-book/",{"book_id":props.id, "status":'برای خواندن'},
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}
            ).then((res)=>{
                    console.log(res);
                    getFavBooks();
            }).catch((err)=>{console.log(err)});
    }
    function addReading(){
        Axios.put("http://127.0.0.1:8000/api/socialmedia/toggle-favorite-book/",{"book_id":props.id, "status":'درحال خواندن'},
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}
            ).then((res)=>{
                    console.log(res);
                    getFavBooks();
            }).catch((err)=>{console.log(err)});
    }
    function addRead(){
        Axios.put("http://127.0.0.1:8000/api/socialmedia/toggle-favorite-book/",{"book_id":props.id, "status":'خوانده شده'},
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}
            ).then((res)=>{
                    console.log(res);
                    getFavBooks();
            }).catch((err)=>{console.log(err)});
    }




  return (
    <div className='book-card' >
        <Rating
                initialValue={props.avgRate}
                readonly={true}
                size={20}
                allowFraction={true}
                fillColor='#F39F74'
                emptyColor='gray'
                className='foo' // Will remove the inline style if applied
                />
        <div className='book-card-top'>
         
            <div className="book-card-img-container">
                <img className="book-card-sample-img" src={props.image} alt="book-image" />
            </div>
        </div>
            <div className="book-card-bottom">
                <div className="book-card-name-div">
                    <a className="book-card-name" href={`book-page/${props.id}`}>{props.bookName}</a>
                    <a className="book-card-author" href={`author-page/${props.authorId}/${props.id}`}>نویسنده:{props.authorName} </a>
                </div>
                
            </div>
            <div className="book-card-button"><Popup closeByBackdropClick={true} 
                trigger={<button className="book-card-add-library">افزودن به کتابخانه </button>}modal nested>
                    <div className="book-popup-main-div">
                        <div className="book-popup-close-div">
                            <h className="book-popup-header">:قفسه مورد نظرتان را انتخاب کنید</h>
                        </div>
                        {
                            popupFunc()
                        }
                        
                    </div>
                </Popup>
                
            </div>

    </div>
  )
}

export default BookCard;