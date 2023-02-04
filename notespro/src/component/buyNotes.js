import React from 'react'
import './buyNotes.css'
import searchpic from "../images/searchpic.jpg"
function BuyNotes() {
  return (
    <div>
    <div className='buynotes-div'>
    <div class="searchbar-container">
    <div class="search-box">
       <input type="text" class="search-input" placeholder="Search.."/>
 
       <button class="search-button">
         <i class="fas fa-search"></i>
       </button>
    </div>
 </div>
 <p className="searchbar-below-text">Search "tags"</p>
 <img src={searchpic} width="800px" className='search-pic' />
    </div>
    </div>
  )
}

export default BuyNotes
