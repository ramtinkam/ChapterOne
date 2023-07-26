import React from 'react';
import './Follow.css';
import profileImg from './rezajamshidi.jpg';

function Follow() {
  return (
    //A list of followers and followings of the user
    <div className='follow-page-main-div'>
        <div className="follow-info-div">
            <img src={profileImg} alt="" className="follow-profile-img" />
            <h className="follow-name-header">RezaJammshidi</h>
            <button className="follow-page-button">Follow</button>
        </div>
    </div>
  )
}

export default Follow