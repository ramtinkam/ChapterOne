import React, { useEffect, useState } from 'react';
import './GenrePage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import BookCard from './BookCard';
import sampleimg from './booksample.png';
import Category from './Category';
import Button from './Button';
import Axios from "axios";



function GenrePage() {
    const [searchValue, setSearchValue] = useState(sessionStorage.getItem('searchValue'));
    const [searchResult,setSearchResult] = useState([]);
    const [book,setBook] = useState([]);
    const [state, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    useEffect(()=>{
        handleSearch();
        sessionStorage.removeItem('searchValue');
    },[]);

    function handleSearch(){
        
        let filter = '';
        if (sessionStorage.getItem('histButton') == 'false'){
            filter = filter + 'historical'+",";
        }
        if (sessionStorage.getItem('novelButton') == 'false'){
            filter = filter + 'novel'+",";
        }
        if (sessionStorage.getItem('artButton') == 'false'){
            filter = filter + 'art'+",";
        }
        if (sessionStorage.getItem('litButton') == 'false'){
            filter = filter + 'lit'+",";
        }
        if (sessionStorage.getItem('philButton') == 'false'){
            filter = filter + 'phil'+",";
        }
        if (sessionStorage.getItem('poetryButton') == 'false'){
            filter = filter + 'poetry'+",";
        }
        const bookConfig = {
            headers: {Authorization : "Token "+ sessionStorage.getItem('token')},
            params:{search:searchValue ,genres: filter}     
        }
        if (sessionStorage.getItem('token') === null){
            alert('please sign in before searching');
        }
        else{
            Axios.get("http://127.0.0.1:8000/api/socialmedia/getbooks/", bookConfig
            ).then((res)=>{
                setSearchResult(res.data.data);
                /*console.log(searchResult);
                for(let i=0;i<searchResult.length;i++){
                    let authorConfig = {
                        headers: {Authorization : "Token "+ sessionStorage.getItem('token')},
                    }
                    Axios.get(`http://127.0.0.1:8000/api/socialmedia/authors/${searchResult[i].id}`,authorConfig).then((res=>{
                        searchResult[i].authorName = res.data.data[0].full_name;
                    })).catch((err)=>{console.log(err)})/
                }
                setBook(...[searchResult]);*/                
            }).catch((err)=>{setSearchResult([])})
            
            
        }
        
    }

    function handleSortbyName(){
        searchResult.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        forceUpdate();
        
    }
    function handleSortbyRating(){
        searchResult.sort((a, b) => {
            let fa = a.average_rating,
                fb = b.average_rating;
        
            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        });
        forceUpdate();
    }
    function handleSortbyDate(){
        searchResult.sort((a, b) => {
            let fa = a.release_date,
                fb = b.release_date;
        
            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        });
        forceUpdate();

    }

    // User is currently on this page
    const [currentPage, setCurrentPage] = useState(1);
    // No of Records to be displayed on each page   
    const [recordsPerPage] = useState(36);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = searchResult.slice(indexOfFirstRecord, 
        indexOfLastRecord);
    let numOfPages = searchResult.length/recordsPerPage;
    const pages = [];
    function renderPaginate(){
        console.log(numOfPages);
        if (searchResult.length%recordsPerPage!=0){
            numOfPages = numOfPages+1
        }
        for (let i = 1;i<=numOfPages;i++){
            pages.push(<a onClick={()=>{setCurrentPage(i)}} className="genre-pages">{i}</a>)
        }
        return pages;}


  return (
    <div className='main-genre-container'>
        <Navbar />
        <div className="genre-category-div">
            <Category />
        </div>
        <div className="genre-searchbox-div">
            <div className="genre-searchbox">
                <input className="genre-searchbox-input" type="text" value={searchValue} placeholder='دنبال چه کتابی میگردی؟' 
                onChange={(e)=>{setSearchValue(e.target.value)}} />
            </div>
            <Button className="genre-btn-search" type="submit" text="" icon="fas fa-search" onClick={handleSearch} />
        </div>

        <div className="genre-sortby-div">
            <button className="genre-sortby-name" onClick={handleSortbyName}> الفبایی</button>
            <button className="genre-sortby-name" onClick={handleSortbyRating}>محبوب ترین ها</button>
            <button className="genre-sortby-name" onClick={handleSortbyDate}> تازه‌ ترین ها</button>
            <h className="genre-sortby-header">:مرتب سازی بر اساس </h>
            
        </div>

        <div className="genre-bookcard" >
            {currentRecords.map((e, index)=>{//console.log(e);
                return(
                    <BookCard key={index}
                image={e.image}
                bookName={e.name}
                authorName={" "+e.authors[0].full_name}
                authorId = {e.authors[0].id}
                avgRate ={e.average_rating}
                id = {e.id}
                />
                );
            })}
        </div>

        <div className="genre-page-navigation">
            <a className="genre-page-back-svg" onClick={()=>{if(!(currentPage===1))
                {setCurrentPage(currentPage-1)}}} >
                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9623 23.525C11.7248 23.525 11.4873 23.4375 11.2998 23.25L3.7123 15.6625C3.3498 15.3 3.3498 14.7 3.7123 14.3375L11.2998 6.75002C11.6623 6.38752 12.2623 6.38752 12.6248 6.75002C12.9873 7.11252 12.9873 7.71252 12.6248 8.07502L5.6998 15L12.6248 21.925C12.9873 22.2875 12.9873 22.8875 12.6248 23.25C12.4498 23.4375 12.1998 23.525 11.9623 23.525Z" fill="#292D32"/>
                    <path d="M25.6254 15.9375H4.58789C4.07539 15.9375 3.65039 15.5125 3.65039 15C3.65039 14.4875 4.07539 14.0625 4.58789 14.0625H25.6254C26.1379 14.0625 26.5629 14.4875 26.5629 15C26.5629 15.5125 26.1379 15.9375 25.6254 15.9375Z" fill="#292D32"/>
                </svg> 
            </a>
            <a  className="genre-page-back-text" onClick={()=>{if(!(currentPage===1))
                {setCurrentPage(currentPage-1)}}}>صفحه قبل </a>
            {renderPaginate()}
            <a  className="genre-page-forward-text" onClick={()=>{if(!(currentPage===numOfPages))
                {setCurrentPage(currentPage+1)}}}> صفحه بعد</a>
            <a className="genre-page-forward-svg" onClick={()=>{if(!(currentPage===5))
                {setCurrentPage(currentPage+1)}}} >
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