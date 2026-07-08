import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout            from "./components/layout/Layout";
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

// Route Protection & Login Pages
import ProtectedRoute   from "./components/common/ProtectedRoute";
import AdminLogin       from "./pages/admin/Login";
import VolunteerLogin   from "./pages/volunteer/Login";

// Admin Dashboard Components
import AdminLayout      from "./components/layout/AdminLayout";
import AdminOverview    from "./pages/admin/Overview";
import AdminPrograms    from "./pages/admin/Programs";
import AdminVolunteers  from "./pages/admin/Volunteers";
import AdminDonations   from "./pages/admin/Donations";
import AdminEvents      from "./pages/admin/Events";
import AdminGallery     from "./pages/admin/Gallery";
import AdminBlog        from "./pages/admin/Blog";
import AdminMessages     from "./pages/admin/Messages";
import AdminReports     from "./pages/admin/Reports";
import AdminSettings    from "./pages/admin/Settings";

// Volunteer Dashboard Components
import VolunteerLayout        from "./components/layout/VolunteerLayout";
import VolunteerHome          from "./pages/volunteer/Home";
import VolunteerProfile       from "./pages/volunteer/Profile";
import VolunteerActivities    from "./pages/volunteer/Activities";
import VolunteerCertificates  from "./pages/volunteer/Certificates";
import VolunteerEvents        from "./pages/volunteer/Events";
import VolunteerAnnouncements from "./pages/volunteer/Announcements";
import VolunteerContact       from "./pages/volunteer/ContactCoordinator";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website Layout wrapped routes */}
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

        {/* Dashboard Login Pages */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/volunteer/login" element={<VolunteerLogin />} />

        {/* Admin Dashboard Protected Routes */}
        <Route element={<ProtectedRoute portal="admin" />}>
          <Route path="/admin/dashboard" element={<AdminLayout />}>
            <Route index element={<AdminOverview />} />
            <Route path="programs" element={<AdminPrograms />} />
            <Route path="volunteers" element={<AdminVolunteers />} />
            <Route path="donations" element={<AdminDonations />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="news" element={<AdminBlog />} />
            <Route path="messages" element={<AdminMessages />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Route>

        {/* Volunteer Dashboard Protected Routes */}
        <Route element={<ProtectedRoute portal="volunteer" />}>
          <Route path="/volunteer/dashboard" element={<VolunteerLayout />}>
            <Route index element={<VolunteerHome />} />
            <Route path="profile" element={<VolunteerProfile />} />
            <Route path="activities" element={<VolunteerActivities />} />
            <Route path="certificates" element={<VolunteerCertificates />} />
            <Route path="events" element={<VolunteerEvents />} />
            <Route path="announcements" element={<VolunteerAnnouncements />} />
            <Route path="contact" element={<VolunteerContact />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
