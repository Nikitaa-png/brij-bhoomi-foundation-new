import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Programs from "./components/Programs";
import WomenEmpowerment from "./components/WomenEmpowerment";
import HowYouCanHelp from "./components/HowYouCanHelp";
import Impact from "./components/Impact";
import Gallery from "./components/Gallery";
import VolunteerCTA from "./components/VolunteerCTA";
import DonationCTA from "./components/DonationCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden relative">
      
      {/* Navbar stays fixed above everything (z-50) */}
      <Navbar />

      {/* Page Content wrapper in normal vertical flow (z-20) */}
      <div className="relative z-20 w-full">
        <Hero />
        <About />
        <Mission />
        <Programs />
        <WomenEmpowerment />
        <HowYouCanHelp />
        <Impact />
        <Gallery />
        <VolunteerCTA />
        <DonationCTA />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
