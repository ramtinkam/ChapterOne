import React, { useState } from 'react';
import './PassRecovery.css';
import PassRecoveryimage from './password-recovery.jpg';
import Axios from "axios";




function PassRecovery() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        if (password != confirmPassword || password === '' || confirmPassword === ''){
            console.log('error');
        }
        else{
            const params = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
              });
            const token = params.token; 
            Axios.post("http://127.0.0.1:8000/api/password-reset/confirm/",{ password:password,token:token }).then(
            (response) => {
                console.log(response);
            window.location.href = "/login"
        }).catch((err)=>{console.log(err)})
        }
    };
    
    function handleBackClick() {
        window.location.href = '/';
    }



  return (
    <div className="main-recovery">
        <div className="pass-recover">
            <img className="pass-recovery-img" src={PassRecoveryimage} alt="pass-recovery-img" />

            <button className='pass-recovery-back-but' onClick={handleBackClick}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM31 25.5H20.62L24.06 28.94C24.64 29.52 24.64 30.48 24.06 31.06C23.76 31.36 23.38 31.5 23 31.5C22.62 31.5 22.24 31.36 21.94 31.06L15.94 25.06C15.36 24.48 15.36 23.52 15.94 22.94L21.94 16.94C22.52 16.36 23.48 16.36 24.06 16.94C24.64 17.52 24.64 18.48 24.06 19.06L20.62 22.5H31C31.82 22.5 32.5 23.18 32.5 24C32.5 24.82 31.82 25.5 31 25.5Z" fill="#292D32"/>
                </svg>
            </button>

            <form onSubmit={handleSubmit} className="pass-recover-form">
                <h className='pass-recovery-header'>بازیابی کلمه عبور </h>

                <input className="pass-recovery-input" type="password" value={password}
                onChange={(e)=>{setPassword(e.target.value)}} placeholder='کلمه عبور جدید'/>
                <input className="pass-recovery-input" type="password" value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder=' تایید کلمه عبور جدید'/>

                <button type='submit' className='pass-recovery-but'>بازیابی کلمه عبور</button>
            </form>

        </div>
    </div>
  )
}

export default PassRecovery;