import React, { useEffect, useState, setState } from 'react';
import './Book.css';
import profileImg from './rezajamshidi.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import book from './book-img.jpg';
import author from './book-author-img.jpg';
import StarRating from './StarRating';
import Popup from 'reactjs-popup';
import CommentSec from './CommentSec';
import { useParams } from 'react-router-dom';
import Axios from "axios";


function Book(props) {
    const params = useParams();
    const [rating,setRating]= useState(0);
    const [favBooks,setFavBooks] = useState([]);
    function getBookRating(){
        const config = {
            headers: {Authorization : "Token "+ sessionStorage.getItem('token')}    
        }
        Axios.get(`http://127.0.0.1:8000/api/socialmedia/books/rating/${params.id}`, config
        ).then((res)=>{
            console.log(res.data.rating);
            setRating(4);
        }).catch((err)=>{
        sessionStorage.setItem('rating',0);
        console.log(err);}
        )
    }
    const [state, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    function popupFunc(){
        let flg =false
        favBooks.forEach(e => {
            if(e.id === bookInfo.id){flg=true}
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
                setFavBooks(res.data.data);
        }).catch((err)=>{console.log(err)});}


    function addWillRead(){
        Axios.put("http://127.0.0.1:8000/api/socialmedia/toggle-favorite-book/",{"book_id":bookInfo.id, "status":'برای خواندن'},
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}
            ).then((res)=>{
                    console.log(res);
                    getFavBooks();
            }).catch((err)=>{console.log(err)});
    }
    function addReading(){
        Axios.put("http://127.0.0.1:8000/api/socialmedia/toggle-favorite-book/",{"book_id":bookInfo.id, "status":'درحال خواندن'},
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}
            ).then((res)=>{
                    console.log(res);
                    getFavBooks();
            }).catch((err)=>{console.log(err)});
    }
    function addRead(){
        Axios.put("http://127.0.0.1:8000/api/socialmedia/toggle-favorite-book/",{"book_id":bookInfo.id, "status":'خوانده شده'},
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}
            ).then((res)=>{
                    console.log(res);
                    getFavBooks();
            }).catch((err)=>{console.log(err)});
    }
    
    
    const [bookInfo,setBookInfo] = useState({});
    function getBook(param){
        const config = {
            headers: {Authorization : "Token "+ sessionStorage.getItem('token')},
            params:{id:Number(param.id)}     
        }
        Axios.get("http://127.0.0.1:8000/api/socialmedia/getbooks/", config
        ).then((res)=>{
                setBookInfo(res.data.data[0]);
        }).catch((err)=>{
        console.log(err);}
        )
        console.log(bookInfo);

    }
    
    useEffect(()=>{
        getBook(params);
        getBookRating();
        getFavBooks();

    },[]);

    

  return (
    <div className='book-main-container'>
        <div className="book-navbar-div">
            <Navbar />
        </div>
        <div className="book-info-div">
            <img className="book-page-img" src={bookInfo.image} alt="the-book-image" />
            <div className="book-middle-div">
                <h className="book-page-name">{bookInfo.name}</h>
                <div className="book-middle-info-div">
                    <img className="book-page-middle-img" src={props.authorImage} alt="author-image" />
                    <h className="book-page-middle-header">:نویسنده</h>
                    <h className="book-page-middle-name">{props.authorName}</h>

                </div>
                <div className="book-middle-info-div">
                    <img className="book-page-middle-img" src={props.translatorImage} alt="translator-image" />
                    <h className="book-page-middle-header">:مترجم</h>
                    <h className="book-page-middle-name">{props.translatorName}</h>

                </div>
                <div className="book-middle-info-div">
                    <img className="book-page-middle-img" src={props.publisherImage} alt="publisher-image" />
                    <h className="book-page-middle-header">:انتشارات</h>
                    <h className="book-page-middle-name">{props.publisherName}</h>

                </div>
                <div className="book-page-star-rating">
                    <StarRating disabled={false}  rate={4}/>
                    
                </div>
                <div className="book-page-star-info">
                    <p className="book-page-rate-info">{props.rateNumber}</p>
                    <hr className="book-page-line" />
                    <p className='book-page-rate-info'>{4}</p>
                    <p className="book-page-rate-info">نمره</p>
                    <hr className="book-page-line" />
                    <p className='book-page-rate-info'>{props.commentsNumber}</p>
                    <p className='book-page-rate-info'>دیدگاه</p>

                </div>

                
            </div>

            <div className="book-page-add-comment-div">
                <Popup closeByBackdropClick={true} 
                trigger={<button className='book-page-add-book'>می‌خواهم بخوانم</button>}modal nested>
                    <div className="book-popup-main-div">
                        <div className="book-popup-close-div">
                            <h className="book-popup-header">:قفسه مورد نظرتان را انتخاب کنید</h>
                        </div>
                        {popupFunc()}
                    </div>
                </Popup>

            {/* <select name="choice" className={isClicked ? 'clicked' : 'notClicked'} onClick={handleClick}>
                    <option value="want-to-read">می‌خواهم بخوانم</option>
                    <option value="reading">در حال مطالعه</option>
                    <option value="read">خوانده شده</option>
                </select> */}
                <div className="book-comment">
                    {/* <input type="text" placeholder='...دید‌گاه خود را وارد کنید' className="book-add-comment" /> */}
                    <textarea type="text" placeholder='...دید‌گاه خود را وارد کنید' className="book-add-comment" />
                    <button className="book-commit-comment">ثبت نظر</button>
                    <div className="book-page-user-rate">
                        <StarRating disabled={false} bookId={bookInfo.id} rate={sessionStorage.getItem('rating')} />
                        
                    </div>
                </div>
                
            </div>
            
        </div>

        <div className="book-page-description-div">
            <p className="book-page-description">{bookInfo.description}</p>
        </div>

        <div className="book-page-comment-section-div">
            <h className="book-page-comment-header">:دیدگاه‌ها</h>
            <CommentSec
            profileImg={props.userProfileImage}
            userId={props.userId}
            userComment={props.userComment}
            />
            {/* <CommentSec
            profileImg={profileImg}
            userId='RezaJammshidi'
            userComment='علیه تفسیر مجموعه متونی هست که سوزان سوتناک بین سال‌های ۲۶۹۱ تا ۵۶۹۱ در مواجه با دنیای مدرن بیش روش قلمی کرده. کتابی که توش هم از ادبیات حرف زده، هم از نمایش و رابطه‌ش با ادبیات نمایشی، هم از سینما و هم از هنرهای تجسمی. تنها حلقه‌ی وصل این اسی‌ها شاید نگاه فرمالیستی نویسنده به این پدیده‌ها باشه که وجه تئوریکش رو توی اولین متن کتاب بسط داده.
            اما فارغ از این مسأله وقتی این مجموعه رو می‌خونی[حتی بخش‌های مربوط به تحلیل اجرای خاص یک گروه نمایشی از یه نمایشنامه و مقایسه اون با اجراهای دیگه که مخاطبین اصلیش خواننده‌های هم‌عصر نویسنده هستن] دنیایی جلوت ترسیم میشه هم از نمایش و رابطه‌ش با ادبیات نمایشی، هم از سینما و هم '
            />
            <CommentSec
            profileImg={profileImg}
            userId='RezaJammshidi'
            userComment='علیه تفسیر مجموعه متونی هست که سوزان سوتناک بین سال‌های ۲۶۹۱ تا ۵۶۹۱ در مواجه با دنیای مدرن بیش روش قلمی کرده. کتابی که توش هم از ادبیات حرف زده، هم از نمایش و رابطه‌ش با ادبیات نمایشی، هم از سینما و هم از هنرهای تجسمی. تنها حلقه‌ی وصل این اسی‌ها شاید نگاه فرمالیستی نویسنده به این پدیده‌ها باشه که وجه تئوریکش رو توی اولین متن کتاب بسط داده.
            اما فارغ از این مسأله وقتی این مجموعه رو می‌خونی[حتی بخش‌های مربوط به تحلیل اجرای خاص یک گروه نمایشی از یه نمایشنامه و مقایسه اون با اجراهای دیگه که مخاطبین اصلیش خواننده‌های هم‌عصر نویسنده هستن] دنیایی جلوت ترسیم میشه هم از نمایش و رابطه‌ش با ادبیات نمایشی، هم از سینما و هم '
            /> */}
        </div>

        <Footer />
    </div>
  )
}

export default Book