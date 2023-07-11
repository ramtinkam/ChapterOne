import React, {useState} from 'react';
import './Author.css';
import Navbar from './Navbar';
import albertimg from './albertcamus.png';
import BookCard from './BookCard';
import sampleimg from './booksample.png';
import Footer from './Footer';

function Author() {
  return (
    <div className='main-author-container'>
        <Navbar />
        <div className="author-div">
            <h className="author-header">نویسندگان</h>
            <div className="author-main-info-div">
                <h className="author-name">Albert Camus</h>
                <div className="author-bio-div">
                    <p className="author-bio">
                    آلبر کامو، زاده ی ۷ نوامبر ۱۹۱۳ و درگذشته ی ۴ ژانویه ۱۹۶۰، نویسنده، فیلسوف و روزنامه نگار فرانسوی بود. او یکی از نویسندگان بزرگ قرن بیستم و خالق کتاب مشهور بیگانه است.پدرش «لوسین کامو» فرانسوی فقیری بود که در الجزیره برزگری می کرد و در آنجا با زن خدمتکاری که اهل اسپانیا بود ازدواج کرد و صاحب دو فرزند به نام های لوسین (هم نام پدر) و آلبر شد. کودکی کامو در یک زندگی فقیرانه ی طبقه ی کارگری سپری شد. او در تعطیلات تابستانی در برابر دریافت دستمزدی اندک در مغازه ها کار می کرد؛ سپس به آموختن انگلیسی پرداخت و با زبان اسپانیایی آشنا شد، ولی نتیجه ی کار مطلوب نبود. در سال ۱۹۳۰ و با دریافت دیپلم، نخستین گام را به سوی ترقی برداشت. سپس در دسامبر همان سال نخستین نشانه های ابتلاء به بیماری سل در او نمایان شد و به همین خاطر مجبور شد فوتبال را کنار بگذارد، هرچند که تا آخر عمر کوتاهش یک تماشاچی فوتبال باقی ماند.در سال ۱۹۳۵ لیسانس فلسفه را گرفت و در ماه مه سال ۱۹۳۶ پایان نامه ی خود را درباره ی فلوطین ارائه داد.کامو در ۱۹۳۴ با «سیمون هیه»، دختری جوان، ثروتمند، زیبا و البته معتاد به مرفین ازدواج کرد و دو سال بعد در اثر خیانت هایی از هر دو طرف و با تحمل «تجربه ای دردناک» از هم جدا شدند. ازدواج دوم کامو در ۱۹۴۰ بود و او با فرانسین فور، که یک پیانیست و ریاضی دان بود، ازدواج کرد.در ۱۹ دسامبر ۱۹۴۱ کامو اعدام «گابریل پری» را شاهد بود که این واقعه به قول خودش موجب متبلور شدن حس شورش علیه آلمان ها در او شد. کامو در بعداز ظهر چهارم ژانویه ۱۹۶۰ و در سن ۴۷ سالگی بر اثر سانحه ی تصادف نزدیک سن، در شهر ویل بلویل درگذشت. در جیب کت او یک بلیط قطار استفاده نشده پیدا شد، او ابتدا قرار بود با قطار و به همراه همسر و فرزندانش به سفر برود ولی در آخرین لحظات پیشنهاد دوست ناشرش را برای همراهی پذیرفت تا با خودروی او سفر کند.
                    </p>
                </div>
                <img className="author-img" src={albertimg} alt="author-image" />
            </div>

        </div>
        <div className="author-books">
            <div className="author-books-container">
                <p className="author-sortby">مرتب سازی بر اساس</p>
                <select name="sortby" id="author-sort-button">
                    <option value="popular">محبوب‌ترین‌ ها</option>
                    <option value="new">تازه‌ترین ها</option>
                    <option value="alphabet">الفبایی</option>
                </select>
                <h className="author-books-div-name">آثار آلبرکامو</h>  
            </div>
            <div className="author-books-div">
                <BookCard
                image={sampleimg}
                bookName='سقوط'
                authorName=' آلبر کامو'
                />
            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default Author