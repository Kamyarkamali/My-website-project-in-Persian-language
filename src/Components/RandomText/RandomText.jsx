import React from 'react';
import Typewriter from 'typewriter-effect';
import "./RandomText.css";

function RandomText() {
  return (
    <div className='containertext'>
      <Typewriter
        options={{
          strings: ["برنامه نویسی فرانت اند","طراحی سایت"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default RandomText;