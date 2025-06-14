import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
 
  const closeSidebar = () => setIsSidebarOpen(false);
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Become a Mentor", path: "/mentorRegister" },
    {
      label: "Book a Free Session",
      path: "/freeSession",
      button: "yellow",
    },
    {
      label: "Login",
      path: "/auth",
      button: "green",
    },
  ];

  return (
    <div className="w-full sticky top-0 left-0 z-50">
      <nav className="flex justify-center items-center py-4 md:py-8 w-full bg-white/30 backdrop-blur-md shadow-md">
        <div className="flex items-center justify-between w-full h-full px-4 md:px-6">
          {/* Logo */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="text-2xl font-bold md:ml-28 text-black">
              NeetCapsule
            </Link>
          </motion.div>

          {/* Desktop Nav Items - hidden on mobile */}
          <ul className="hidden md:flex items-center space-x-8 text-black text-lg font-semibold">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                {item.button ? (
                  <motion.div
                    animate={
                      item.label === "Book a Free Session"
                        ? {
                            scale: [1, 1.05, 1],
                            transition: {
                              duration: 2,
                              repeat: Infinity,
                              repeatType: "reverse",
                            },
                          }
                        : {}
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.path}
                      className={`relative px-4 py-2 rounded-full overflow-hidden group ${
                        item.button === "yellow"
                          ? "border-2 border-yellow-500"
                          : "border-2 border-green-500"
                      }`}
                    >
                      <span
                        className={`absolute inset-0 rounded-full ${
                          item.button === "yellow"
                            ? "bg-yellow-400"
                            : "bg-green-400"
                        } group-hover:opacity-0 transition-opacity duration-300`}
                      />
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.div>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-gray-600 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Mobile Hamburger Menu - shown only on mobile */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + navItems.length * 0.1 }}
            className="md:hidden"
          >
            <button onClick={toggleSidebar} className="cursor-pointer">
              <div className="space-y-1.5">
                <div className="w-8 h-1 bg-black"></div>
                <div className="w-8 h-1 bg-black"></div>
                <div className="w-8 h-1 bg-black"></div>
              </div>
            </button>
          </motion.div>

          {/* Desktop Hamburger Menu - shown only on desktop */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + navItems.length * 0.1 }}
            className="hidden md:block ml-4"
          >
            <button onClick={toggleSidebar} className="cursor-pointer mr-24">
              <div className="space-y-1.5">
                <div className="w-8 h-1 bg-black"></div>
                <div className="w-8 h-1 bg-black"></div>
                <div className="w-8 h-1 bg-black"></div>
              </div>
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Sidebar */}
      {/* Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ type: "tween" }}
        className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white/60 backdrop-blur-md backdrop-saturate-150 rounded-l-lg border-l border-white/20 shadow-lg z-50"
      >
        {/* Close Button */}
        <div className="absolute top-1 right-1 z-50">
          <button
            onClick={closeSidebar}
            className="text-black text-6xl cursor-pointer rounded-full px-2"
          >
            &times;
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="mt-5 px-4 h-full overflow-y-auto pb-10 relative z-40">
          <SideMenu onLinkClick={closeSidebar} />
        </div>
      </motion.div>
    
    </div>
  );
};

export default Navbar;