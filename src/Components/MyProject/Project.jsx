import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
//Styled
import "./Project.css";

//data
import dataProject from "./dataProject";

function Project() {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

  return (
    <div className='h1'>
        <span>پروژه های من</span>
    <div className='projectcontainer'>
        {dataProject.map((item)=>(
            <div key={item.id} className='project' data-aos="fade-down">
                <img src={item.image} alt={item.name} />
                <div className='titlee'>
                    <span>{item.name}</span>
                    <a href={item.url}>بازدید</a>
                </div>
            </div>
        ))}
    </div>
                </div>
  )
}

export default Project