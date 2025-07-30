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
import FAQ from "./components/views/FAQ";
import TermsOfService from "./components/views/TermsOfUse";
import CookiePolicy from "./components/views/CookiePolicyFile";
import PrivacyPolicy from "./components/views/PrivacyPolicyFile";
import NotFound from "./components/views/NotFound";

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
                <Route path="/faq" element={<FAQ />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/cookies" element={<CookiePolicy />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="*" element={<NotFound />} />
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