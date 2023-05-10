import React from 'react';

//Icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

//styled
import "./Footer.css";

function Fouter() {
  return (
    <div className='fottercontainer'>
        <div className="right">
            <span style={{color:"black",fontWeight:"bold"}}>از طریق این 3 شبکه اجتماعی میتوانیم باهم درتماس باشیم</span>
            <div className="icons">
            <a href='https://www.instagram.com/kamyr_02111/?next=%2F' target="_blank"><InstagramIcon fontSize='large'/></a>
            <a href="https://www.linkedin.com/in/kamyar-kamali-671a5822b/" target='_blank'><LinkedInIcon fontSize='large'/></a>
            <a href="https://github.com/Kamyarkamali" target='_blank'><GitHubIcon fontSize='large'/></a>
            </div>
            <div className='spanss'>
            <span>℗ کلیه سایت توسط اینجانب , کامیار کمالی طراحی شده است</span>
            </div>
            <div className="left">
                <div>

            <a href='#Top'>برو به اول صفحه</a>
            <KeyboardArrowUpIcon/>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Fouter