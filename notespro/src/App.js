import './App.css'
import React from 'react';
import Navbar from './component/navbar';
import Registration from './component/Registration'
import TestUpload from './component/TestUpload';
import Test from './component/test'
import TopElement from './component/TopElement'
import AddNoteBtn from './component/AddNoteBtn'
import Notes from './component/Notes';
import BuyNotes from './component/buyNotes';
import Landing from './component/landing'
import Profile from './component/profile'
import {  Route, Routes,Navigate } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <TopElement/>
      <Navbar/>
      
      
      <Routes>
      <Route path="/"  element={<Landing/>} />
        <Route path="/register"  element={<Registration/>} />
        <Route path="/workspace"  element={<AddNoteBtn/>} />
        <Route path="/profile"  element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;