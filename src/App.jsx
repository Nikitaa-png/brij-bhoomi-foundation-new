import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout            from "./components/Layout";
import HomePage          from "./pages/HomePage";
import AboutPage         from "./pages/AboutPage";
import VisionMissionPage from "./pages/VisionMissionPage";
import ImpactPage        from "./pages/ImpactPage";
import ProgramsPage      from "./pages/ProgramsPage";
import DonatePage        from "./pages/DonatePage";
import VolunteerPage     from "./pages/VolunteerPage";
import CSRPage           from "./pages/CSRPage";
import EventsPage        from "./pages/EventsPage";
import GalleryPage       from "./pages/GalleryPage";
import NewsPage          from "./pages/NewsPage";
import TransparencyPage  from "./pages/TransparencyPage";
import FAQsPage          from "./pages/FAQsPage";
import ContactPage       from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage         from "./pages/TermsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index                    element={<HomePage />} />
          <Route path="/about"              element={<AboutPage />} />
          <Route path="/vision-mission"     element={<VisionMissionPage />} />
          <Route path="/impact"             element={<ImpactPage />} />
          <Route path="/programs"           element={<ProgramsPage />} />
          <Route path="/donate"             element={<DonatePage />} />
          <Route path="/volunteer"          element={<VolunteerPage />} />
          <Route path="/csr-partnership"    element={<CSRPage />} />
          <Route path="/events"             element={<EventsPage />} />
          <Route path="/gallery"            element={<GalleryPage />} />
          <Route path="/news"               element={<NewsPage />} />
          <Route path="/transparency"       element={<TransparencyPage />} />
          <Route path="/faqs"               element={<FAQsPage />} />
          <Route path="/contact"            element={<ContactPage />} />
          <Route path="/privacy-policy"     element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
