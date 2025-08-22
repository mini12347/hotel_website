import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReservationForm from "./Components/ReservationForm";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import ServicesSection from "./Components/ServicesSection";
import ActivitiesSection from "./Components/ActivitiesSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import Footer from "./Components/Footer";
import ChambresPage from "./Components/chambres";

// Page d'accueil principale
function HomePage() {
  return (
    <div className="font-sans text-[#5C2E00] bg-[#EFE6D9]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

// Composant principal avec routage
function App() {
  return (
    <Router>
      <div className="font-sans text-[#5C2E00] bg-[#EFE6D9] min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chambres" element={<ChambresPage />} />
          <Route path="/reservation" element={<ReservationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;