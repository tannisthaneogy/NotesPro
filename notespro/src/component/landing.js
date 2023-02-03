import React from 'react'
import hero from '../images/hero.png'

import "./landing.css"


function Landing() {
  return (
    <div>
    <div className="white-box">
    <div className='elements'>
    <img src={hero} className="hero-pic" alt="hero-pic" />
    <div className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel elit eu nulla placerat luctus ac at nisl. Mauris rutrum libero convallis consectetur scelerisque. Phasellus vel sodales ipsum. Praesent dolor nulla, facilisis vitae faucibus vitae, 
    blandit sit amet sapien. Donec vitae pellentesque velit, eu aliquam mi. Pellentesque interdum ligula sed dolor molestie, eleifend venenatis purus finibus. Vivamus mattis dolor nec augue ullamcorper, quis cursus nunc molestie.</div>
   
    </div>
    
    </div>
    
    </div>
  )
}

export default Landing
