import React, { useState} from 'react';
import './SignUp.css';
import signupimage from './signup-img.jpg';
import Axios from "axios";


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    
    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleCheckbox = (e) => {
        setCheckbox(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || email === '' || password === '' || checkbox === false) {
            console.log("error");}
        else {
           Axios.post("http://127.0.0.1:8000/api/user/signup/",{ email: email, fullname:username, password:password }).then(
            (response) => {
            const token = response.data.data;
            sessionStorage.setItem('token',token.slice(6));
            window.location.href = "/"
          });
        }
    };



    return (
        <div className="main-signup">
            <div className='form-container'>
            <img className='signup-img' src={signupimage} alt="signup-image"/>
           
            <form className='form-body'>
            <a href='login' className='signup-back-but' >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM31 25.5H20.62L24.06 28.94C24.64 29.52 24.64 30.48 24.06 31.06C23.76 31.36 23.38 31.5 23 31.5C22.62 31.5 22.24 31.36 21.94 31.06L15.94 25.06C15.36 24.48 15.36 23.52 15.94 22.94L21.94 16.94C22.52 16.36 23.48 16.36 24.06 16.94C24.64 17.52 24.64 18.48 24.06 19.06L20.62 22.5H31C31.82 22.5 32.5 23.18 32.5 24C32.5 24.82 31.82 25.5 31 25.5Z" fill="#292D32"/>
            </svg>
            </a>
                <h className='form-header'>ثبت نام</h>
                <input onChange={handleUsername} className="input" placeholder='نام کاربری'
                value={username} type="text"/>
                <input onChange={handleEmail} className="input" placeholder='ایمیل'
                value={email} type="text"/>
                <input onChange={handlePassword} className="input" placeholder='رمز عبور'
                value={password} type="text"/>
                <label className='signUp-label'>
                    تمامی شرایط و قوانین را می‌پذیرم
                    <input type="checkbox" className='singUpCheckbox' onChange={handleCheckbox} value={checkbox} />
                </label>
                <input className='submit-button' type="submit" value="ثبت نام" onClick={handleSubmit} />

                <p className="signup-login-route">آیا قبلا ثبت نام کرده‌اید؟
                    <a className='signup-to-login-link' href='/login'>ورود</a>
                </p>

            </form>
        </div>
        </div>
        
    )
}

export default SignUp