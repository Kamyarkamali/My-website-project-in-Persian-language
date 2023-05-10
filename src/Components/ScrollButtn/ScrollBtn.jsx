import React, { useEffect, useState } from 'react'

//Styled
import "./ScrollBtn.css";

//Icon
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function ScrollBtn() {
    const [showBtn,setShowBtn]=useState(false);

    const handeleScroll=()=>{
        if(window.scrollY>100){
            setShowBtn(true)
        } else{
            setShowBtn(false)
        }
    }

    const handeleClick=()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }

    useEffect(()=>{
        window.addEventListener("scroll",handeleScroll)
        return ()=>{
            window.removeEventListener("scroll",handeleScroll)
        }
    },[])

  return (
    <div className='btn'>
        <button onClick={handeleClick} style={{display:showBtn ? "block": "none"}}>
            <ArrowUpwardIcon/>
        </button>
    </div>
  )
}

export default ScrollBtn;