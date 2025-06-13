import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaSignInAlt,
  FaChalkboardTeacher,
  FaServicestack,
} from "react-icons/fa";

// importing images as icons
import aboutusImg from "../assets/sidebar/about-us.svg";
import becomeAMentorImg from "../assets/sidebar/become-a-mentor.svg";
import blogsImg from "../assets/sidebar/blogs.svg";
import contactUsImg from "../assets/sidebar/contactUs.svg";
import FAQImg from "../assets/sidebar/FAQ.svg";
import mentorshipPlanImg from "../assets/sidebar/mentorship-plan.svg";
import ourTeamImg from "../assets/sidebar/our-team.svg";
import ourMentorsImg from "../assets/sidebar/ourmentors.svg";
import privacyPolicyImg from "../assets/sidebar/privacyPolicy.svg";
import termsConditionImg from "../assets/sidebar/terms-condition.svg";

const SideMenu = () => {
  const location = useLocation();

  // Check if the current path matches the link path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <ul className="space-y-4 text-lg">
      <li>
        <Link
          to="/"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <FaHome
            className={`w-5 h-5 ${
              isActive("/") ? "text-[#da935f]" : "text-[#da935f]"
            }`}
          />
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/auth"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/auth") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <FaSignInAlt
            className={`w-5 h-5 ${
              isActive("/auth") ? "text-[#da935f]" : "text-[#da935f]"
            }`}
          />
          Login / Signup
        </Link>
      </li>
      <li>
        <Link
          to="/freeSession"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/freeSession") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <FaChalkboardTeacher
            className={`w-5 h-5 ${
              isActive("/freeSession") ? "text-[#da935f]" : "text-[#da935f]"
            }`}
          />
          Book a Free Session
        </Link>
      </li>
      <li>
        <Link
          to="/mentors"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/mentors") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <img
            src={ourMentorsImg}
            alt="Mentors"
            className={`w-5 h-5 ${
              isActive("/mentors") ? "opacity-100" : "opacity-90"
            }`}
          />
          Our Mentors
        </Link>
      </li>
      <li>
        <Link
          to="/mentorship-plan"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/mentorship-plan") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <img
            src={mentorshipPlanImg}
            alt="Mentorship Plan"
            className={`w-5 h-5 ${
              isActive("/mentorship-plan") ? "opacity-100" : "opacity-90"
            }`}
          />
          Mentorship Plan
        </Link>
      </li>
      <li>
        <Link
          to="/blogs"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/blogs") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <img
            src={blogsImg}
            alt="Blogs"
            className={`w-5 h-5 ${
              isActive("/blogs") ? "opacity-100" : "opacity-90"
            }`}
          />
          Blogs
        </Link>
      </li>
      <li>
        <Link
          to="/mentorRegister"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/mentorRegister") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <img
            src={becomeAMentorImg}
            alt="Become a Mentor"
            className={`w-5 h-5 ${
              isActive("/mentorRegister") ? "opacity-100" : "opacity-90"
            }`}
          />
          Become a Mentor
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/about") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <img
            src={aboutusImg}
            alt="About Us"
            className={`w-5 h-5 ${
              isActive("/about") ? "opacity-100" : "opacity-90"
            }`}
          />
          About Us
        </Link>
      </li>
      <li>
        <Link
          to="/team"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/team") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <img
            src={ourTeamImg}
            alt="Our Team"
            className={`w-5 h-5 ${
              isActive("/team") ? "opacity-100" : "opacity-90"
            }`}
          />
          Our Team
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/contact") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <img
            src={contactUsImg}
            alt="Contact"
            className={`w-5 h-5 ${
              isActive("/contact") ? "opacity-100" : "opacity-90"
            }`}
          />
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/services") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <FaServicestack
            className={`w-5 h-5 ${
              isActive("/services") ? "text-[#da935f]" : "text-[#da935f]"
            }`}
          />
          Services
        </Link>
      </li>
      <li>
        <Link
          to="/faq"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/faq") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <img
            src={FAQImg}
            alt="FAQ"
            className={`w-5 h-5 ${
              isActive("/faq") ? "opacity-100" : "opacity-90"
            }`}
          />
          FAQ's
        </Link>
      </li>
      <li>
        <Link
          to="/terms"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/terms") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <img
            src={termsConditionImg}
            alt="Terms"
            className={`w-5 h-5 ${
              isActive("/terms") ? "opacity-100" : "opacity-90"
            }`}
          />
          Terms & Conditions
        </Link>
      </li>
      <li>
        <Link
          to="/privacy"
          className={`flex items-center gap-3 transition-transform duration-300 hover:scale-105 ${
            isActive("/privacy") ? "text-[#da935f] font-medium" : ""
          }`}
        >
          <img
            src={privacyPolicyImg}
            alt="Privacy"
            className={`w-5 h-5 ${
              isActive("/privacy") ? "opacity-100" : "opacity-90"
            }`}
          />
          Privacy Policy
        </Link>
      </li>
    </ul>
  );
};

export default SideMenu;
