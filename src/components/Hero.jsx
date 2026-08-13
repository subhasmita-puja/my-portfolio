"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typed from 'typed.js';

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Frontend Developer",
        "Coder",
        "React Developer",
        "UI-UX Designer",
        "Subhasmita Sahoo",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setIsPaused(false);
    if (videoRef.current) {
      videoRef.current.play(); 
    }
  };

  const toggleVideoPlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col md:block">
      
      {/* Media Wrapper */}
      <div className="relative md:absolute md:inset-0 z-0 w-full px-4 pt-6 md:p-0 md:h-full">
        <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-auto md:h-full rounded-3xl md:rounded-none overflow-hidden bg-black/20 shadow-2xl md:shadow-none">
          
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>

          <AnimatePresence>
            {!isVideoPlaying && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
                className="absolute inset-0 z-10 bg-transparent overflow-hidden"
              >
                <img 
                  src="/photos/photo.png" 
                  alt="Intro Cover" 
                  className="w-full h-full object-cover"
                />
                
                {/* PLAY BUTTON CONTAINER */}
                <div className="absolute right-[16%] bottom-[16%] sm:right-[20%] sm:bottom-[18%] md:right-[24%] md:bottom-[20%] lg:right-[23%] lg:bottom-[22%] z-50 flex items-center gap-3 sm:gap-4">
                  
                  {/* SURGICAL FIX: Play Instruction Message with Vanish Animation */}
                  <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="text-white text-xs sm:text-sm font-semibold tracking-wide px-3 py-1.5 sm:px-4 sm:py-2 bg-black/40 backdrop-blur-md rounded-full border border-fuchsia-400/50 shadow-[0_0_15px_rgba(217,70,239,0.3)] pointer-events-none"
                  >
                    Play Here 👉
                  </motion.div>

                  <motion.button 
                    onClick={handlePlayVideo}
                    className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-fuchsia-600/95 backdrop-blur-md text-white rounded-full shadow-[0_0_30px_rgba(217,70,239,0.9)] border border-fuchsia-400 hover:bg-fuchsia-500 transition-all duration-300"
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    aria-label="Play Intro Video"
                  >
                    <svg 
                      className="w-5 h-5 sm:w-7 sm:h-7 ml-0.5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Content Overlay Layer */}
      <div className="relative z-20 w-full flex-1 md:max-w-7xl md:mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-40 md:pb-28 md:pt-20 flex flex-col justify-end pointer-events-none md:h-screen">
        
        {/* Main Text Container slides in once, never hides entirely */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-sm sm:max-w-md md:max-w-xl mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left pointer-events-auto"
        >
          
          <motion.p 
            animate={{ opacity: isVideoPlaying ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="text-white font-medium text-2xl md:text-3xl mb-3 drop-shadow-md"
          >
            Hello 😊
          </motion.p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-wide drop-shadow-[0_0_20px_rgba(217,70,239,0.8)] leading-snug break-words">
            I am &lt;<span ref={typedRef} className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500"></span>/
          </h1>

          <motion.p 
            animate={{ opacity: isVideoPlaying ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg text-white mb-10 leading-relaxed drop-shadow-md md:max-w-lg"
          >
           I’m a Full Stack Developer focused on building scalable, high-performance, and engaging web applications. Explore my work, technical expertise, and the projects I’ve built along the way.
          </motion.p>

         <motion.div 
            animate={{ opacity: isVideoPlaying ? 0 : 1 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col w-full sm:flex-row gap-5 ${isVideoPlaying ? 'pointer-events-none' : 'pointer-events-auto'}`}
          >
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=subhasmita4602@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden w-full sm:w-auto px-10 py-3.5 bg-black/30 backdrop-blur-sm border-2 border-fuchsia-400/80 rounded-full shadow-[0_0_15px_rgba(192,38,211,0.2)] hover:shadow-[0_0_25px_rgba(192,38,211,0.6)] transition-all duration-300 flex items-center justify-center"
            >
              <motion.div 
                animate={{ 
                  height: ["20%", "80%", "20%"] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fuchsia-600 to-purple-500 z-0"
              ></motion.div>
              <span className="relative z-10 text-white font-bold tracking-wider">HIRE Subhasmita</span>
            </motion.a>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden w-full sm:w-auto px-10 py-3.5 bg-black/30 backdrop-blur-sm border-2 border-fuchsia-400/80 rounded-full shadow-[0_0_15px_rgba(192,38,211,0.2)] hover:shadow-[0_0_25px_rgba(192,38,211,0.6)] transition-all duration-300 flex items-center justify-center"
            >
              <motion.div 
                animate={{ 
                  height: ["20%", "80%", "20%"] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5, 
                  ease: "easeInOut", 
                  delay: 0.4 
                }}
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fuchsia-600 to-purple-500 z-0"
              ></motion.div>
              <span className="relative z-10 text-white font-bold tracking-wider">Download Resume</span>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>

      {/* Floating Pause/Play Control Button */}
      {isVideoPlaying && (
        <div className="absolute right-[16%] bottom-[16%] sm:right-[20%] sm:bottom-[18%] md:right-[24%] md:bottom-[20%] lg:right-[23%] lg:bottom-[22%] z-30">
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={toggleVideoPlayPause}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-black/70 backdrop-blur-xl text-fuchsia-400 rounded-full shadow-[0_0_20px_rgba(217,70,239,0.5)] border border-fuchsia-500/60 hover:bg-fuchsia-600 hover:text-white transition-all duration-300 pointer-events-auto"
            aria-label={isPaused ? "Play Video" : "Pause Video"}
          >
            {isPaused ? (
              <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </motion.button>
        </div>
      )}
    </section>
  );
}