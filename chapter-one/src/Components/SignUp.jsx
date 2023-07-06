import React, { useState} from 'react';
import './SignUp.css';




const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    /*const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };*/


    return (
        <div className='form-container'>
            
            <form className='form-body'>
                <h className='form-header'>ثبت نام</h>
                <input onChange={handleUsername} className="input" placeholder='نام کاربری'
                value={username} type="text"/>
                <input onChange={handleEmail} className="input" placeholder='ایمیل'
                value={email} type="text"/>
                <input onChange={handlePassword} className="input" placeholder='رمز عبور'
                value={password} type="text"/>
                <label className='signUp-label'>تمامی شرایط و قوانین را می‌پذیرم<input type="checkbox" className='singUpCheckbox'/></label>
                <input className='submit-button' type="submit" value="ثبت نام" />

            </form>
        </div>
    )
}

export default SignUp