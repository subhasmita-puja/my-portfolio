

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Guardian Angel – Safety Web App",
    image: "/photos/project-1.png",
    description:
  "Personal safety platform with real-time location, SOS alerts, AI crime reporting, and safety mapping.",
  liveLink: "https://guardian-angel-three.vercel.app/",
    githubLink: "https://github.com/subhasmita-puja/guardian-angel",
  },
  {
    id: 2,
    title: "IMAGE-Enhancer",
    image: "/photos/project-2.png",
    description:
      "AI image enhancement platform with image upscaling, denoising, sharpening, and side-by-side before-and-after comparison.",
    liveLink: "https://image-enhancer-ten-psi.vercel.app/",
    githubLink: "https://github.com/subhasmita-puja/IMAGE-Enhancer.git",
  },
    {
    id: 3,
    title: "Personal Portfolio – Multilingual & Voice Controlled",
    image: "/photos/project-4.png",
    description:
      "Interactive personal portfolio with English, Hindi, and Odia language support, voice-controlled navigation, responsive sections, and accessible user interactions.",
    liveLink: "https://portfolio-iota-topaz-92.vercel.app/",
    githubLink: "https://github.com/subhasmita-puja/Portfolio.git",
  },
  {
    id: 4,
    title: "3D Gaming Website",
    image: "/photos/project-3.png",
    description:
      "Immersive gaming experience featuring interactive 3D visuals, smooth scroll animations, dynamic scenes, and responsive user interactions.",
    liveLink: "https://3-d-gaming-website-sepia.vercel.app/",
    githubLink: "https://github.com/subhasmita-puja/3D-Gaming-Website.git",
  },
  {
  id: 5,
  title: "Dhabaleswar Temple – Freelance Project",
  image: "/photos/project-5.png",
  description:
    "Interactive spiritual website with Odia, English, and Hindi support, 3D animations, custom ॐ cursor, smooth interactions, and responsive design.",
  liveLink: "https://dhabaleswar-temple.vercel.app/",
  githubLink: "https://github.com/subhasmita-puja/Dhabaleswar-Temple.git",
},
{
  id: 6,
  title: "Interactive Birthday Experience",
  image: "/photos/project-6.png",
  description:
    "Interactive birthday experience with personalized messages, music controls, memory gallery, animated lights, confetti, floating hearts, and immersive animations.",
  liveLink: "https://bdy-nu-three.vercel.app/",
  githubLink: "https://github.com/subhasmita-puja/bdy.git",
},
  {
  id: 7,
  title: "HRMS – Human Resource Management System",
  image: "/photos/project-7.png",
  description:
  "HR platform with role-based dashboards, attendance, leave, KYC, payroll, and AI insights.",
  liveLink: "https://stafrun.com/",
  githubLink: "https://github.com/Somniate-Tech/Demo-HRMS-Frontend.git",
},
{
  id: 8,
  title: "CRM – Customer Relationship Management",
  image: "/photos/project-8.png",
  description:
    "Role-based CRM with team management, productivity tracking, AI face verification, geo-lock, and analytics.",
  liveLink: "https://staffroute.in/",
  githubLink: "https://github.com/Somniate-Tech/employee-tracking-frontend.git",
},

];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projectData.length - 1 : prev - 1
    );
  };

  const getCardStyles = (index) => {
    let offset = index - currentIndex;
    const length = projectData.length;
    
    if (offset < -Math.floor(length / 2)) offset += length;
    if (offset > Math.floor(length / 2)) offset -= length;

    if (offset === 0) {
      return {
        x: 0,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        zIndex: 50,
        opacity: 1,
      };
    } else if (offset < 0) {
      return {
        x: -400, 
        y: Math.abs(offset) * 15, 
        scale: 0.6,
        rotateX: 75, 
        rotateY: 0,
        rotateZ: -15, 
        zIndex: 50 - Math.abs(offset),
        opacity: Math.abs(offset) > 5 ? 0 : 1, 
      };
    } else {
      return {
        x: offset * 250, 
        y: 0,
        scale: 0.8,
        rotateX: 0,
        rotateY: -30, 
        rotateZ: 0,
        zIndex: 50 - Math.abs(offset),
        opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3,
      };
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#0a0a0a] py-12 md:py-24 overflow-hidden flex flex-col items-center"
    >
      <style>{`
        @keyframes moving-border {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-moving-border {
          background-size: 200% 100% !important;
          animation: moving-border 3s linear infinite !important;
        }
      `}</style>

      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12 z-20">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 drop-shadow-[0_0_20px_rgba(217,70,239,0.6)] py-4 leading-normal">
          Projects.
        </h2>
      </div>

      <div 
        className="relative w-full max-w-7xl mx-auto h-[550px] flex justify-center items-center"
        style={{ perspective: "1500px" }}
      >
        <AnimatePresence >
          {projectData.map((project, index) => {
            const styles = getCardStyles(index);
            const isCenter = index === currentIndex;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{
                  x: styles.x,
                  y: styles.y,
                  scale: styles.scale,
                  rotateX: styles.rotateX,
                  rotateY: styles.rotateY,
                  rotateZ: styles.rotateZ,
                  zIndex: styles.zIndex,
                  opacity: styles.opacity,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] md:max-w-[380px]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className={`rounded-2xl p-[2px] transition-all duration-300 ${
                    isCenter
                      ? "bg-gradient-to-r from-fuchsia-500 via-black to-purple-500 animate-moving-border shadow-[0_0_30px_rgba(217,70,239,0.4)]"
                      : "bg-gray-800"
                  }`}
                >
                  <div className="bg-[#0a0a0a]/95 backdrop-blur-md rounded-2xl flex flex-col h-full border-t border-gray-700/50 overflow-hidden relative">
                    
                    <div className="absolute top-4 left-4 w-10 h-10 bg-[#0a0a0a] border-2 border-fuchsia-500 rounded-full flex justify-center items-center text-fuchsia-400 font-bold z-20 shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                      0{project.id}
                    </div>

                    <div className="w-full h-40 sm:h-48 relative overflow-hidden group">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-transparent to-transparent z-10"></div>
                    </div>

                    <div className="p-5 sm:p-6 pt-2 flex flex-col flex-grow z-20">
                      <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>

                     {/* Card Buttons with Hover-Free Floating Animations */}
<div className="mt-auto flex flex-wrap gap-3">
  
  {/* Live Link Button */}
  <motion.div
    animate={{ y: [0, -4, 0] }}
    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
    className="flex-1 min-w-[80px]"
  >
    <a
      href={project.liveLink}
      target="_blank"
      rel="noreferrer"
      className="group relative w-full h-full overflow-hidden px-3 py-2 bg-black/30 backdrop-blur-sm border border-fuchsia-400/80 rounded-full shadow-[0_0_10px_rgba(192,38,211,0.2)] hover:shadow-[0_0_20px_rgba(192,38,211,0.6)] transition-all duration-300 flex items-center justify-center"
    >
      <motion.div 
        initial={{ height: "20%" }} 
        animate={{ height: ["20%", "100%", "20%"] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fuchsia-600 to-purple-500 z-0"
      ></motion.div>
      <span className="relative z-10 text-white font-bold tracking-wider text-xs">Live Link</span>
    </a>
  </motion.div>
  
  {/* Watch Demo Button */}
  {project.id === 1 && (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.2 }}
      className="flex-[1.5] min-w-[110px]"
    >
      <a
        href="https://www.linkedin.com/posts/subhasmita-sahoo-puja_womensafety-womenintech-hackathonwinner-activity-7354529715925200898-1E2m"
        target="_blank"
        rel="noreferrer"
        className="group relative w-full h-full overflow-hidden px-3 py-2 bg-black/30 backdrop-blur-sm border border-fuchsia-400/80 rounded-full shadow-[0_0_10px_rgba(192,38,211,0.2)] hover:shadow-[0_0_20px_rgba(192,38,211,0.6)] transition-all duration-300 flex items-center justify-center gap-1"
      >
        <motion.div 
          initial={{ height: "20%" }} 
          animate={{ height: ["20%", "100%", "20%"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.2 }}
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fuchsia-600 to-purple-500 z-0"
        ></motion.div>
        <span className="relative z-10 text-white font-bold tracking-wider text-xs flex items-center gap-1">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
          WATCH DEMO
        </span>
      </a>
    </motion.div>
  )}

  {/* GitHub Icon Button */}
  <motion.div
    animate={{ y: [0, -4, 0] }}
    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.4 }}
    className="flex-shrink-0"
  >
    <a
      href={project.githubLink}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden w-[36px] h-[36px] bg-black/30 backdrop-blur-sm border border-fuchsia-400/80 rounded-full shadow-[0_0_10px_rgba(192,38,211,0.2)] hover:shadow-[0_0_20px_rgba(192,38,211,0.6)] transition-all duration-300 flex items-center justify-center"
      title="GitHub Repository"
    >
      <motion.div 
        initial={{ height: "20%" }} 
        animate={{ height: ["20%", "100%", "20%"] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.4 }}
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fuchsia-600 to-purple-500 z-0"
      ></motion.div>
      <span className="relative z-10 text-white">
        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </span>
    </a>
  </motion.div>

</div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full max-w-4xl mx-auto flex items-center justify-center gap-6 sm:gap-10 px-6 mt-8 z-20">
        <motion.button
          onClick={handlePrev}
          className="group relative overflow-hidden px-6 sm:px-10 py-3 bg-black/30 backdrop-blur-sm border-2 border-fuchsia-400/80 rounded-full shadow-[0_0_15px_rgba(192,38,211,0.2)] hover:shadow-[0_0_25px_rgba(192,38,211,0.6)] transition-all duration-300 flex items-center gap-2"
        >
          <motion.div 
            animate={{ height: ["20%", "100%", "20%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fuchsia-600 to-purple-500 z-0"
          ></motion.div>
          <span className="relative z-10 text-white font-bold tracking-wider flex items-center gap-2">
            <span>&larr;</span> Previous
          </span>
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="group relative overflow-hidden px-6 sm:px-10 py-3 bg-black/30 backdrop-blur-sm border-2 border-fuchsia-400/80 rounded-full shadow-[0_0_15px_rgba(192,38,211,0.2)] hover:shadow-[0_0_25px_rgba(192,38,211,0.6)] transition-all duration-300 flex items-center gap-2"
        >
          <motion.div 
            animate={{ height: ["20%", "100%", "20%"] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", delay: 0.4 }}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fuchsia-600 to-purple-500 z-0"
          ></motion.div>
          <span className="relative z-10 text-white font-bold tracking-wider flex items-center gap-2">
            Next <span>&rarr;</span>
          </span>
        </motion.button>
      </div>
    </section>
  )
}