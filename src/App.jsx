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
    <div className="bg-transparent min-h-screen text-white overflow-x-hidden relative">
      {/* Global Background Video (z-0) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video-element fixed inset-0 w-screen h-screen object-cover z-0 pointer-events-none opacity-85"
      >
        <source src="/brij-bhoomi-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Global Dark Mask Overlay (z-10) */}
      <div className="fixed inset-0 bg-black/45 z-10 pointer-events-none" />

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
