import React from 'react';
import './Category.css';
import literature from './literature.png';
import philosophy from './philosophy.png';
import art from './art.png';
import poetry from './poetry.png';
import novel from './novel.png';
import historical from './historical.png';


function Category() {
  return (
    <div className='main'>
        <h className="cat-header">دسته‌بندی ها</h>
        <div className='main-category'>
            <div className="category">
            <a href="" >
                <img className="cat-image" src={historical} alt="historical-img"/>
            </a>
            <p className="cat-text">تاریخی</p>
        </div>
         <div className="category">
            <a href="" >
                <img className="cat-image" src={novel} alt="novel-img"/>
            </a>
            <p className="cat-text">رمان</p>
        </div>
        <div className="category">
            <a href="" >
                <img className="cat-image" src={poetry} alt="poetry-img"/>
            </a>
            <p className="cat-text">شعر</p>
        </div>
        <div className="category">
            <a href="" >
                <img className="cat-image" src={art} alt="art-img"/>
            </a>
            <p className="cat-text">هنر</p>
        </div>
        <div className="category">
            <a href="" >
                <img className="cat-image" src={philosophy} alt="philosophy-img"/>
            </a>
            <p className="cat-text">فلسفه</p>
        </div>
        <div className="category">
            <a href="" >
                <img className="cat-image" src={literature} alt="literature-img"/>
            </a>
            <p className="cat-text">ادبیات</p>
        </div>
        </div>
      
    </div>
  )
}

export default Category;