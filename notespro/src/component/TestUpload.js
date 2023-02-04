import React from 'react'
import "./TestUpload.css"
import {storage} from './config'
import { ref,uploadBytesResumable,getDownloadURL } from "@firebase/storage";
function TestUpload() {
   const formHandler=(e)=>{
      e.preventDefault();
     const file=e.target[0].files[0];
     console.log(file);
    }
    const uploadFile=(file)=>{
      if(!file)return;
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
   <div className="upload-container">
    <div class="container1">
         <div class="wrapper1">
            <div class="image1">
               {/* <img src={profile}/> */}
            </div>
            <div class="content1">
               <div class="icon1">
                  <i class="fas fa-cloud-upload-alt"></i>
               </div>
               <div class="text1">
                  No file chosen, yet!
               </div>
            </div>
            <div id="cancel-btn">
               <i class="fas fa-times"></i>
            </div>
            <div class="file-name1">
               File name here
            </div>
         </div>
         <button onclick="defaultBtnActive()" id="custom-btn">Choose a file</button>
         <input id="default-btn" type="file" hidden/>
      </div>

      <div className="upload-file-form-container">
      <form onSubmit={formHandler}>
         <label htmlFor="title"></label><br />
         <input type="text" name="title" id="title" placeholder='Title'/><br />
         <label htmlFor="desc"></label><br />
         <input type="text" name="desc" id="desc" placeholder='Description'/><br />
         <label htmlFor="tags"></label><br />
         <input type="text" name="tags" id="tags" placeholder='Tags'/><br />
         <button type="submit" className='upload-submit-btn'>SUBMIT</button></form>
      </div>
      </div>
  )
}

export default TestUpload
