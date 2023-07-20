import React from 'react';
import './CommentSec.css';
import profileImg from './rezajamshidi.jpg';
import StarRating from './StarRating';

function CommentSec(props) {
  return (
    <div className='comment-main-container'>
        <div className="comment-user-info">
            <img className="comment-user-profile-pic" src={props.profileImg} alt="" />
            <p className="comment-sec-user-id">{props.userId}</p>
            <div className="comment-sec-rating">
                <StarRating />
            </div>
            
        </div>

        <div className="comment-sec-user-comment-div">
            <p className="comment-section">{props.userComment}</p>
            </div>

    </div>
  )
}

export default CommentSec;