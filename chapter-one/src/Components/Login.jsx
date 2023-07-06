import React, { useState } from 'react';
import './Login.css'
import image from './unknown-image.png';

function Login() {

    const [emailval, setemailval] = useState("");
    const [passval, setpassval] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };
  return (
    <div className='main-login'>
        <div className='left-side'>
          <form onSubmit={handleSubmit}>
            <h className='form-header'>خوش آمدید</h>
              <input placeholder='ایمیل' type='email' value={emailval} 
              onChange={(e)=>{setemailval(e.target.value)}} id='email1' />
              <input placeholder='رمز عبور' type='password' value={passval}
              onChange={(e)=>{setpassval(e.target.value)}} id='pass1' />
              <p className="forgot-pass">رمز عبور خود را فراموش کرده‌اید؟ <a href='#'>فراموشی رمز عبور</a></p>
              <button type='submit' id='sub-but'>ورود</button>
          </form>
        </div>
        
     
      <div className='right-side'>
        <img className='unknown-img' src={image} alt=""/>
      </div>
    </div>
    
  )
}

export default Login;



