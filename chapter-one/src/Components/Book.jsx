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
import {Rating} from 'react-simple-star-rating'


function Book(props) {
    const params = useParams();
    const [favBooks,setFavBooks] = useState([]);
    const [defaultRating,setDefaultRating] = useState(0);
    const [authorInfo,setAuthorInfo] = useState([]);
    function getBookRating(){
        const config = {
            headers: {Authorization : "Token "+ sessionStorage.getItem('token')}    
        }
        Axios.get(`api/socialmedia/books/rating/${params.id}`, config
        ).then((res)=>{
            setDefaultRating(res.data.data.rating);
        }).catch((err)=>{
        setDefaultRating(0);
        console.log(err);}
        )
    }
    //const [state, updateState] = React.useState();
    //const forceUpdate = React.useCallback(() => updateState({}), []);

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
        Axios.get(`api/socialmedia/get-favorite-books/${sessionStorage.getItem('userId')}`,
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}).then(
            (res)=>{
                setFavBooks(res.data.data);
        }).catch((err)=>{console.log(err)
            setFavBooks([])});}


    function addWillRead(){
        Axios.put("api/socialmedia/toggle-favorite-book/",{"book_id":bookInfo.id, "status":'برای خواندن'},
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}
            ).then((res)=>{
                    console.log(res);
                    getFavBooks();
            }).catch((err)=>{console.log(err)});
    }
    function addReading(){
        Axios.put("api/socialmedia/toggle-favorite-book/",{"book_id":bookInfo.id, "status":'درحال خواندن'},
        {headers: {Authorization : "Token "+ sessionStorage.getItem('token')}}
            ).then((res)=>{
                    console.log(res);
                    getFavBooks();
            }).catch((err)=>{console.log(err)});
    }
    function addRead(){
        Axios.put("api/socialmedia/toggle-favorite-book/",{"book_id":bookInfo.id, "status":'خوانده شده'},
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
        Axios.get("api/socialmedia/getbooks/", config
        ).then((res)=>{
                setBookInfo(res.data.data[0]);
                setAuthorInfo(res.data.data[0].authors[0]);
        }).catch((err)=>{
        console.log(err);}
        )
        console.log(bookInfo);

    }
    
    useEffect(()=>{
        getBook(params);
        getBookRating();
        getFavBooks();
        getComments();

    },[]);


    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        const config ={
            headers: {Authorization : "Token "+ sessionStorage.getItem('token')}
            
          }
          Axios.post("api/socialmedia/rate-books/",{"book_id": bookInfo.id,"rating": rate},config
            ).then((res)=>{console.log(res)})
    }

    const [comment,setComment] = useState('');
    function addComment(){
        if (comment === ''){
            alert('please write something');
        }
        else{
            const config ={
                headers: {Authorization : "Token "+ sessionStorage.getItem('token')}
            }
            Axios.post("api/socialmedia/comments/add/",{"text": comment,"book_id": bookInfo.id,
            },config
            ).then((res)=>{console.log(res)
            setComment('')}).catch((err)=>{
                console.log(err);}
                )
        }
    }

    const[commentArray,setCommentArray]=useState([]);
    function getComments(){
        const config ={
            headers: {Authorization : "Token "+ sessionStorage.getItem('token')}
        }
        Axios.get(`api/socialmedia/comments/get/${params.id}`, config
        ).then((res)=>{
            console.log(res.data);
            setCommentArray(res.data.data);
        }).catch((err)=>{
        console.log(err);}
        )
    }
    

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
                    <img className="book-page-middle-img" alt="author-image" 
                    src={'media/'+authorInfo.image} />
                    <h className="book-page-middle-header">:نویسنده</h>
                    <a className="book-page-middle-name" href={`/author-page/${authorInfo.id}/${bookInfo.id}`}>{authorInfo.full_name}</a>

                </div>
                <div className="book-middle-info-div">
                    {/*<img className="book-page-middle-img" src={props.translatorImage} alt="translator-image" />
                    <h className="book-page-middle-header">:مترجم</h>
                    <h className="book-page-middle-name">{props.translatorName}</h>*/}

                </div>
                <div className="book-middle-info-div">
                    {/*<img className="book-page-middle-img" src={props.publisherImage} alt="publisher-image" />
                    <h className="book-page-middle-header">:انتشارات</h>
                <h className="book-page-middle-name">{props.publisherName}</h>*/}

                </div>
                <div className="book-page-star-rating">
                <Rating
                initialValue={bookInfo.average_rating}
                readonly={true}
                size={30}
                allowFraction={true}
                fillColor='#F39F74'
                emptyColor='gray'
                className='foo' // Will remove the inline style if applied
                />
                    
                </div>
                <div className="book-page-star-info">
                    <p className="book-page-rate-info">{bookInfo.average_rating}</p>
                    <hr className="book-page-line" />
                    <p className='book-page-rate-info'>{4}</p>
                    <p className="book-page-rate-info">نمره</p>
                    <hr className="book-page-line" />
                    <p className='book-page-rate-info'>{commentArray.length}</p>
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
                    <textarea type="text" placeholder='...دید‌گاه خود را وارد کنید' className="book-add-comment" value={comment}
                    onChange={(e)=>{setComment(e.target.value)}} />
                    <button className="book-commit-comment" onClick={addComment}>ثبت نظر</button>
                    <div className="book-page-user-rate">
                    <Rating
                        onClick={handleRating}
                        ratingValue={rating}
                        initialValue={defaultRating}
                        size={25}
                        fillColor='#F39F74'
                        emptyColor='gray'
                        className='foo' // Will remove the inline style if applied
                        />
                        
                    </div>
                </div>
                
            </div>
            
        </div>

        <div className="book-page-description-div">
            <p className="book-page-description">{bookInfo.description}</p>
        </div>

        <div className="book-page-comment-section-div">
            <h className="book-page-comment-header">:دیدگاه‌ها</h>
            {commentArray.map((e)=>{return(
                <CommentSec
                profileImg={'https://img.freepik.com/free-icon/user_318-804790.jpg?size=626&ext=jpg'}
                userId={e.user}
                userComment={e.text}
                />)
            })}
            
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