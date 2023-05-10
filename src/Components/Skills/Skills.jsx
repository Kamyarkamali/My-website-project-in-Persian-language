import React from 'react';
import "./Skills.css";

//Data
import data from '../data';


function Skills() {
  return (
    <div className='div'>
        <span>مهارت های من</span>
    <div className='slillscontainer'>
       {data.map((item)=>(
           <div className='containerimage'>
            <img src={item.src} alt={item.name} />
            <div>
            <span className='span'>{item.name}</span>
            </div>
            <span className='important'>{item.title}</span>
        </div>
       ))}
    </div>
            </div>
  )
}

export default Skills