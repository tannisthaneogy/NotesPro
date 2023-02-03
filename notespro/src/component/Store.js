import React from 'react'
import storepic from "../images/storepic.png"
import "./Store.css"

function Store() {
  return (
    <div className='white-box'>
      <img src={storepic} alt="storepic" className="store-pic"/>
      <div className="store-btn-container">
        <button className='store-green-btn'>Buy Notes</button>
        <button className='store-green-btn'>Sell Notes</button>
      </div>
    </div>
  )
}

export default Store
