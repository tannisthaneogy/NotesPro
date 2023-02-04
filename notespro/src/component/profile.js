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
        <p className="user-name">Name</p>
        <p className="user-phone">Phone</p>
        <p className="user-mail">Mail</p>
        <p className="user-cur-course">Curent Course</p>
        </div>
      </div>
      <div className="profile-img-container"></div>
      </div>
      </div>
  )
}

export default Profile