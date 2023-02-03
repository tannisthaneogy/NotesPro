import React, { useState } from "react"
import "./Registration.css"
import axios from 'axios'
import regpic from '../images/regpic.png'

function Registration({user}){
    const [info,setInfo]=useState({
        name:"",
        phoneno:"",
        gender: "",
        qualification: "",
        email:"",
    });
    const [response, setResponse] = useState();
    let submit= async (e) => {
        /*const config = {
            headers: {
              "Content-Type": "application/json",
              // "token":`${user.accessToken}`
              Authorization: `${user.accessToken}`,
            },
          };*/
        e.preventDefault();
       try{
        axios.post("https://424f-202-142-106-167.in.ngrok.io/echo",{
            name:info.name,
            gender:info.gender,
            phoneno:info.phoneno,
            qualification:info.qualification,
            
        }/*,config*/)
        .then(response=>{
            setResponse(response.data);
            console.log(response.data);

        })}catch (err) {
            console.log(err);
          }
    }
    function handle(e){
 const newdata={...info}
 newdata[e.target.id]=e.target.value
 setInfo(newdata)
 /*console.log(newdata)*/
    }

    return(
        <div className="white-box">
           <div className="signup-content">
           <form onSubmit={(e)=>{submit(e)}}>
           <div className="signup-form">  
        <div className="form-group">
        <label for="name"> Name</label>
    <input type="text" onChange={(e)=>handle(e)} value={info.name} id="name" name="name" placeholder="Your name"/>
    <label for="gender"> Gender</label>
    <select id="gender" name="gender" onChange={(e)=>{handle(e)}} value={info.gender}>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="non-binary">Non-binary</option>
    <option value="other">Others</option>
  </select>
  <label for="phone">Phone Number</label>
       <input type="text" name="phoneno" id="phoneno" onChange={(e)=>handle(e)} value={info.phoneno} placeholder="Your number"/>
        <label for="course">Highest Qualification</label>
        <select  name="course" onChange={(e)=>{handle(e)}} id="qualification" value={info.qualification}>
        <option value="middle school">Middle School</option>
        <option value="high school" >High School</option>
        <option value="college">College/University Student</option><br/>
    </select>
        </div>
        <div ><button className="submit-btn">SUBMIT</button>
        </div>
           </div>
           </form>
           </div>
        <img className="reg-image" src={regpic} alt="register-pic" />
        </div>
    )
}

export default Registration