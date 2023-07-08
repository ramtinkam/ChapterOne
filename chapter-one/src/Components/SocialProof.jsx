import React from 'react';
import './SocialProof.css';
import sepideh from './sepideh.png'


const SocialProof = () => {
  return (
    <div className='social-proof-container'>
        <div className='quote-container'>
            <div className='qoute-name-and-image'>
            <p className='quote-name'>سپیده</p>
            <img className='qoute-image' src={sepideh}/>
            </div>
            <div className='qoute-text-container'>
            <p className='quote-text'>استفاده از این وبسایت برای من یک تجربه بی‌نظیر بود. طراحی زیبا و کاربرپسند، محتوای گوناگون و گسترده از کتاب‌های مختلف، و قابلیت جستجوی سریع و دقیق برای پیدا کردن کتاب‌های مورد نیاز، همه در کنار هم باعث شد که به راحتی به دنیایی از دانش و سرگرمی وارد شوم. همچنین، امکان مطالعه نظرات کاربران دیگر درباره کتاب‌ها، به من کمک کرد تا انتخاب‌های بهتری برای خرید کتاب‌های جدید داشته باشم. بدون شک، این وبسایت برای علاقه‌مندان به کتاب‌ها و کتابخوانی یک منبع بسیار ارزشمند است</p>
            </div>
        </div>
        <p className='social-proof-title'>نظرات برخی از کابران</p>
    </div>
  )
}

export default SocialProof