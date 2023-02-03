import './App.css'
import React from 'react';
import Navbar from './components/navbar'
import TopElement from './components/TopElement';
import Registration from './components/Registration';
import {  Route, Routes,Navigate } from "react-router-dom";
import AddNoteBtn from './components/AddNoteBtn';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestUpload from "./components/TestUpload"

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <TopElement/>
      <Routes>
        <Route path="/register"  element={<Registration/>} />
        
      </Routes>
    </div>
  );
}

export default App;