import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Flavours from "./Flavours";
import Contact from "./Contact";
import FaqSection from "./FaqSection";
import Home from "./Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/flavours" element={<Flavours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FaqSection />} />
      </Routes>
    </Router>
  );
}

export default App;
