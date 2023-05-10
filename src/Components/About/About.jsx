import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

//styled
import "./About.css";

//Resumeh
import resumeh from "../../../public/kamyar_kamali.pdf";

//icons
import BadgeIcon from '@mui/icons-material/Badge';
import RoomIcon from '@mui/icons-material/Room';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
//image
import image1 from "../assets/kamyar.jpg";

function Abou() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='containerAbout' data-aos="fade-down">
      <h2>درباره من</h2>
      <div className='text'>
        <span>برنامه نویس فرانت اند و طراح سایت</span>
      </div>
      <div className="detailse">
        <img src={image1} alt='kamyar'/>
        <div className="detailseabout">
          <div className='download'>
     <span>
      <div className='download-resumeh'>
     <a href={resumeh} download={true} name="download-link"> <FileDownloadIcon/>دانلود رزومه فعلی با فرمت PDF</a>
     
      </div>
      </span>   
          </div>
          <div className='title'>
          <BadgeIcon className='icon'/>
        <span>کامیار کمالی کمازانی</span>
          </div>
        <div className="title">
        <RoomIcon className='icon'/>
        <span>ساکن غرب تهران</span>
        </div>
        <div className="title">
        <ContactMailIcon className='icon'/>
        <span>وضعیت سربازی:معافیت (کفالت)</span>
        </div>
        <p style={{color:"red"}}>چی شد که به برنامه نویسی علاقه پیدا کردم؟:</p>

        <div className='about'>
          <p>از کودکی علاقه خاصی به کامپیوتر و اینترنت داشتم اما نشد به دنبال علاقم برم, به دانشگاه رفتم و برخلاف علاقم حسابداری خواندم</p>
          <p>در اواسط دانشگاه چند بار قصد انصراف از دانشگاه رو داشتم اما بخاطره صرف هزینه زمانی و مالی که انجام داده بودم دانشگاه رو به اتمام رساندم</p>
          <p style={{color:"red"}}>موقعیت های کاری:</p>
          <p>بعد از اتمام دانشگاه در شرکت 5040 در قسمت حسابداری و در سمت کمک حسابداری مشغول به کار شدم و حدود 6 ماه بعد به دلایلی از مجموعه جدا شدم</p>
          <p>به مدت یک سال سرپرست خزانه داری مرکزی هایپر استار بودم تیمی خوب,صمیمی و دوستانی خوب در محل کار داشتم اما همیشه به خودم میگفتم این کار مورد نظر من نیست</p>
          <p style={{color:"green",fontWeight:"bold"}}>روش آشنایی با برنامه نویسی:</p>
          <p>یک روز کاری در شرکت <span style={{color:"red"}}>دیجی کالا</span>داشتم و کاملا اتفاقی با چندتا از برنامه نویس هاشون هم صحبت شدم و جرقه برنامه نویسی در ذهنم زده شد و علاقه کودکیم به کامپیوتر نمایان شد</p>
          <p style={{color:"red"}}>شروع فعالیت من:</p>
          <p>در ابتدای کار بررسی های لازم بین فرانت و بک اند رو انجام دادم و علاقه خودم رو در سمت فرانت دیدم و شروع به آموزش کردم,سخت بود ولی لذت بخش</p>
          <p style={{color:"red"}}>منابع من در یادگیری:</p>
          <p>1-یوتیوب</p>
          <p>2-گوگل</p>
          <p>3-دوره ای که خریداری کردم</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Abou