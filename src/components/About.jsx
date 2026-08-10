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
    <section id="about" className="relative w-full min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden py-12 md:py-20">
      
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

    

          {/* SURGICAL FIX: Scrollable Text Area to handle updated text cleanly */}
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

          {/* SURGICAL FIX: Contact & Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-2 w-full justify-center lg:justify-start">
            <a href="mailto:subhasmita4602@gmail.com" className="group flex items-center gap-2 text-gray-300 hover:text-fuchsia-400 transition-colors duration-300">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="text-sm sm:text-base font-medium">subhasmita4602@gmail.com</span>
            </a>
            
            <div className="flex items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fuchsia-400 hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-fuchsia-400 hover:scale-110 transition-all duration-300" aria-label="GitHub">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            
          </div>

    {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4 w-full sm:w-auto">
            <motion.button 
              className="group relative overflow-hidden w-full sm:w-auto px-10 py-3.5 bg-black/30 backdrop-blur-sm border-2 border-fuchsia-400/80 rounded-full shadow-[0_0_15px_rgba(192,38,211,0.2)] hover:shadow-[0_0_25px_rgba(192,38,211,0.6)] transition-all duration-300"
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
            </motion.button>

            <motion.button 
              className="group relative overflow-hidden w-full sm:w-auto px-10 py-3.5 bg-black/30 backdrop-blur-sm border-2 border-fuchsia-400/80 rounded-full shadow-[0_0_15px_rgba(192,38,211,0.2)] hover:shadow-[0_0_25px_rgba(192,38,211,0.6)] transition-all duration-300"
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
            </motion.button>
          </div>

        </div>
        
      </div>
    </section>
  );
}

useGLTF.preload('/models/model.glb');