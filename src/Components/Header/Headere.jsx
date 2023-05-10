import React, { useContext, useEffect, useState} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


import { Link } from 'react-router-dom';
//Icons
import HomeIcon from '@mui/icons-material/Home';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MenuIcon from '@mui/icons-material/Menu';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CloseIcon from '@mui/icons-material/Close';
import RandomText from "../RandomText/RandomText";
import image1 from "../assets/kamyar.jpg";
import ReactSwitch from "react-switch";
import { ThemeContext } from '../../App'; 

///Btn
import ScrollBtn from '../ScrollButtn/ScrollBtn';


///Styled
import "./Headre.css";

function Headere() {
  const {theme,toggle}=useContext(ThemeContext)  
  const [showMenu,setShowMenu]=useState(false)

  const showHandeler=()=>{
    setShowMenu(!showMenu)
}

  const closeMenu=()=>{
    setShowMenu(false)
  }


  const handleClickSkills = (event) => {
    
    event.preventDefault();
    const skillsSection = document.getElementById("skills");
    window.scrollTo({
      top: skillsSection.offsetTop +1220,
      behavior: "smooth",
    });
  };

  const handleProject = (event) => {
    event.preventDefault();
    const projectSection = document.getElementById("projects-section");
    const offset = 2010;
    const position = projectSection ? projectSection.offsetTop : +350;
    window.scrollTo({ top: position + offset, behavior: "smooth" });
};

const hamburgerHandel = (event) => {
  event.preventDefault();
  const projectSectionn = document.getElementById("projects-sectionss");
  const offsett = 4230;
  const positionn = projectSectionn ? projectSectionn.offsetTop : 0;
  window.scrollTo({ top: positionn + offsett, behavior: "smooth" });
};

  const handleClick = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById("about-section");
    window.scrollTo({
      top: aboutSection.offsetTop +400,
      behavior: "smooth",
    });
  };



  useEffect(()=>{
    document.title="کامیار کمالی کمازانی"
    Aos.init({duration:2000})
    
  },[])


  return (
    <div data-aos="fade-down">
      <ScrollBtn/>

    <div className="headercontainer">
      <div className='darkmode'>
    <ReactSwitch onChange={toggle} checked={theme==="dark"}/>
      </div>
      <h2>به سایت من خوش آمدید</h2>
      <div className='text1'>
      <RandomText/>
      </div>
      <div className='hambirger'>
         {showMenu ?<div className="itemhamburger">
        <CloseIcon fontSize='large' className='icon' onClick={closeMenu}/>
          <ul onClick={closeMenu}>
            <li><a href='#'>صفحه اصلی</a></li>
            <li><Link to='/about' id='about-section' onClick={handleClick}>درباره من</Link></li>
            <li><a href='skills' id="skills" onClick={handleClickSkills}>مهارت های من</a></li>
          <li><a onClick={hamburgerHandel} href='projects-sectionss' id='projects-sectionss'>پروژه های انجام شده</a></li>
            <li><a href='#'>ارتباط با من</a></li>
          </ul>
        </div> :<MenuIcon fontSize='large'  className='icon' onClick={showHandeler}/>}
      </div>
      
      <div className='list'>
        <ul>
          <div>
            <HomeIcon className='icon'/>
          <li><a href='#'>صفحه اصلی </a></li> 
          </div>
          <div>
            <FindReplaceIcon className='icon'/>
          <li><Link to='/about' id='about-section' onClick={handleClick}>درباره من</Link></li>
          </div>
          <div>
            <AccessibilityNewIcon className='icon'/>
            <div id='skills'>
          <li><a href='skills' id="skills" onClick={handleClickSkills}>مهارت های من</a></li>
            </div>
          </div>
          <div>
          <AssignmentTurnedInIcon className='icon'/>
          <li><a href='projects-section' id='projects-section' onClick={handleProject}>پروژه های انجام شده</a></li>
          </div>
          <div>
          <ConnectWithoutContactIcon className='icon'/>
          <li><a href='#'>ارتباط با من</a></li>
          </div>
        </ul>
        <div className='darkmod'>
      </div>
      </div>
      <div className="logo">
        <img src={image1} alt="kamyar" />
      </div>
      <div className='text2'>
      <RandomText/>
      </div>
    </div>
    </div>
  )
}

export default Headere