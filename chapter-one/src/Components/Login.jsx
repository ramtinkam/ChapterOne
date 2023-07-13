import React, { useState } from 'react';
import './Login.css';
import loginimage from './login-image.png';
import Axios from "axios";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try{      
        if (email === '' || password === '') {
          console.log('error');
        }
        else {
         Axios.post("http://127.0.0.1:8000/api/user/signin/",{ email: email, password:password }).then(
          (response) => {
          const token = response.data.data;
          sessionStorage.setItem('token',token.slice(6));
          window.location.href = "/"
        })
        }
        }
        catch(err){
          console.log(err);
        }
  };
    

    function handleBackClick() {
      window.location.href = '/';
    }

    function handleSignupClick() {
      window.location.href = 'signup';
    }

  return (
    <div className='main-login'>

        <div className='login-div'>
          <img className='login-img' src={loginimage} alt="login-image"/>
          <button className='login-back-but' onClick={handleBackClick}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM31 25.5H20.62L24.06 28.94C24.64 29.52 24.64 30.48 24.06 31.06C23.76 31.36 23.38 31.5 23 31.5C22.62 31.5 22.24 31.36 21.94 31.06L15.94 25.06C15.36 24.48 15.36 23.52 15.94 22.94L21.94 16.94C22.52 16.36 23.48 16.36 24.06 16.94C24.64 17.52 24.64 18.48 24.06 19.06L20.62 22.5H31C31.82 22.5 32.5 23.18 32.5 24C32.5 24.82 31.82 25.5 31 25.5Z" fill="#292D32"/>
            </svg>
          </button>
          <form onSubmit={handleSubmit} className='login-form'>
          

            <h className='login-header'>خوش آمدید</h>

            <input className='login-input' placeholder='ایمیل' type='email' value={email} 
            onChange={(e)=>{setEmail(e.target.value)}} />

            <input className='login-input' placeholder='رمز عبور' type='password' value={password}
            onChange={(e)=>{setPassword(e.target.value)}} />

              <p className="forgot-pass">رمز عبور خود را فراموش کرده‌اید؟ 
              <a className='forgot-link' href='/forgot-password'>فراموشی رمز عبور</a>
              </p>
              

              <button type='submit' id='sub-but'>ورود</button>
              
              
              
          </form>
          <hr className='login-linebreak' />
          <button type='submit' className='login-signup-but' onClick={handleSignupClick}>ثبت نام</button>
        </div>
        
     
      
    </div>
    
  )
}

export default Login;



