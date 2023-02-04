import React from 'react'
import "./Notes.css"
import submitbtn from "../images/submitbtn.png"
import {storage} from './config'
import { ref,uploadBytesResumable,getDownloadURL } from "@firebase/storage";
function Notes() {
  
 const formHandler=(e)=>{
  e.preventDefault();
 const file=e.target[0].files[0];
 console.log(file);
}
 
 const uploadFile=(file)=>{
  
if(!file)
return;
const storageRef=ref(storage,`files/${file.name}`);
const uploadTask = uploadBytesResumable(storageRef, file);
uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    console.log(progress)
 },
 (error) => {
  console.log(error);
}, 
() => {
  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    console.log('File available at', downloadURL);
  });
 }
);
 }


  return (
      <div className="note-box-yay">
      <form onSubmit={formHandler}>
        <label className="upload-label" htmlFor="file"><input type="file"/></label>
        <button className="submit-btn-upload" type='submit'><img width="25px" src={submitbtn}/></button>
        </form>
      </div>
  )
}

export default Notes