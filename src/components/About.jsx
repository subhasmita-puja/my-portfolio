"use client";

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';

// Model sub-component with left-to-right oscillation
function Model() {
  const { scene } = useGLTF('/models/model.glb');
  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      // Gently oscillate the model left and right
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.4;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={1.5} 
      position={[0, -0.4, 0]} 
    />
  );
}

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col justify-center overflow-hidden py-12 md:py-20">
      
      {/* Injecting custom scrollbar styles for the text area */}
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
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Side - 3D Model */}
        <div className="order-1 w-full flex justify-center h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="relative w-full h-full cursor-grab active:cursor-grabbing bg-transparent">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Environment preset="city" /> 
              <Suspense fallback={null}>
                <Model />
              </Suspense>
              
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                minPolarAngle={Math.PI / 2} 
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 4} 
                maxAzimuthAngle={Math.PI / 4}  
              />
            </Canvas>
          </div>
          
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 space-y-5 lg:pr-4">
          
          <p className="text-lg md:text-xl font-medium text-fuchsia-400 tracking-wide uppercase drop-shadow-md">
            Overview
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-[0_0_20px_rgba(217,70,239,0.8)]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">Subhasmita</span>
          </h1>

          {/* Scrollable Text Area */}
          <div className="text-sm md:text-base text-gray-300 leading-relaxed drop-shadow-md space-y-4 max-h-[250px] sm:max-h-[300px] lg:max-h-[350px] overflow-y-auto pr-3 custom-scrollbar text-left w-full">
            <p>
              Hi, I'm Subhasmita—a Full-Stack MERN Developer who enjoys turning ideas into modern, scalable, and user-friendly digital experiences.
            </p>
            <p>
              I build web and mobile applications using React.js, Next.js, React Native, Node.js, Express.js, MongoDB, JavaScript, and Tailwind CSS. I enjoy taking ownership of the complete development process—from understanding requirements and designing intuitive interfaces to building, testing, and deploying reliable applications.
            </p>
            <p>
              I'm passionate about creating clean, maintainable, and high-performance software. Whether it's developing AI-powered applications, interactive 3D web experiences with Three.js and GSAP, or responsive websites, I focus on delivering solutions that provide an excellent user experience.
            </p>
            <p>
              One of my proudest achievements is developing Guardian Angel, an AI-powered personal safety platform that secured a Top 5 position in the All India Women Tech Hackathon 2025. I also completed a Full-Stack Development Internship at Infosys, where I strengthened my skills in modern web development, API integration, debugging, and Agile practices.
            </p>
            <p>
              Outside of work, I enjoy building side projects, exploring new technologies, contributing to open-source ideas, and continuously improving my skills as a software engineer.
            </p>
            <p className="font-semibold text-fuchsia-400">
              Let's build something amazing together.
            </p>
          </div>

          {/* Contact & Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-2 w-full justify-center lg:justify-start">
            <a href="mailto:subhasmita4602@gmail.com" className="group flex items-center gap-2 text-gray-300 hover:text-fuchsia-400 transition-colors duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="text-sm sm:text-base font-medium">subhasmita4602@gmail.com</span>
            </a>
            
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/subhasmita-sahoo-puja/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fuchsia-400 hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/subhasmita-puja" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fuchsia-400 hover:scale-110 transition-all duration-300" aria-label="GitHub">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden w-full sm:w-auto px-10 py-3.5 bg-black/30 backdrop-blur-sm border-2 border-fuchsia-400/80 rounded-full shadow-[0_0_15px_rgba(192,38,211,0.2)] hover:shadow-[0_0_25px_rgba(192,38,211,0.6)] transition-all duration-300 flex items-center justify-center"
            >
              <motion.div 
                animate={{ 
                  height: ["20%", "100%", "20%"] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fuchsia-600 to-purple-500 z-0"
              ></motion.div>
              <span className="relative z-10 text-white font-bold tracking-wider">Download Resume</span>
            </motion.a>

            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=subhasmita4602@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden w-full sm:w-auto px-10 py-3.5 bg-black/30 backdrop-blur-sm border-2 border-fuchsia-400/80 rounded-full shadow-[0_0_15px_rgba(192,38,211,0.2)] hover:shadow-[0_0_25px_rgba(192,38,211,0.6)] transition-all duration-300 flex items-center justify-center"
            >
              <motion.div 
                animate={{ 
                  height: ["20%", "100%", "20%"] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut", 
                  delay: 0.4 
                }}
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fuchsia-600 to-purple-500 z-0"
              ></motion.div>
              <span className="relative z-10 text-white font-bold tracking-wider">Contact Me</span>
            </motion.a>
          </div>

        </div>
        
      </div>

      {/* --- SURGICALLY FIXED: Role Cards matching exactly to the provided image --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Card 1: Software Developer */}
          <div className="rounded-2xl p-[3px] bg-gradient-to-br from-emerald-400/60 via-[#1a1a2e] to-fuchsia-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300">
            <div className="flex flex-col items-center justify-center h-full bg-[#111116] rounded-2xl p-6 md:p-8 aspect-square lg:aspect-auto lg:h-[220px]">
              <svg className="w-14 h-14 md:w-16 md:h-16 mb-4 drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]" viewBox="0 0 100 100" fill="none">
                <defs>
                  <linearGradient id="cubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#2dd4bf" />
                  </linearGradient>
                  <linearGradient id="cubeGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7e22ce" />
                    <stop offset="100%" stopColor="#0f766e" />
                  </linearGradient>
                </defs>
                {/* Top Cube */}
                <path d="M50 15 L65 23 L50 31 L35 23 Z" fill="url(#cubeGrad)" />
                <path d="M35 23 L35 40 L50 48 L50 31 Z" fill="url(#cubeGradDark)" />
                <path d="M65 23 L65 40 L50 48 L50 31 Z" fill="url(#cubeGrad)" opacity="0.7"/>
                {/* Left Cube */}
                <path d="M30 35 L45 43 L30 51 L15 43 Z" fill="url(#cubeGrad)" />
                <path d="M15 43 L15 60 L30 68 L30 51 Z" fill="url(#cubeGradDark)" />
                <path d="M45 43 L45 60 L30 68 L30 51 Z" fill="url(#cubeGrad)" opacity="0.7"/>
                {/* Right Cube */}
                <path d="M70 35 L85 43 L70 51 L55 43 Z" fill="url(#cubeGrad)" />
                <path d="M55 43 L55 60 L70 68 L70 51 Z" fill="url(#cubeGradDark)" />
                <path d="M85 43 L85 60 L70 68 L70 51 Z" fill="url(#cubeGrad)" opacity="0.7"/>
                {/* Bottom Cube */}
                <path d="M50 55 L65 63 L50 71 L35 63 Z" fill="url(#cubeGrad)" />
                <path d="M35 63 L35 80 L50 88 L50 71 Z" fill="url(#cubeGradDark)" />
                <path d="M65 63 L65 80 L50 88 L50 71 Z" fill="url(#cubeGrad)" opacity="0.7"/>
              </svg>
              <h3 className="text-base md:text-lg font-bold text-gray-200 text-center leading-snug tracking-wide">Software<br/>Developer</h3>
            </div>
          </div>

          {/* Card 2: Frontend Developer */}
          <div className="rounded-2xl p-[3px] bg-gradient-to-br from-emerald-400/60 via-[#1a1a2e] to-fuchsia-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300">
            <div className="flex flex-col items-center justify-center h-full bg-[#111116] rounded-2xl p-6 md:p-8 aspect-square lg:aspect-auto lg:h-[220px]">
              <svg className="w-14 h-14 md:w-16 md:h-16 mb-4 drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]" viewBox="0 0 100 100" fill="none">
                <defs>
                   <linearGradient id="browserGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#4c1d95" />
                  </linearGradient>
                  <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2dd4bf" />
                    <stop offset="100%" stopColor="#0f766e" />
                  </linearGradient>
                </defs>
                <rect x="15" y="25" width="70" height="50" rx="6" fill="url(#browserGrad)" />
                <rect x="20" y="40" width="60" height="30" rx="2" fill="url(#screenGrad)" opacity="0.8" />
                <circle cx="23" cy="33" r="2.5" fill="#fff" opacity="0.5"/>
                <circle cx="31" cy="33" r="2.5" fill="#fff" opacity="0.5"/>
                <circle cx="39" cy="33" r="2.5" fill="#fff" opacity="0.5"/>
                {/* Node Network */}
                <circle cx="50" cy="55" r="4.5" fill="#fff" />
                <circle cx="37" cy="46" r="3" fill="#fff" opacity="0.8"/>
                <circle cx="63" cy="46" r="3" fill="#fff" opacity="0.8"/>
                <circle cx="42" cy="64" r="3" fill="#fff" opacity="0.8"/>
                <circle cx="58" cy="64" r="3" fill="#fff" opacity="0.8"/>
                <path d="M50 55 L37 46 M50 55 L63 46 M50 55 L42 64 M50 55 L58 64 M37 46 L42 64 M63 46 L58 64" stroke="#fff" strokeWidth="1.5" opacity="0.5"/>
              </svg>
              <h3 className="text-base md:text-lg font-bold text-gray-200 text-center leading-snug tracking-wide">Frontend<br/>Developer</h3>
            </div>
          </div>

          {/* Card 3: Problem Solving */}
          <div className="rounded-2xl p-[3px] bg-gradient-to-br from-emerald-400/60 via-[#1a1a2e] to-fuchsia-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300">
            <div className="flex flex-col items-center justify-center h-full bg-[#111116] rounded-2xl p-6 md:p-8 aspect-square lg:aspect-auto lg:h-[220px]">
              <svg className="w-14 h-14 md:w-16 md:h-16 mb-4 drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]" viewBox="0 0 100 100" fill="none">
                <defs>
                  <linearGradient id="probGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2dd4bf" />
                    <stop offset="100%" stopColor="#0f766e" />
                  </linearGradient>
                  <linearGradient id="probGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#4c1d95" />
                  </linearGradient>
                </defs>
                {/* Top Cube */}
                <g transform="translate(18, -4)">
                  <path d="M50 25 L65 33 L50 41 L35 33 Z" fill="url(#probGrad1)" />
                  <path d="M35 33 L35 50 L50 58 L50 41 Z" fill="url(#probGrad1)" opacity="0.6"/>
                  <path d="M65 33 L65 50 L50 58 L50 41 Z" fill="url(#probGrad1)" opacity="0.8"/>
                </g>
                {/* Bottom Circle/Node */}
                <g transform="translate(-18, 18)">
                  <circle cx="75" cy="55" r="16" fill="url(#probGrad2)" />
                  <circle cx="75" cy="55" r="12" fill="#111116" opacity="0.6" />
                </g>
                {/* Swap Arrows */}
                <path d="M 28 55 A 25 25 0 0 0 52 78" stroke="#a855f7" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <polygon points="54,78 47,73 47,83" fill="#a855f7" />
                
                <path d="M 72 38 A 25 25 0 0 0 48 15" stroke="#2dd4bf" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <polygon points="46,15 53,10 53,20" fill="#2dd4bf" />
              </svg>
              <h3 className="text-base md:text-lg font-bold text-gray-200 text-center leading-snug tracking-wide">Problem<br/>Solving</h3>
            </div>
          </div>

          {/* Card 4: Freelancer */}
          <div className="rounded-2xl p-[3px] bg-gradient-to-br from-emerald-400/60 via-[#1a1a2e] to-fuchsia-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300">
            <div className="flex flex-col items-center justify-center h-full bg-[#111116] rounded-2xl p-6 md:p-8 aspect-square lg:aspect-auto lg:h-[220px]">
              <svg className="w-14 h-14 md:w-16 md:h-16 mb-4 drop-shadow-[0_0_12px_rgba(168,85,247,0.3)]" viewBox="0 0 100 100" fill="none">
                <defs>
                   <linearGradient id="freeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#2dd4bf" />
                  </linearGradient>
                </defs>
                <g transform="translate(50,50)">
                  {/* Central Gear */}
                  <circle cx="0" cy="0" r="14" fill="#4c1d95" />
                  <circle cx="0" cy="0" r="5.5" fill="#111116" />
                  {/* Gear Teeth */}
                  <path d="M-4,-17 L4,-17 L5.5,-14 L-5.5,-14 Z" fill="#4c1d95" />
                  <path d="M-4,17 L4,17 L5.5,14 L-5.5,14 Z" fill="#4c1d95" />
                  <path d="M-17,-4 L-17,4 L-14,5.5 L-14,-5.5 Z" fill="#4c1d95" />
                  <path d="M17,-4 L17,4 L14,5.5 L14,-5.5 Z" fill="#4c1d95" />
                  <path d="M-12,-14 L-7,-17 L-9,-11 Z" fill="#4c1d95" transform="rotate(45)" />
                  <path d="M12,14 L7,17 L9,11 Z" fill="#4c1d95" transform="rotate(45)" />
                  
                  {/* Circuit Nodes & Lines */}
                  <path d="M0 -19 L0 -34 M-19 0 L-34 0 M19 0 L34 0 M0 19 L0 34 M-14 -14 L-24 -24 M14 14 L24 24 M-14 14 L-24 24 M14 -14 L24 -24" stroke="url(#freeGrad1)" strokeWidth="3" strokeLinecap="round"/>
                  
                  {/* Outer Blocks */}
                  <rect x="-4" y="-40" width="8" height="8" rx="2" fill="#2dd4bf" />
                  <rect x="-40" y="-4" width="8" height="8" rx="2" fill="#a855f7" />
                  <rect x="32" y="-4" width="8" height="8" rx="2" fill="#a855f7" />
                  <rect x="-4" y="32" width="8" height="8" rx="2" fill="#2dd4bf" />
                  <circle cx="-25" cy="-25" r="4" fill="#a855f7"/>
                  <circle cx="25" cy="25" r="4" fill="#2dd4bf"/>
                  <circle cx="-25" cy="25" r="4" fill="#a855f7"/>
                  <circle cx="25" cy="-25" r="4" fill="#2dd4bf"/>
                </g>
              </svg>
              <h3 className="text-base md:text-lg font-bold text-gray-200 text-center leading-snug tracking-wide">Freelancer</h3>
            </div>
          </div>

        </div>
      </div>
      {/* --- END OF SURGICAL ADDITION --- */}

    </section>
  );
}

useGLTF.preload('/models/model.glb');