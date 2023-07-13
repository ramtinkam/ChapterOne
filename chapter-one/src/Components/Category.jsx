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
            setHistButton(!histButton);
            if(window.location.href == 'http://localhost:3000/'){
                    window.location.href = '/genre-page';}
    }



    const [novelButton,setNovelButton] = useState(false);

    function handleNovelClick() {
            setNovelButton(!novelButton);
            if(window.location.href == 'http://localhost:3000/'){
                    window.location.href = '/genre-page';}
    }



    const [poetryButton,setPoetrybutton] = useState(false);

    function handlePoetryClick() {
            setPoetrybutton(!poetryButton);
            if(window.location.href == 'http://localhost:3000/'){
                    window.location.href = '/genre-page';}
    }



    const [artButton,setArtButton] = useState(false);

    function handleArtClick() {
            setArtButton(!artButton);
            if(window.location.href == 'http://localhost:3000/'){
                    window.location.href = '/genre-page';}
    }



    const [philButton,setPhilButton] = useState(false);

    function handlePhilClick() {
            setPhilButton(!philButton);
            if(window.location.href == 'http://localhost:3000/'){
                    window.location.href = '/genre-page';}
    }



    const [litButton,setLitButton] = useState(false);

    function handleLitClick() {
            setLitButton(!litButton);
            if(window.location.href == 'http://localhost:3000/'){
                    window.location.href = '/genre-page';}
    }
    



  return (
    <div className='main'>
        <h className="cat-header">دسته‌بندی ها</h>
        <div className='main-category'>
            <div className="category">
            <button className='cat-button' defaultValue={histButton} onClick={handleHisClick} style={{
            backgroundColor: histButton ? '#F39F74':'',
            }}>
                <img className="cat-image" src={historical} alt="historical-img"/>
            </button>
            <p className="cat-text">تاریخی</p>
        </div>
         <div className="category">
            <button className='cat-button' defaultValue={novelButton} onClick={handleNovelClick} style={{
            backgroundColor: novelButton ? '#F39F74':'',
            }}>
                <img className="cat-image" src={novel} alt="novel-img"/>
            </button>
            <p className="cat-text">رمان</p>
        </div>
        <div className="category">
            <button className='cat-button' defaultValue={poetryButton} onClick={handlePoetryClick} style={{
            backgroundColor: poetryButton ? '#F39F74':'',
            }}>
                <img className="cat-image" src={poetry} alt="poetry-img"/>
            </button>
            <p className="cat-text">شعر</p>
        </div>
        <div className="category">
            <button className='cat-button' defaultValue={artButton} onClick={handleArtClick} style={{
            backgroundColor: artButton ? '#F39F74':'',
            }}>
                <img className="cat-image" src={art} alt="art-img"/>
            </button>
            <p className="cat-text">هنر</p>
        </div>
        <div className="category">
            <button className='cat-button' defaultValue={philButton} onClick={handlePhilClick} style={{
            backgroundColor: philButton ? '#F39F74':'',
            }}>
                <img className="cat-image" src={philosophy} alt="philosophy-img"/>
            </button>
            <p className="cat-text">فلسفه</p>
        </div>
        <div className="category">
            <button className='cat-button' defaultValue={litButton} onClick={handleLitClick} style={{
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