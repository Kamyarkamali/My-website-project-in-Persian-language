import React, { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


///component
import Headere from './Components/Header/Headere';
import About from './Components/About/About';
import Logo from './Components/Logo/Logo';
import Skills from './Components/Skills/Skills';
import Project from './Components/MyProject/Project';
export const ThemeContext=createContext(null)



function App() {
  const [theme,setTheme]=useState("dark")

  const toggle=()=>{
      setTheme((curr)=>(curr==="light"? "dark" : "light"))
  }

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  const aboutUser=useRef(null);


  return (
        <ThemeContext.Provider value={{theme,toggle}}>
      <div className='allcontainer' id={theme} data-aos="fade-down">
      <Headere aboutUser={aboutUser}/>
      <Logo/>
      <About aboutUser={aboutUser}/>
      <Skills/>
      <Project/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
