import React, { useState} from 'react';
import './ForgotPassword.css'
import forgotPic from './forgor.png'

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };



    return (
        <div className='forgot-passowrd-container'>
            <div className='forgot-password-form-container'>
                <a href='/login' className='forgot-password-return-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM31 25.5H20.62L24.06 28.94C24.64 29.52 24.64 30.48 24.06 31.06C23.76 31.36 23.38 31.5 23 31.5C22.62 31.5 22.24 31.36 21.94 31.06L15.94 25.06C15.36 24.48 15.36 23.52 15.94 22.94L21.94 16.94C22.52 16.36 23.48 16.36 24.06 16.94C24.64 17.52 24.64 18.48 24.06 19.06L20.62 22.5H31C31.82 22.5 32.5 23.18 32.5 24C32.5 24.82 31.82 25.5 31 25.5Z" fill="#292D32"/>
                    </svg>
                </a>
                <form className='forgot-password-form'>
                    <h className='forgot-password-form-header' >فراموشی رمز</h>
                    <input onChange={handleEmail} type='text' className='forgot-password-email' value={email} placeholder='ایمیل'/>
                    <button type='submit' className='forgot-password-submit'>بازیابی کلمه عبور</button>
                </form>
            </div>
            <div className='forgot-password-picture-container'>
                <img className='forgot-password-picture' src={forgotPic} />
            </div>
        </div>
  )
}
