import React, { useState } from 'react';
import './Category.css';
import literature from './literature.png';
import philosophy from './philosophy.png';
import art from './art.png';
import poetry from './poetry.png';
import novel from './novel.png';
import historical from './historical.png';


function Category() {
    


    const [histButton,setHistButton] = useState(false);

    function handleHisClick() {
            if(window.location.pathname == '/'){
                window.location.href = '/genre-page';
            }
            else{
                setHistButton(!histButton);
                sessionStorage.setItem('histButton',histButton);
            }
    }



    const [novelButton,setNovelButton] = useState(false);

    function handleNovelClick() {
            if(window.location.pathname == '/'){
                window.location.href = '/genre-page';
            }
            else{
                setNovelButton(!novelButton);
                sessionStorage.setItem('novelButton',novelButton);
            }
                    
    }



    const [poetryButton,setPoetrybutton] = useState(false);

    function handlePoetryClick() {
            if(window.location.pathname == '/'){
                window.location.href = '/genre-page';
            }
            else{
                setPoetrybutton(!poetryButton);
                sessionStorage.setItem('poetryButton',poetryButton);
            }
    }



    const [artButton,setArtButton] = useState(false);

    function handleArtClick() {
            if(window.location.pathname == '/'){
                window.location.href = '/genre-page';
            }
            else{
                setArtButton(!artButton);
                sessionStorage.setItem('artButton',artButton);
            }
    }



    const [philButton,setPhilButton] = useState(false);

    function handlePhilClick() {
            if(window.location.pathname == '/'){
                window.location.href = '/genre-page';
            }
            else{
                setPhilButton(!philButton);
                sessionStorage.setItem('philButton',philButton);
            }
    }



    const [litButton,setLitButton] = useState(false);

    function handleLitClick() {
            if(window.location.pathname == '/'){
                window.location.href = '/genre-page';
            }
            else{
                setLitButton(!litButton);
                sessionStorage.setItem('litButton',litButton);
            }
    }
    



  return (
    <div className='main'>
        <h className="cat-header">دسته‌بندی ها</h>
        <div className='main-category'>
            <div className="category">
            <button className='cat-button' Value={histButton} onClick={handleHisClick} style={{
            backgroundColor: histButton ? '#F39F74':'',
            }}>
                <img className="cat-image" src={historical} alt="historical-img"/>
            </button>
            <p className="cat-text">تاریخی</p>
        </div>
         <div className="category">
            <button className='cat-button' Value={novelButton} onClick={handleNovelClick} style={{
            backgroundColor: novelButton ? '#F39F74':'',
            }}>
                <img className="cat-image" src={novel} alt="novel-img"/>
            </button>
            <p className="cat-text">رمان</p>
        </div>
        <div className="category">
            <button className='cat-button' Value={poetryButton} onClick={handlePoetryClick} style={{
            backgroundColor: poetryButton ? '#F39F74':'',
            }}>
                <img className="cat-image" src={poetry} alt="poetry-img"/>
            </button>
            <p className="cat-text">شعر</p>
        </div>
        <div className="category">
            <button className='cat-button' Value={artButton} onClick={handleArtClick} style={{
            backgroundColor: artButton ? '#F39F74':'',
            }}>
                <img className="cat-image" src={art} alt="art-img"/>
            </button>
            <p className="cat-text">هنر</p>
        </div>
        <div className="category">
            <button className='cat-button' Value={philButton} onClick={handlePhilClick} style={{
            backgroundColor: philButton ? '#F39F74':'',
            }}>
                <img className="cat-image" src={philosophy} alt="philosophy-img"/>
            </button>
            <p className="cat-text">فلسفه</p>
        </div>
        <div className="category">
            <button className='cat-button' Value={litButton} onClick={handleLitClick} style={{
            backgroundColor: litButton ? '#F39F74':'',
            }}>
                <img className="cat-image" src={literature} alt="literature-img"/>
            </button>
            <p className="cat-text">ادبیات</p>
        </div>
        </div>
      
    </div>
  )
}

export default Category;