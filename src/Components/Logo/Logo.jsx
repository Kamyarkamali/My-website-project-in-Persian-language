import React from 'react';

import "./Logo.css";

//Styled
import logo from "../assets/logojs.png";
import next from "../assets/next (2).jpg";

function Logo() {
  return (
    <div className='imagelogo'>
        <img src={logo} alt="js" />
        <img src={next} alt="js" />
    </div>
  )
}

export default Logo