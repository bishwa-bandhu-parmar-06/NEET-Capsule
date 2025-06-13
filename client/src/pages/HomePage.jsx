import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Section Imports
import HeroSection from "../components/HomeSections/HeroSection";
import FeaturesSection from "../components/HomeSections/FeaturesSection";
import MentorshipSection from "../components/HomeSections/MentorshipSection";
import TestimonialsSection from "../components/HomeSections/Testimonial";
import SuccessStories from "../components/HomeSections/SuccessStories";
import BatchCountdown from "../components/HomeSections/BatchCountdown";
import ChallengeComponent from "../components/HomeSections/NeetChallenge";
import TopperRoutine from "../components/HomeSections/DailyRoutine";
import MentorsPage from "../components/HomeSections/MentorsPage";
import PlansPage from "../components/HomeSections/PlansPage";

const HomePage = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  // Ref and Scroll Progress for Mentorship Section
  const mentorshipRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mentorshipRef,
    offset: ["start end", "end start"],
  });

  // In-view detection for Hero and Features Sections
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Trigger animation when features section comes into view
  useEffect(() => {
    if (featuresInView) {
      controls.start("visible");
    }
  }, [featuresInView, controls]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-12">
      <div ref={heroRef}>
        <HeroSection inView={heroInView} />
      </div>

      <div ref={featuresRef}>
        <FeaturesSection controls={controls} />
      </div>

      <div ref={mentorshipRef}>
        <MentorshipSection scrollYProgress={scrollYProgress} />
      </div>

      <TestimonialsSection />
      <BatchCountdown />
      <ChallengeComponent />
      <TopperRoutine />
      <SuccessStories />
      <MentorsPage />
      <PlansPage />
    </div>
  );
};

export default HomePage;
