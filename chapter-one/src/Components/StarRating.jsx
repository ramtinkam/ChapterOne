import React, { useState } from 'react';
import './StarRating.css';
import  Axios  from 'axios';


function StarRating(props) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function addRating(rating,bookId){
      const config ={
        headers: {Authorization : "Token "+ sessionStorage.getItem('token')}
        
      }
      Axios.post("http://127.0.0.1:8000/api/socialmedia/rate-books/",{"book_id": bookId,"rating": rating},config
        ).then((res)=>{console.log(res)})
    }


  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button disabled={props.disabled}
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() =>{ setRating(index) 
              addRating(rating,props.bookId)}}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  )
}

export default StarRating