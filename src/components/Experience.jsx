"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-[#0a0a0a] py-12 md:py-24 overflow-hidden"
    >
      {/* Injecting custom scrollbar and animated border styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(217, 70, 239, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(217, 70, 239, 0.8);
        }
        
        /* High-Contrast Moving Border Animation with Black Stops */
        @keyframes moving-border {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-moving-border {
          background-size: 200% 100% !important;
          animation: moving-border 3s linear infinite !important;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 drop-shadow-[0_0_20px_rgba(217,70,239,0.6)]">
            Work Experience.
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line (Desktop: Center, Mobile: Left) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 transform md:-translate-x-1/2"></div>

          {/* --- Experience Item 1: Somniate Tech --- */}
          <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-16 md:mb-24">
            
            {/* Mobile Date & Logo (Hidden on Desktop) */}
            <div className="md:hidden w-full pl-20 mb-3 flex flex-col items-start">
              <img 
                src="/photos/Somniate-Tech.png" 
                alt="Somniate Tech Logo" 
                className="h-[45px] object-contain rounded-md bg-white px-2 py-1 mb-2"
              />
              <time dateTime="2025-11"className="text-fuchsia-400 font-semibold tracking-wide text-sm">
                Nov 2025 – Present
              </time>
            </div>

            {/* Left Side: Card with 3D Hover Effect */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: 5 }}
              style={{ perspective: 1200 }}
              className="w-full md:w-[45%] pl-20 md:pl-0 md:pr-12 text-left z-10"
            >
              {/* Moving Border Wrapper with High-Contrast Black Stops */}
              <div className="rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-black to-purple-500 animate-moving-border transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                <div className="bg-[#0a0a0a]/95 backdrop-blur-md border-b-4 border-b-purple-500 rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group h-full">
                  
                  {/* Title */}
                  <div className="mb-6 flex flex-col items-start">
                    <h3 className="text-2xl sm:text-3xl font-bold text-fuchsia-400 mb-1 group-hover:text-purple-400 transition-colors duration-300">
                    Frontend Developer
                    </h3>
                    <h4 className="text-lg text-gray-400 font-medium">
                      Somniate Tech
                    </h4>
                  </div>
                  
                  <ul className="list-disc pl-5 text-gray-300 space-y-3 text-sm sm:text-base leading-relaxed custom-scrollbar max-h-[250px] overflow-y-auto pr-2">
                    <li>Developed interactive 3D web experiences along with responsive applications using React.js, Next.js, and Tailwind CSS.</li>
                    <li>Built and maintained business solutions including Sales CRM, HRMS, and Tata Attendance Management System.</li>
                    <li>Designed and delivered multiple company portfolio websites with modern UI/UX and optimized performance.</li>
                    <li>Integrated REST APIs and improved performance, enhancing user experience and reducing load times.</li>
                    <li>Managed international CMS & e-commerce projects, driving 30%–80% growth while ensuring cross-browser and mobile compatibility.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
       

            {/* Center Timeline Node (Glowing Dot) */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-fuchsia-500 border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(217,70,239,0.8)] z-20"></div>

           {/* Right Side: Animated Date & Logo (Desktop Only) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex flex-col w-[45%] pl-12 justify-center items-start text-left"
            >
              <img 
                src="/photos/Somniate-Tech.png" 
                alt="Somniate Tech Logo" 
                className="h-[60px] object-contain rounded-md bg-white px-3 py-2 mb-4"
              />
              <time dateTime="2025-11" className="text-gray-300 font-semibold tracking-wider text-lg drop-shadow-md">
                Nov 2025 – Present
              </time>
            </motion.div>
          </div>

          {/* --- Experience Item 2: All India Women Tech Hackathon 2025 --- */}
          <div className="relative flex flex-col md:flex-row justify-between items-center w-full mb-16 md:mb-24">

            {/* Mobile Date & Achievement (Hidden on Desktop) */}
            <div className="md:hidden w-full pl-20 mb-3 flex flex-col items-start">
              <img 
                src="/photos/World_Wide_Technology.png" 
                alt="World Wide Technology Logo" 
                className="h-[45px] object-contain rounded-md bg-white px-2 py-1 mb-2"
              />
              <div className="h-[45px] px-3 py-2 rounded-md bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center gap-2 mb-2">
                <span className="text-xl">🏆</span>
                <span className="text-fuchsia-400 font-bold text-sm">Top 5 Finalist</span>
              </div>
              <span className="text-fuchsia-400 font-semibold tracking-wide text-sm">
                Jul 2025
              </span>
            </div>

            {/* Left Side: Animated Date & Achievement (Desktop Only) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex flex-col w-[45%] pr-12 justify-center items-end text-right"
            >
              <img 
                src="/photos/World_Wide_Technology.png" 
                alt="World Wide Technology Logo" 
                className="h-[60px] object-contain rounded-md bg-white px-3 py-2 mb-4"
              />
              <div className="h-[60px] px-4 py-2 rounded-md bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center gap-3 mb-4">
                <span className="text-2xl">🏆</span>
                <span className="text-fuchsia-300 font-bold text-lg">Top 5 Finalist</span>
              </div>
              <span className="text-gray-300 font-semibold tracking-wider text-lg drop-shadow-md">
                Jul 2025
              </span>
            </motion.div>

            {/* Center Timeline Node */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-fuchsia-500 border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(217,70,239,0.8)] z-20"></div>

            {/* Right Side: Hackathon Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: -5 }}
              style={{ perspective: 1200 }}
              className="w-full md:w-[45%] pl-20 md:pl-12 text-left z-10"
            >
              <div className="rounded-2xl p-[2px] bg-gradient-to-r from-fuchsia-500 via-black to-purple-500 animate-moving-border transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,70,239,0.6)]">
                <div className="bg-[#0a0a0a]/95 backdrop-blur-md border-b-4 border-b-fuchsia-500 rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group h-full">

                  <div className="mb-6 flex flex-col items-start">
                    <h3 className="text-2xl sm:text-3xl font-bold text-fuchsia-400 mb-1 group-hover:text-purple-400 transition-colors duration-300">
                      Hackathon Finalist – Full Stack Developer & Product Designer
                    </h3>
                    <h4 className="text-lg text-gray-400 font-medium">
                      All India Women Tech Hackathon 2025 · World Wide Technology
                    </h4>
                  </div>

                  <ul className="list-disc pl-5 text-gray-300 space-y-3 text-sm sm:text-base leading-relaxed custom-scrollbar max-h-[300px] overflow-y-auto pr-2">
                    <li>Designed and developed <span className="text-fuchsia-300 font-semibold">Guardian Angel</span>, a comprehensive personal safety platform selected among the <span className="text-fuchsia-300 font-semibold">Top 5 projects out of 700+ submissions</span>.</li>
                    <li>Built a full-stack multilingual application using Next.js, React, Node.js, JavaScript, Tailwind CSS, and ShadCN UI.</li>
                    <li>Implemented real-time location tracking and emergency response features including one-tap SOS, voice-activated SOS, shake-to-SOS, and emergency siren.</li>
                    <li>Integrated Google Genkit + Gemini AI for an AI Crime Report Assistant and AI-powered community content moderation.</li>
                    <li>Developed Live Safety Zone Maps with Leaflet.js, Fake Incoming Calls, evidence capture, trusted contacts, alert history, and smartwatch QR integration.</li>
                    <li>Added multilingual support for <span className="text-fuchsia-300 font-semibold">English, Hindi, and Odia</span> using custom i18n logic.</li>
                    <li>Focused on combining preventive and reactive safety tools into one accessible digital safety companion for women and students.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

       

          {/* --- Experience Item 3: Infosys Springboard --- */}
          <div className="relative flex flex-col md:flex-row justify-between items-center w-full">
            
            {/* Mobile Date & Logo (Hidden on Desktop) */}
            <div className="md:hidden w-full pl-20 mb-3 flex flex-col items-start">
              <img 
                src="/photos/infosys-springboard.avif" 
                alt="Infosys Springboard Logo" 
                className="h-[45px] object-contain rounded-md bg-white px-2 py-1 mb-2"
              />
              <span className="text-purple-400 font-semibold tracking-wide text-sm">
                Jan 2025 – April 2025
              </span>
            </div>

            {/* Left Side: Card with 3D Hover Effect */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: 5 }}
              style={{ perspective: 1200 }}
              className="w-full md:w-[45%] pl-20 md:pl-0 md:pr-12 text-left z-10"
            >
              {/* Moving Border Wrapper with High-Contrast Black Stops */}
              <div className="rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-black to-purple-500 animate-moving-border transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                <div className="bg-[#0a0a0a]/95 backdrop-blur-md border-b-4 border-b-purple-500 rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group h-full">
                  
                  {/* Title */}
                  <div className="mb-6 flex flex-col items-start">
                    <h3 className="text-2xl sm:text-3xl font-bold text-fuchsia-400 mb-1 group-hover:text-purple-400 transition-colors duration-300">
                      Software Development Intern
                    </h3>
                    <h4 className="text-lg text-gray-400 font-medium">
                      Infosys Springboard Internship
                    </h4>
                  </div>
                  
                  <ul className="list-disc pl-5 text-gray-300 space-y-3 text-sm sm:text-base leading-relaxed custom-scrollbar max-h-[250px] overflow-y-auto pr-2">
                    <li>Completed industry-oriented projects with hands-on experience in full-stack development, with a primary focus on React.js.</li>
                    <li>Built dynamic and responsive applications using HTML, CSS, JavaScript, and React, applying modern UI/UX principles.</li>
                    <li>Gained practical experience in integrating frontend with backend services and APIs.</li>
                    <li>Enhanced problem-solving abilities and real-world development skills through project-based learning.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Center Timeline Node (Glowing Dot) */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 border-4 border-[#0a0a0a] shadow-[0_0_15px_rgba(168,85,247,0.8)] z-20"></div>

            {/* Right Side: Animated Date & Logo (Desktop Only) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:flex flex-col w-[45%] pl-12 justify-center items-start text-left"
            >
              <img 
                src="/photos/infosys-springboard.avif" 
                alt="Infosys Springboard Logo" 
                className="h-[60px] object-contain rounded-md bg-white px-4 py-1 mb-4"
              />
              <span className="text-gray-300 font-semibold tracking-wider text-lg drop-shadow-md">
                Jan 2025 – April 2025
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}