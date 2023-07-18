import React, { useState } from 'react';
import './Book.css';
import profileImg from './rezajamshidi.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import book from './book-img.jpg';
import author from './book-author-img.jpg';
import StarRating from './StarRating';
import CommentSec from './CommentSec';


function Book() {
    const [isClicked, setIsClicked] = useState(false);
    function handleClick() {
        setIsClicked(true);
      }

  return (
    <div className='book-main-container'>
        <div className="book-navbar-div">
            <Navbar />
        </div>
        <div className="book-info-div">
            <img className="book-page-img" src={book} alt="the-book-image" />
            <div className="book-middle-div">
                <h className="book-page-name">علیه تفسیر</h>
                <div className="book-middle-info-div">
                    <img className="book-page-middle-img" src={author} alt="author-image" />
                    <h className="book-page-middle-header">:نویسنده</h>
                    <h className="book-page-middle-name">سوزان سانتاگ</h>

                </div>
                <div className="book-middle-info-div">
                    <img className="book-page-middle-img" src={author} alt="author-image" />
                    <h className="book-page-middle-header">:مترجم</h>
                    <h className="book-page-middle-name">سوزان سانتاگ</h>

                </div>
                <div className="book-middle-info-div">
                    <img className="book-page-middle-img" src={author} alt="author-image" />
                    <h className="book-page-middle-header">:انتشارات</h>
                    <h className="book-page-middle-name">سوزان سانتاگ</h>

                </div>
                <div className="book-page-star-rating">
                    <svg width="32" height="30" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 1.61804L29.1373 17.4291L29.2496 17.7746H29.6129H46.2376L32.7879 27.5463L32.494 27.7599L32.6063 28.1054L37.7436 43.9164L24.2939 34.1446L24 33.9311L23.7061 34.1446L10.2564 43.9164L15.3937 28.1054L15.506 27.7599L15.2121 27.5463L1.76243 17.7746H18.3871H18.7504L18.8627 17.4291L24 1.61804Z" fill="#3C5A80" stroke="#F39F74"/>
                    </svg>
                    <svg width="32" height="30" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 1.61804L29.1373 17.4291L29.2496 17.7746H29.6129H46.2376L32.7879 27.5463L32.494 27.7599L32.6063 28.1054L37.7436 43.9164L24.2939 34.1446L24 33.9311L23.7061 34.1446L10.2564 43.9164L15.3937 28.1054L15.506 27.7599L15.2121 27.5463L1.76243 17.7746H18.3871H18.7504L18.8627 17.4291L24 1.61804Z" fill="#3C5A80" stroke="#F39F74"/>
                    </svg>
                    <svg width="32" height="30" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 1.61804L29.1373 17.4291L29.2496 17.7746H29.6129H46.2376L32.7879 27.5463L32.494 27.7599L32.6063 28.1054L37.7436 43.9164L24.2939 34.1446L24 33.9311L23.7061 34.1446L10.2564 43.9164L15.3937 28.1054L15.506 27.7599L15.2121 27.5463L1.76243 17.7746H18.3871H18.7504L18.8627 17.4291L24 1.61804Z" fill="#3C5A80" stroke="#F39F74"/>
                    </svg>
                    <svg width="32" height="30" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 1.61804L29.1373 17.4291L29.2496 17.7746H29.6129H46.2376L32.7879 27.5463L32.494 27.7599L32.6063 28.1054L37.7436 43.9164L24.2939 34.1446L24 33.9311L23.7061 34.1446L10.2564 43.9164L15.3937 28.1054L15.506 27.7599L15.2121 27.5463L1.76243 17.7746H18.3871H18.7504L18.8627 17.4291L24 1.61804Z" fill="#3C5A80" stroke="#F39F74"/>
                    </svg>
                    <svg width="32" height="30" viewBox="0 0 48 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 1.61804L29.1373 17.4291L29.2496 17.7746H29.6129H46.2376L32.7879 27.5463L32.494 27.7599L32.6063 28.1054L37.7436 43.9164L24.2939 34.1446L24 33.9311L23.7061 34.1446L10.2564 43.9164L15.3937 28.1054L15.506 27.7599L15.2121 27.5463L1.76243 17.7746H18.3871H18.7504L18.8627 17.4291L24 1.61804Z" fill="url(#paint0_linear_692_1423)" stroke="#F39F74"/>
                        <defs>
                          <linearGradient id="paint0_linear_692_1423" x1="13.5" y1="0" x2="38.5" y2="0" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3C5A80"/>
                            <stop stop-color="#3C5A80" stop-opacity="0.377129"/>
                            <stop offset="0.0001" stop-color="#3C5A80" stop-opacity="0.377129"/>
                            <stop offset="0.0002" stop-color="#3C5A80" stop-opacity="0.532418"/>
                            <stop offset="0.0003" stop-color="#3C5A80" stop-opacity="0"/>
                          </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="book-page-star-info">
                    <p className="book-page-rate-info">4.14</p>
                    <hr className="book-page-line" />
                    <p className='book-page-rate-info'>837</p>
                    <p className="book-page-rate-info">نمره</p>
                    <hr className="book-page-line" />
                    <p className='book-page-rate-info'>50</p>
                    <p className='book-page-rate-info'>دیدگاه</p>

                </div>

                
            </div>

            <div className="book-page-add-comment-div">
            <select name="choice" className={isClicked ? 'clicked' : 'notClicked'} onClick={handleClick}>
                    <option value="want-to-read">می‌خواهم بخوانم</option>
                    <option value="reading">در حال مطالعه</option>
                    <option value="read">خوانده شده</option>
                </select>
                <div className="book-comment">
                    <input type="text" placeholder='...دید‌گاه خود را وارد کنید' className="book-add-comment" />
                    <div className="book-page-user-rate">
                        <StarRating />
                    </div>
                </div>
                
            </div>
            
        </div>

        <div className="book-page-discription-div">
            <p className="book-page-discription">کتاب علیه تفسیر، اثری نوشته ی سوزان سونتاگ است که اولین بار در سال 1966 انتشار یافت. این کتاب، نخستین مجموعه از مقالات سونتاگ است و یک اثر کلاسیکِ مدرن به حساب می آید. کتاب علیه تفسیر از زمان اولین عرضه ی خود تا کنون، هیچ وقت از چرخه ی انتشار خارج نشده و نسل های زیادی از مخاطبین را در سراسر جهان تحت تأثیر قرار داده است. این اثر، دربردارنده ی برخی از بهترین مقاله های سونتاگ است و موضوعات جذابی همچون فیلم های علمی تخیلی، روانکاوی، تفکرات دینی و اجتماعی معاصر و البته پرداخت هایی نوین و آموزنده به اندیشه های چهره هایی جریان ساز همچون سارتر، کامو، سیمون وی، گدار، بکت و لوی استراوس را در خود جای داده است.</p>
        </div>

        <div className="book-page-comment-section-div">
            <h className="book-page-comment-header">:دیدگاه‌ها</h>
            <CommentSec
            profileImg={profileImg}
            userId='RezaJammshidi'
            userComment='علیه تفسیر مجموعه متونی هست که سوزان سوتناک بین سال‌های ۲۶۹۱ تا ۵۶۹۱ در مواجه با دنیای مدرن بیش روش قلمی کرده. کتابی که توش هم از ادبیات حرف زده، هم از نمایش و رابطه‌ش با ادبیات نمایشی، هم از سینما و هم از هنرهای تجسمی. تنها حلقه‌ی وصل این اسی‌ها شاید نگاه فرمالیستی نویسنده به این پدیده‌ها باشه که وجه تئوریکش رو توی اولین متن کتاب بسط داده.
            اما فارغ از این مسأله وقتی این مجموعه رو می‌خونی[حتی بخش‌های مربوط به تحلیل اجرای خاص یک گروه نمایشی از یه نمایشنامه و مقایسه اون با اجراهای دیگه که مخاطبین اصلیش خواننده‌های هم‌عصر نویسنده هستن] دنیایی جلوت ترسیم میشه هم از نمایش و رابطه‌ش با ادبیات نمایشی، هم از سینما و هم '
            />
            <CommentSec
            profileImg={profileImg}
            userId='RezaJammshidi'
            userComment='علیه تفسیر مجموعه متونی هست که سوزان سوتناک بین سال‌های ۲۶۹۱ تا ۵۶۹۱ در مواجه با دنیای مدرن بیش روش قلمی کرده. کتابی که توش هم از ادبیات حرف زده، هم از نمایش و رابطه‌ش با ادبیات نمایشی، هم از سینما و هم از هنرهای تجسمی. تنها حلقه‌ی وصل این اسی‌ها شاید نگاه فرمالیستی نویسنده به این پدیده‌ها باشه که وجه تئوریکش رو توی اولین متن کتاب بسط داده.
            اما فارغ از این مسأله وقتی این مجموعه رو می‌خونی[حتی بخش‌های مربوط به تحلیل اجرای خاص یک گروه نمایشی از یه نمایشنامه و مقایسه اون با اجراهای دیگه که مخاطبین اصلیش خواننده‌های هم‌عصر نویسنده هستن] دنیایی جلوت ترسیم میشه هم از نمایش و رابطه‌ش با ادبیات نمایشی، هم از سینما و هم '
            />
            <CommentSec
            profileImg={profileImg}
            userId='RezaJammshidi'
            userComment='علیه تفسیر مجموعه متونی هست که سوزان سوتناک بین سال‌های ۲۶۹۱ تا ۵۶۹۱ در مواجه با دنیای مدرن بیش روش قلمی کرده. کتابی که توش هم از ادبیات حرف زده، هم از نمایش و رابطه‌ش با ادبیات نمایشی، هم از سینما و هم از هنرهای تجسمی. تنها حلقه‌ی وصل این اسی‌ها شاید نگاه فرمالیستی نویسنده به این پدیده‌ها باشه که وجه تئوریکش رو توی اولین متن کتاب بسط داده.
            اما فارغ از این مسأله وقتی این مجموعه رو می‌خونی[حتی بخش‌های مربوط به تحلیل اجرای خاص یک گروه نمایشی از یه نمایشنامه و مقایسه اون با اجراهای دیگه که مخاطبین اصلیش خواننده‌های هم‌عصر نویسنده هستن] دنیایی جلوت ترسیم میشه هم از نمایش و رابطه‌ش با ادبیات نمایشی، هم از سینما و هم '
            />
        </div>

        <Footer />
    </div>
  )
}

export default Book