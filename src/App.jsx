import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Downloads from "./components/Downloads/Downloads";
import Faqs from "./components/Faqs/Faqs";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  
  return (
    <main className="outer-container">
      <div className="inner-container">
        <Navbar />
        <Hero />
        <Features />
        <Downloads />
        <Faqs />
        <CTA />

        <Footer />
      </div>
    </main>
  );
}

export default App;
