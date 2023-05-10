import React,{useEffect} from 'react';
import "./Skills.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

//Data
import data from '../data';


function Skills() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='div'>
        <span>مهارت های من</span>
    <div className='slillscontainer' data-aos="fade-down">
       {data.map((item)=>(
           <div key={item.id} className='containerimage'>
            <img src={item.src} alt={item.name} />
            <div>
            <span className='span'>{item.name}</span>
            </div>
            <span style={{color:"red",fontWeight:"bold"}} className='important'>{item.title}</span>
        </div>
       ))}
    </div>
            </div>
  )
}

export default Skills