import React,{useState} from 'react'
import Subject from './subject'

import "./scrollbar.css"
function Workspace() {
    const[add,setAdd]=useState([]);
  return (
    <div>
    
    
    <div className="container container-div">
      <div className='add-btn'>
      <button type='button' onClick={()=>setAdd([...add, <Subject/>])}>Add Subject</button> 
      <div className='msg'>
      {
        add.map( e =>
          <div className='demo-cont' >{ e }</div>
        )}
       </div>
       </div>
       </div>
       </div>
       
  )
}

export default Workspace
