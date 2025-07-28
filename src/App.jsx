import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/views/Home";
import About from "./components/views/About";
import News from "./components/views/News";
import Services from "./components/views/Services";
import Contact from "./components/views/Contact";

function App() {

  return (
    <div className='app'>
      <Router>
        <div className="content">
          <div>
            <Navbar />
            <div className="main">  
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App