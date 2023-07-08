import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='suggestions-and-buttons'>
            <div className='suggestions'>
                <button className='suggestions-button'>ارسال</button>
                <input type="text" placeholder='ارسال بازخورد' className='suggestions-input' />                
            </div>
            <div className='footer-buttons'>
            <a href='#' className='footer-button'>صفحه اصلی</a>
            <a href='#' className='footer-button'>درباره ما</a>
            <a href='#' className='footer-button'>تماس</a>
            <a href='#' className='footer-button'>حمایت مالی</a>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg"  height="2" viewBox="0 0 1532 2" fill="none">
        <path d="M1531.14 1.33154L1.55701 1.33168" stroke="#DADADA" stroke-width="1.33705" stroke-linecap="round"/>
        </svg>
        <p className='copyright'>تمامی حقوق برای کاربر این محصول محفوظ است</p>
        

    </div>
  )
}

export default Footer
