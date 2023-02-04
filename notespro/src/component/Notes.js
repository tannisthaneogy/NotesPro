import React from 'react'
import "./Notes.css"
import submitbtn from "../images/submitbtn.png"

function Notes() {

  return (
      <div className="note-box-yay">
        <label className="upload-label" htmlFor="file"><input type="file"/></label>
        <button className="submit-btn-upload" type='submit'><img width="30px" src={submitbtn}/></button>
      </div>
  )
}

export default Notes