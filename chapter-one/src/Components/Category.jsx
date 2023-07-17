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
            if(window.location.href == 'http://localhost:3000/'){
                window.location.href = '/genre-page';
            }
            else{
                setHistButton(!histButton);
            }
    }



    const [novelButton,setNovelButton] = useState(false);

    function handleNovelClick() {
            if(window.location.href == 'http://localhost:3000/'){
                window.location.href = '/genre-page';
            }
            else{
                setNovelButton(!novelButton);
            }
                    
    }



    const [poetryButton,setPoetrybutton] = useState(false);

    function handlePoetryClick() {
            if(window.location.href == 'http://localhost:3000/'){
                window.location.href = '/genre-page';
            }
            else{
                setPoetrybutton(!poetryButton);
            }
    }



    const [artButton,setArtButton] = useState(false);

    function handleArtClick() {
            if(window.location.href == 'http://localhost:3000/'){
                window.location.href = '/genre-page';
            }
            else{
                setArtButton(!artButton);
            }
    }



    const [philButton,setPhilButton] = useState(false);

    function handlePhilClick() {
            if(window.location.href == 'http://localhost:3000/'){
                window.location.href = '/genre-page';
            }
            else{
                setPhilButton(!philButton);
            }
    }



    const [litButton,setLitButton] = useState(false);

    function handleLitClick() {
            if(window.location.href == 'http://localhost:3000/'){
                window.location.href = '/genre-page';
            }
            else{
                setLitButton(!litButton);
            }
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