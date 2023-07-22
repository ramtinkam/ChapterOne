import React, {useEffect, useState} from 'react';
import './Author.css';
import Navbar from './Navbar';
import albertimg from './albertcamus.png';
import BookCard from './BookCard';
import sampleimg from './booksample.png';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import Axios from "axios";

function Author(props) {
    const {id, bookId} = useParams();

    const [authorInfo,setAuthorInfo] = useState([]);
    function getAuthorInfo(){
        const config = {
            headers: {Authorization : "Token "+ sessionStorage.getItem('token')},
            params:{id:Number(bookId)}     
        }
        Axios.get("http://127.0.0.1:8000/api/socialmedia/getbooks/", config
        ).then((res)=>{
                setAuthorInfo(res.data.data[0].authors[0]);
        }).catch((err)=>{
        console.log(err);}
        )
    }


    useEffect(()=>{
        getAuthorInfo();

    },[]);

  return (
    <div className='main-author-container'>
        <Navbar />
        <div className="author-div">
            <div className="author-main-info-div">
                <img className="author-img" src={'http://127.0.0.1:8000/media/'+authorInfo.image} alt="author-image" />
                <div  className='author-bio-and-name'>
                <h className="author-name">{authorInfo.full_name}</h>
                <div className="author-bio-div">
                    <p className="author-bio">
                        {authorInfo.biography}
                    </p>
                </div>
                </div>
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