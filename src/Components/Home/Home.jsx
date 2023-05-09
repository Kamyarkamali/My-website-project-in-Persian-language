import React from 'react';
import "./Home.css";


///Components
import Headere from '../Header/Headere';
import About from '../About/About';
import Logo from '../Logo/Logo';

function Home() {

  return (
    <div>
      <Headere/>
      <Logo/>
      <About/>
    </div>
  )
}

export default Home