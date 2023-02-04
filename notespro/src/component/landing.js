import React from 'react'
import hero from '../images/hero.png'

import "./landing.css"


function Landing() {
  return (
    <div>
    <div className="white-box">
    <div className='elements'>
    <img src={hero} className="hero-pic" alt="hero-pic" />
    <div className='text'>Worried that your notes aren't good enough? We have got you covered. 
    Notespro is a platform that you can use to buy and sell study notes and have quick access in your very own workspace. 
    NotesPro is your closest buddy when you need those last minute notes before an exams. 
    Share notes with each other and be on the same page. 
    The best part? All these notes are stored on the cloud, going easy peasy on your local storage.</div>
   
    </div>
    
    </div>
    
    </div>
  )
}

export default Landing
