import React from 'react'
import "./Profile.css"

function Profile() {
  return (
    <div className='white-box'>
      <div className="profile-container">
      <div className="profile-form-container">
        <div className="second-form-container">
        <h1>User Details</h1>
        <div className="line"></div>
        <label htmlFor="name">Name</label><br />
        <input type="text" id='name' name='name' placeholder='Full Name'/><br />
        <label htmlFor="phone">Phone Number</label><br />
        <input type="text" name="phoneno" id="phoneno" placeholder='Number'/><br />
        <label htmlFor="email">Email</label><br />
        <input type="email" name="email" id="email" placeholder='Email'/><br />
        <label htmlFor="course">Current Course</label><br />
        <input type="text" name='course' id='course' placeholder='Current Course'/>
        <div className="profile-btn-container">
        <button className='profile-green-btn'>Submit</button>
        <button className='profile-green-btn'>Reset</button>
        </div>
        </div>
      </div>
      <div className="profile-img-container"></div>
      </div>
      </div>
  )
}

export default Profile
