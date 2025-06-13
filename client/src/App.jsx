import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// importing Components
import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import WhatsAppButton from './components/WhatsAppButton'

// importing Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import ContactPage from './pages/ContactPage'
import ServicesPage from './pages/ServicesPage'
import AuthPage from './pages/AuthPage'
import MentorPage from './pages/MentorsPage'
import FreeSessionPage from './pages/FreeSessionPage'
import MentorshipPlanPage from './pages/MentorshipPlanPage'
import MentorsPage from './pages/MentorsPage'
import BlogsPage from './pages/BlogsPage'
import FaqPage from './pages/FaqPage'
import TeamPage from './pages/TeamPage'
import TermsPage from './pages/TermsPage'
import PrivacyPage from './pages/PrivacyPage'

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'
 
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/mentorRegister" element={<MentorPage />} />
            <Route path="/freeSession" element={<FreeSessionPage />} />
            <Route path="/mentorship-plan" element={<MentorshipPlanPage />} />
            <Route path="/mentors" element={<MentorsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton /> 
      </Router>
    </div>
  )
}

export default App