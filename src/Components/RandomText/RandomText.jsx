import React from 'react';
import Typewriter from 'typewriter-effect';

function RandomText() {
  return (
    <div>
      <Typewriter
        options={{
          strings: ["برنامه نویسی فرانت اند","طراحی سایت","برنامه نویسی سایت","جاوا اسکریپت","ری اکت","ریداکس"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default RandomText;