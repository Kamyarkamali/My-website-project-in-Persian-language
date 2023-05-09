import React, { useEffect, useState ,useContext} from 'react';
import {Link} from "react-router-dom";

//Icons
import HomeIcon from '@mui/icons-material/Home';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import MenuIcon from '@mui/icons-material/Menu';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CloseIcon from '@mui/icons-material/Close';
import RandomText from "../RandomText/RandomText";
import image1 from "../assets/kamyar.jpg";
import { DarkModeContext } from '../Context/darkModeAction';



///Styled
import "./Headre.css";

function Headere() {
  const [show,setShow]=useState(false);

  const { toggle } = useContext(DarkModeContext);

  const shoHandeler=()=>{
    setShow(!show)
  }

 

  useEffect(()=>{
    document.title="کامیار کمالی کمازانی"
  },[])



  return (
    <React.Fragment>
    <div className="headercontainer">
      <div className='darkmode'>
    <NightlightRoundIcon className='icondark' onClick={toggle}/>
      </div>
      <h2>به سایت من خوش آمدید</h2>
      <div className='text1'>
      <RandomText/>
      </div>
      <div className='hambirger'>
        {!show ?<div className="itemhamburger">
        <CloseIcon fontSize='large' className='icon'/>
          <ul>
            <li><Link to={"/"}>صفحه اصلی</Link></li>
            <li><Link to={"/"}>درباره من</Link></li>
            <li><Link to={"/"}>مهارت های من</Link></li>
            <li><Link to={"/"}>صفحه اصلی</Link></li>
            <li><Link to={"/"}>پروژه های انجام شده</Link></li>
            <li><Link to={"/"}>ارتباط با من</Link></li>
          </ul>
        </div> : <MenuIcon fontSize='large' onClick={shoHandeler} className='icon'/>}
      </div>
      
      <div className='list'>
        <ul>
          <div>
            <HomeIcon className='icon'/>
          <li><Link to={"/"}>صفحه اصلی </Link></li> 
          </div>
          <div>
            <FindReplaceIcon className='icon'/>
          <li><Link to={"/"}>درباره من</Link></li>
          </div>
          <div>
            <AccessibilityNewIcon className='icon'/>
          <li><Link to={"/"}>مهارت های من</Link></li>
          </div>
          <div>
          <AssignmentTurnedInIcon className='icon'/>
          <li><Link to={"/"}>پروژه های انجام شده</Link></li>
          </div>
          <div>
          <ConnectWithoutContactIcon className='icon'/>
          <li><Link to={"/"}>ارتباط با من</Link></li>
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
    </React.Fragment>
  )
}

export default Headere