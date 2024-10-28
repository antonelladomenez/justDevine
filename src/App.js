import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Flavours from "./pages/Flavours";
import Contact from "./pages/Contact";
import FaqSection from "./pages/FaqSection";
import Home from "./pages/Home";
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
