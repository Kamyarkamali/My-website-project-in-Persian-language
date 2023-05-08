import React, { useState } from 'react';
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



///Styled
import "./Headre.css";

function Headere() {
  const [show,setShow]=useState(false);

  const shoHandeler=()=>{
    setShow(!show)
  }

  return (
    <div className='headercontainer'>
      <h2>به سایت من خوش آمدید</h2>
      <RandomText/>
      <div className='hambirger'>
        {!show ?<div className="itemhamburger">
        <CloseIcon fontSize='large' className='icon'onClick={shoHandeler}/>
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
        <NightlightRoundIcon/>
      </div>
      </div>
      
    </div>
  )
}

export default Headere