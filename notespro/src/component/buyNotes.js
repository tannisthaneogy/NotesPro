import React from 'react'
import './buyNotes.css'
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
    </div>
    </div>
  )
}

export default BuyNotes
