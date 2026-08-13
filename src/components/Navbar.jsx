"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contactMe" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black shadow-lg shadow-purple-900/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          
          {/* Left: Logo & Text */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-yellow-500/40 rounded-full blur-md"></div>
              {/* SURGICAL FIX: Changed ./ to / for Next.js public folder path */}
              <img 
                src="/userAsset/gif.jpg" 
                alt="Profile" 
                className="relative w-10 h-10 rounded-full object-cover border border-white/20"
              />
            </div>
            <a 
              href="#hero" 
              className="text-[17px] font-medium text-gray-200 hover:text-white transition-colors underline decoration-white/40 underline-offset-4"
            >
              Subhasmita Sahoo
            </a>
          </div>

          {/* Center: Pill-shaped Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center mx-4 xl:mx-8">
            <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-6 py-2.5 flex space-x-6 xl:space-x-8 shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white text-[14px] xl:text-[15px] font-medium transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Social Icons & Mobile Menu Toggle */}
          <div className="flex items-center space-x-6">
            
            {/* SURGICAL FIX: Replaced FontAwesome <i> tags with inline SVGs */}
            <div className="hidden md:flex items-center space-x-5 text-gray-300">
              <a href="https://github.com/subhasmita-puja" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.15rem] h-[1.15rem]" title="GitHub Profile">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/subhasmita-sahoo-puja/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.15rem] h-[1.15rem]" title="LinkedIn Profile">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="https://web.telegram.org/k/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.15rem] h-[1.15rem]" title="Telegram Channel">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
                </svg>
              </a>
            </div>

            {/* Mobile Menu Hamburger Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-fuchsia-400 focus:outline-none transition-colors p-2"
                aria-label="Toggle Mobile Menu"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-fuchsia-900/30 overflow-hidden"
          >
            <ul className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-fuchsia-600/30 hover:to-purple-500/30 transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              
              {/* Mobile Social Links with SVGs */}
              <li className="flex space-x-6 px-3 pt-4 border-t border-white/10 mt-2 md:hidden">
                <a href="https://github.com/subhasmita-puja" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/subhasmita-sahoo-puja/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </a>
                <a href="https://web.telegram.org/k/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path></svg>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}