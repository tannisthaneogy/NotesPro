import React,{useState} from 'react'
import SubjectBox from './SubjectBox';
import "./SubjectBox.css"
import './scrollbar.css'
function AddNoteBtn() {
    const[add,setAdd]=useState([])
  return (
    <div className="workspace-div container-div">
    <div className=''>
      <div className="">
            <button onClick={()=>setAdd([...add,<SubjectBox/>])} className='green-btn'>+ Add Notes</button><br/>
      </div>
      
      <div className="second">
        {
            add.map( e =>
                <div>{ e }</div>
        )}
      </div>
      </div>
    </div>
  )
}

export default AddNoteBtn;