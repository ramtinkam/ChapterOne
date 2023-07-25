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
    // Getting the information needed for the page
    const {id, bookId} = useParams();
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

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
    const [authorBooks,SetAuthorBooks] = useState([]);
    function getAuthorBooks(){
        const config = {
            headers: {Authorization : "Token "+ sessionStorage.getItem('token')}, 
        }
        Axios.get(`http://127.0.0.1:8000/api/socialmedia/books-by-author/${id}/`, config
        ).then((res)=>{
                SetAuthorBooks(res.data.data);
        }).catch((err)=>{
        console.log(err);}
        )
    }

    // Catch the books sorted by their names
    function handleSortbyName(){
        authorBooks.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
        
        
    }

    // Catch the books sorted by their rates
    function handleSortbyRating(){
        authorBooks.sort((a, b) => {
            let fa = a.average_rating,
                fb = b.average_rating;
        
            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        })
    }

    // Catch the books sorted by their publishing date
    function handleSortbyDate(){
        authorBooks.sort((a, b) => {
            let fa = a.release_date,
                fb = b.release_date;
        
            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        })

    }
    const [sortValue,setSortValue] =useState('');
    function handleSort(e){
        if (e==='popular'){
            handleSortbyRating();
            forceUpdate();
        }
        if (e==='alphabet'){
            handleSortbyName();
            forceUpdate();
        }
        if (e==='new'){
            handleSortbyDate();
            forceUpdate();
        }
    }

    useEffect(()=>{
        getAuthorInfo();
        getAuthorBooks();
        handleSort();

    },[]);

  return (
    <div className='main-author-container'>
        {/* Having the navbar of the page */}
        <Navbar />

        {/* Having the div that consists of author main informations such as image, name, biography */}
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

        {/* Having the div that consists of author's books with different orders */}
        <div className="author-books">
            <div className="author-books-container">
                <p className="author-sortby">مرتب سازی بر اساس</p>
                <select name="sortby" id="author-sort-button" value={sortValue}
                onChange={(e) => {handleSort(e.target.value)
                    setSortValue(e.target.value)}}>
                    <option value="popular" >محبوب‌ترین‌ ها</option>
                    <option value="new" >تازه‌ترین ها</option>
                    <option value="alphabet">الفبایی</option>
                </select>
                <h className="author-books-div-name">آثار نویسنده</h>  
            </div>

            {/* Mapping through author's books and creating the BookCard component for them */}
            <div className="author-books-div">
            {authorBooks.map((e, index)=>{//console.log(e);
                return(
                <BookCard key={index}
                image={e.image}
                bookName={e.name}
                authorName={" "+authorInfo.full_name}
                authorId = {id}
                avgRate ={e.average_rating}
                id = {e.id}
                />
                );
            })}
            </div>
        </div>

        {/* The footer of the page */}
        <Footer />
    </div>
  )
}

export default Author