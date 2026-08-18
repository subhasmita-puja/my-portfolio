"use client";

import { motion } from "framer-motion";

const servicesData = [
  {
    id: "01",
    title: "Full Stack Development",
    description: "End-to-end web applications with scalable frontend and backend architecture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45c.019-.104.039-.208.06-.311m-2.7-2.699a15.2 15.2 0 013.433-3.433M9.63 8.41A14.98 14.98 0 002.25 2.25c4.766 2.383 8.653 6.27 11.036 11.036M15.59 14.37A14.98 14.98 0 0021.75 21.75c-2.383-4.766-6.27-8.653-11.036-11.036" />
      </svg>
    ),
    tags: ["React", "Node.js", "MongoDB", "REST APIs", "Auth"],
  },
  {
    id: "02",
    title: "React & Next.js Development",
    description: "Fast, responsive and production-ready React applications with clean and reusable component architecture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(45 12 12)" />
        <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(-45 12 12)" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
    tags: ["React", "Next.js", "Hooks", "Tailwind CSS", "ShadCN UI"],
  },
  {
    id: "03",
    title: "SaaS & Business Applications",
    description: "Building real-world SaaS platforms, dashboards and business applications that solve complex problems.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    tags: ["HRMS", "Dashboards", "Ecommerce", "RBAC", "Analytics"],
  },
  {
    id: "04",
    title: "API & Backend Development",
    description: "Robust backend services and APIs that power your frontend and mobile applications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    tags: ["Node.js", "Express.js", "REST", "JWT", "MongoDB", ],
  },
  {
    id: "05",
    title: "Modern UI Development",
    description: "Beautiful, responsive and accessible user interfaces with smooth animations and great user experience.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.879-3.879a3 3 0 10-4.242-4.242l-3.879 3.879a15.995 15.995 0 00-4.648 4.764M12 12h.008v.008H12V12z" />
      </svg>
    ),
    tags: ["Responsive", "Tailwind CSS", "Animations", "Dark/Light", "A11y"],
  },
  {
    id: "06",
    title: "Interactive & 3D Experiences",
    description: "Immersive and interactive web experiences using modern animations, 3D and micro-interactions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    tags: ["Three.js", "GSAP", "Framer Motion", "3D Models", "Scroll FX"],
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full min-h-screen bg-[#0a0a0a] py-16 md:py-24 overflow-hidden flex flex-col items-center px-4 sm:px-6"
    >
      {/* Exact border animation styles from Projects.jsx */}
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

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Header Section */}
      <div className="text-center mb-16 z-20 flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-4"
        >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">Services.</span>
        </motion.h2>
        
        <div className="flex flex-col items-center gap-2">
        
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            I build modern, scalable and interactive web applications<br className="hidden sm:block" />
            that help businesses grow and users love.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-20">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
          >
            {/* The exact animated border from Projects.jsx */}
            <div className="rounded-2xl p-[2px] bg-gradient-to-r from-fuchsia-500 via-black to-purple-500 animate-moving-border shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transition-all duration-300 h-full">
              <div className="bg-[#0a0a0a]/95 backdrop-blur-md rounded-2xl h-full p-6 sm:p-8 flex flex-col relative overflow-hidden group">
                
                {/* Dotted Grid Pattern Decoration (Matches the top right of cards) */}
                <div className="absolute top-6 right-6 opacity-30">
                  <div className="grid grid-cols-4 gap-[3px]">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="w-[3px] h-[3px] bg-gray-400 rounded-full"></div>
                    ))}
                  </div>
                </div>

                {/* Top Row: Icon and ID */}
                <div className="flex items-start gap-4 mb-5 relative z-10">
                  <div  aria-hidden="true" className="w-16 h-16 rounded-2xl border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 flex items-center justify-center text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
                    {service.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <span className="text-3xl font-bold text-fuchsia-400/80 drop-shadow-[0_0_10px_rgba(217,70,239,0.3)]">
                      {service.id}
                    </span>
                  <h3 className="text-[22px] font-bold text-white leading-tight mt-1">
  {service.title.split(' ').map((word, i, arr) => (
    <span key={i}>
      {i === arr.length - 1 && arr.length > 2 && <br />}
      {word}{i !== arr.length - 1 ? ' ' : ''}
    </span>
  ))}
</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13px] text-gray-400 leading-[1.6] mb-8 flex-grow relative z-10 pr-2">
                  {service.description}
                </p>

                {/* Bottom Row: Tags and Arrow */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-auto gap-4 relative z-10 border-t border-gray-800/50 pt-4">
                  <div className="flex flex-wrap gap-[6px]">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-medium px-2 py-1 rounded-sm bg-gray-900/80 border border-gray-800 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button  type="button"
  aria-label={`Contact me about ${service.title}`}
  onClick={() => {
    document.getElementById("contactMe")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }} className="flex-shrink-0 w-10 h-10 rounded-full border border-fuchsia-500 bg-fuchsia-500/10 flex items-center justify-center text-white hover:bg-fuchsia-500 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)] transition-all duration-300 self-end sm:self-auto">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>
                </div>
                
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Features Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="w-full max-w-[1200px] mx-auto mt-8 z-20"
      >
        {/* Container with the animated moving border */}
        <div className="rounded-2xl p-[2px] bg-gradient-to-r from-fuchsia-500 via-black to-purple-500 animate-moving-border shadow-[0_0_20px_rgba(217,70,239,0.2)]">
          <div className="bg-[#0a0a0a]/95 backdrop-blur-md rounded-2xl py-6 px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-800">
            
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-4 first:pt-0 first:pl-0">
              <div className="w-10 h-10 rounded-full border border-fuchsia-500 bg-fuchsia-500/10 flex items-center justify-center text-white shrink-0 shadow-[0_0_10px_rgba(217,70,239,0.3)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-white text-[13px] font-bold">End-to-End Solutions</h4>
                <p className="text-gray-400 text-[11px] mt-0.5">From idea to deployment</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-4 lg:pl-6">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-fuchsia-500 shrink-0 border border-fuchsia-500/30">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
              </div>
              <div>
                <h4 className="text-white text-[13px] font-bold">Secure & Scalable</h4>
                <p className="text-gray-400 text-[11px] mt-0.5">Best practices &<br/>high performance</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-4 lg:pl-6">
              <div className="w-10 h-10 flex items-center justify-center text-fuchsia-500 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <div>
                <h4 className="text-white text-[13px] font-bold">Modern Technologies</h4>
                <p className="text-gray-400 text-[11px] mt-0.5">Always up-to-date with<br/>latest tech stack</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-4 lg:pl-6">
              <div className="w-10 h-10 flex items-center justify-center text-fuchsia-500 shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
              </div>
              <div>
                <h4 className="text-white text-[13px] font-bold">User-Centric Approach</h4>
                <p className="text-gray-400 text-[11px] mt-0.5">Building with real user needs<br/>in mind</p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}