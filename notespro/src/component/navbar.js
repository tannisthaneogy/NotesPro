import React,{ useState , useEffect} from 'react'
import './navbar.css'
import { signOut } from "firebase/auth";
import {auth,provider,} from './config'
import axios from "axios";
import signimg from '../images/signup_img.png'
import { Link as Rlink, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

import {
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
function Navbar2() {
  
    const [value,setValue]=useState('');
    const [user, setUser] = React.useState("");
    
    const [cookies, setCookie] = useCookies("");
    //var imageURL ="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg";
    const navigate = useNavigate();
    const handleClick=()=>{
      signInWithPopup(auth,provider)
      .then(async (result) => {
        //imageURL=result.user.photoURL;
        //console.log(result.user.photoURL); 
        //console.log(result.user);
      setValue(result.user.email)
        var token=result.user.accessToken;
        console.log(token)
        setCookie('accessToken',token);
        // try{
        //   const {data}=await axios.post('')
        //   {result.user};
        //   if(data.isPresent)
        //   navigate('/workspace')
        //   else
        // navigate('/register')
        // }
        // catch (err) {
        //   console.log(err);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
    }
   const handleOut=()=> signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });

    /*useEffect(()=>{
      setValue(localStorage.getItem('email'))
    });*/
   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) setUser(user);
        else setUser(null);
      });
    }, [user]);
  return (
    <div>
   
    <div className='bar'>
      <div className='navhead'>
      <div class='icn'>
      <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="11.687" y="-1" width="17.9423" height="17.9423" rx="3" transform="rotate(45 11.687 -1)" fill="#AEE86D"/>
      </svg>
      </div>
      <span>Notespro</span></div>
<div className=''>
{user?(<img className="signup-img" src={user.photoURL} alt="user"></img>):<img className="signup-img" src="https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg" alt="user"></img>}
{user?
  (<div className='userDetails'>
  <h3>Hello,</h3>
<h4>{user.displayName}</h4></div>):(
<button className='signup-btn'onClick={handleClick}>
     <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.1745 7.9077C16.8484 7.87962 18.466 8.51257 19.6762 9.66929L23.0534 6.29212C20.9221 4.29005 18.0985 3.19074 15.1745 3.22464C12.9912 3.22373 10.8507 3.83007 8.99229 4.97588C7.13384 6.12168 5.63069 7.76179 4.65088 9.71286L8.58503 12.7627C9.03748 11.3658 9.91664 10.1461 11.0987 9.27512C12.2808 8.40418 13.7063 7.92593 15.1745 7.9077Z" fill="#EA4335"/>
<path d="M4.65081 9.71286C3.8276 11.3537 3.39893 13.1642 3.39893 15C3.39893 16.8358 3.8276 18.6462 4.65081 20.2871L8.58495 17.2373C8.09263 15.7864 8.09263 14.2136 8.58495 12.7627L4.65198 9.71286H4.65081Z" fill="#FBBC05"/>
<path d="M19.1615 20.9678C18.2511 21.5522 17.2192 21.9209 16.1446 22.0459C15.0701 22.1709 13.9811 22.0488 12.9609 21.689C11.9407 21.3291 11.0161 20.741 10.2577 19.9696C9.49932 19.1981 8.92715 18.2636 8.58483 17.2373L4.65186 20.2872C5.63149 22.2379 7.13427 23.8777 8.99226 25.0235C10.8503 26.1693 12.9903 26.7758 15.1731 26.7754C18.0396 26.853 20.8274 25.8323 22.9661 23.9222L19.1603 20.9678H19.1615Z" fill="#34A853"/>
<path d="M26.2648 12.8593H15.1748V17.414H21.5123C21.3811 18.1344 21.1052 18.8208 20.7012 19.4317C20.2972 20.0425 19.7736 20.5651 19.1619 20.9678L19.1502 20.9748L19.1619 20.9678L22.9677 23.9234C24.1267 22.8072 25.0381 21.46 25.643 19.969C26.2479 18.4781 26.5328 16.8766 26.4792 15.2685C26.4792 14.4595 26.4085 13.6541 26.2648 12.8593Z" fill="#4285F4"/>
</svg>
     <div className='texts'>Signup</div></button>)} 
</div>
      
<div className='navbar'>
<div className='comp-container'>
<div className='comp'>
<div className=''>
<svg  width="24" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2.05V13H21.95C21.449 18.053 17.185 22 12 22C6.477 22 2 17.523 2 12C2 6.815 5.947 2.551 11 2.05ZM13 0.542999C18.553 1.02 22.979 5.447 23.457 11H13V0.542999Z" fill="#616161"/>
</svg></div>
<h3>Workspace</h3>
</div>

<div className='comp'>
<div className=''>
<svg  width="24" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM2 4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H18C18.55 17 19 16.55 19 16C19 15.45 18.55 15 18 15H7L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.9643 5.32843 21.0075 5.15747 21.0054 4.98406C21.0034 4.81064 20.956 4.64077 20.8681 4.49126C20.7803 4.34175 20.6549 4.21778 20.5043 4.13162C20.3538 4.04546 20.1834 4.00009 20.01 4H5.21L4.54 2.57C4.45963 2.39931 4.3323 2.25504 4.17291 2.15409C4.01352 2.05315 3.82867 1.9997 3.64 2H2C1.45 2 1 2.45 1 3C1 3.55 1.45 4 2 4ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="#616161"/>
</svg></div>
<h3>Store</h3>
</div>
<div className='comp'>
<div className=''>
<svg  width="24" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 20C4.45 20 3.979 19.8043 3.587 19.413C3.19567 19.021 3 18.55 3 18V4C3 3.45 3.19567 2.979 3.587 2.587C3.979 2.19567 4.45 2 5 2H19C19.55 2 20.021 2.19567 20.413 2.587C20.8043 2.979 21 3.45 21 4V9.675C20.5333 9.44167 20.046 9.27067 19.538 9.162C19.0293 9.054 18.5167 9 18 9C17.5167 9 17.0583 9.04567 16.625 9.137C16.1917 9.229 15.7667 9.35833 15.35 9.525C15.4 9.35833 15.4377 9.19167 15.463 9.025C15.4877 8.85833 15.5 8.68333 15.5 8.5C15.5 7.53333 15.1583 6.70833 14.475 6.025C13.7917 5.34167 12.9667 5 12 5C11.0333 5 10.2083 5.34167 9.525 6.025C8.84167 6.70833 8.5 7.53333 8.5 8.5C8.5 9.46667 8.84167 10.2917 9.525 10.975C10.2083 11.6583 11.0333 12 12 12H12.25C12.0333 12.3 11.846 12.6207 11.688 12.962C11.5293 13.304 11.3917 13.6583 11.275 14.025C10.0417 14.1083 8.896 14.4 7.838 14.9C6.77933 15.4 5.83333 16.05 5 16.85V18H11.3C11.4167 18.3667 11.55 18.7167 11.7 19.05C11.85 19.3833 12.0333 19.7 12.25 20H5ZM17 21L16.7 19.5C16.5 19.4167 16.3127 19.3293 16.138 19.238C15.9627 19.146 15.7833 19.0333 15.6 18.9L14.15 19.35L13.15 17.65L14.3 16.65C14.2667 16.4167 14.25 16.2 14.25 16C14.25 15.8 14.2667 15.5833 14.3 15.35L13.15 14.35L14.15 12.65L15.6 13.1C15.7833 12.9667 15.9627 12.854 16.138 12.762C16.3127 12.6707 16.5 12.5833 16.7 12.5L17 11H19L19.3 12.5C19.5 12.5833 19.6877 12.675 19.863 12.775C20.0377 12.875 20.2167 13 20.4 13.15L21.85 12.65L22.85 14.4L21.7 15.4C21.7333 15.6 21.75 15.8083 21.75 16.025C21.75 16.2417 21.7333 16.45 21.7 16.65L22.85 17.65L21.85 19.35L20.4 18.9C20.2167 19.0333 20.0377 19.146 19.863 19.238C19.6877 19.3293 19.5 19.4167 19.3 19.5L19 21H17ZM18 18C18.55 18 19.021 17.8043 19.413 17.413C19.8043 17.021 20 16.55 20 16C20 15.45 19.8043 14.979 19.413 14.587C19.021 14.1957 18.55 14 18 14C17.45 14 16.979 14.1957 16.587 14.587C16.1957 14.979 16 15.45 16 16C16 16.55 16.1957 17.021 16.587 17.413C16.979 17.8043 17.45 18 18 18Z" fill="#616161"/>
</svg></div>
<h3>Profile</h3>
</div>
</div>
 <button onClick={handleOut}>Logout</button>
      </div>
      </div>
      </div>
  )
}

export default Navbar2