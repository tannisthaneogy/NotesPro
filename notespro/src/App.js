import './App.css'
import React from 'react';
import Navbar from './component/navbar';
import Registration from './component/Registration'
import TestUpload from './component/TestUpload';
import Test from './component/test'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Test/>
    </div>
  );
}

export default App;