import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing '
import Weather from './components/Weather'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';
// import { useNavigate } from "react-router-dom";

const App = () => {
  //  const navigate = useNavigate();
  return (
    <>
  
 <div className="sticky top-0 z-50 bg-gray-900 text-white shadow-md">
  <Navbar />
</div>

<Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/explorer" element={<Weather/>} />
  <Route path="/about" element={<About/>} />
</Routes>      

  </>
  )
}

export default App

