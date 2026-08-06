"use client";

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden py-12 md:py-20"
    >
      
      {/* Top Header Section */}
      <div className="text-center mb-12 md:mb-16 z-10 relative">
        <p className="text-xs sm:text-sm font-medium text-gray-400 tracking-[0.25em] uppercase mb-3">
          What I have learnt so far
        </p>
        <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 drop-shadow-[0_0_20px_rgba(217,70,239,0.8)]">
          Skills.
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Side - Glassmorphism Categorized List */}
        <div className="order-2 lg:order-1 w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col gap-6 sm:gap-8">
            
         {/* Languages */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">Languages</div>
              <div className="w-px h-10 bg-gray-700/50"></div>
              <div className="w-2/3 flex flex-wrap items-center gap-3">
                <img src="/photos/HTML.png" alt="HTML" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src="/photos/CSS.png" alt="CSS" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src="/photos/Javascript.svg" alt="JS" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src="/photos/Typescript.svg" alt="TS" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-semibold text-fuchsia-400 border border-fuchsia-400/30 bg-fuchsia-400/10 rounded px-2 py-1">C</span>
                <span className="text-xs font-semibold text-fuchsia-400 border border-fuchsia-400/30 bg-fuchsia-400/10 rounded px-2 py-1">Java</span>
                <img src="/photos/Python.svg" alt="Python" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* Frameworks */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">Frameworks</div>
              <div className="w-px h-10 bg-gray-700/50"></div>
              <div className="w-2/3 flex flex-wrap items-center gap-3">
                <img src="/photos/next.png" alt="Next.js" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src="/photos/Express.png" alt="Express" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300 bg-white/10 rounded p-0.5" />
                <span className="text-xs font-semibold text-fuchsia-400 border border-fuchsia-400/30 bg-fuchsia-400/10 rounded px-2 py-1">Flutter</span>
              </div>
            </div>

            {/* Libraries */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">Libraries</div>
              <div className="w-px h-10 bg-gray-700/50"></div>
              <div className="w-2/3 flex flex-wrap items-center gap-3">
                <img src="/photos/React.png" alt="React" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src="/photos/Redux.svg" alt="Redux" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src="/photos/Three.js_Icon.png" alt="Three.js" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src="/photos/gsap.jpg" alt="GSAP" className="h-7 w-auto object-contain rounded-full hover:scale-110 transition-transform duration-300" />
                <img src="/photos/Tailwind.png" alt="Tailwind" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src="/photos/Bootstrap.svg" alt="Bootstrap" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src="/photos/MaterialUI.svg" alt="Material UI" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* Databases */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">Databases</div>
              <div className="w-px h-10 bg-gray-700/50"></div>
              <div className="w-2/3 flex flex-wrap items-center gap-3">
                <img src="/photos/MongoDB.svg" alt="MongoDB" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-semibold text-fuchsia-400 border border-fuchsia-400/30 bg-fuchsia-400/10 rounded px-2 py-1">MySQL</span>
                <span className="text-xs font-semibold text-fuchsia-400 border border-fuchsia-400/30 bg-fuchsia-400/10 rounded px-2 py-1">PostgreSQL</span>
                <span className="text-xs font-semibold text-fuchsia-400 border border-fuchsia-400/30 bg-fuchsia-400/10 rounded px-2 py-1">Firebase</span>
              </div>
            </div>

            {/* Tools */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">Tools</div>
              <div className="w-px h-10 bg-gray-700/50"></div>
              <div className="w-2/3 flex flex-wrap items-center gap-3">
                <img src="/photos/Git.svg" alt="Git" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src="/photos/Github.svg" alt="GitHub" className="h-7 w-auto object-contain bg-white rounded-full hover:scale-110 transition-transform duration-300" />
                <img src="/photos/Docker.svg" alt="Docker" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <img src="/photos/Vercel.svg" alt="Vercel" className="h-7 w-auto object-contain bg-white rounded-full p-0.5 hover:scale-110 transition-transform duration-300" />
                <img src="/photos/Bash.svg" alt="Bash" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                <span className="text-xs font-semibold text-fuchsia-400 border border-fuchsia-400/30 bg-fuchsia-400/10 rounded px-2 py-1">Figma</span>
                <span className="text-xs font-semibold text-fuchsia-400 border border-fuchsia-400/30 bg-fuchsia-400/10 rounded px-2 py-1">Postman</span>
              </div>
            </div>

            {/* Environments */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">Environments</div>
              <div className="w-px h-10 bg-gray-700/50"></div>
              <div className="w-2/3 flex flex-wrap items-center gap-3">
                <img src="/photos/NodeJs.svg" alt="Node.js" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Your Custom Design snippet */}
        <div className="order-1 lg:order-2 w-full flex justify-center items-center relative">
          
          <div className="rightSkillContainer w-full flex flex-col items-center justify-center relative min-h-[400px]">
            
            {/* Background Video */}
            <div className="space2 absolute inset-0 flex justify-center items-center opacity-60 mix-blend-screen pointer-events-none">
              <video autoPlay muted loop className="w-[80%] lg:w-[90%] object-cover rounded-full shadow-[0_0_30px_rgba(217,70,239,0.15)]">
                <source src="/videos/skills.webm" type="video/webm" />
              </video>
            </div>

            {/* Floating Logos */}
            <div className="relative z-10 flex flex-wrap justify-center gap-4 p-4 max-w-md">
              <img src="/photos/HTML.png" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/CSS.png" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Javascript.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/React.png" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/NodeJs.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/next.png" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Redux.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Three.js_Icon.png" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/gsap.jpg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg rounded-full" />
              <img src="/photos/Tailwind.png" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Bootstrap.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/MaterialUI.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Express.png" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg bg-white/10 rounded" />
              <img src="/photos/Git.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Typescript.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Graphql.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/MongoDB.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Bash.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/ChartJs.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Vercel.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg bg-white rounded-full p-0.5" />
              <img src="/photos/Docker.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Github.svg" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg bg-white rounded-full" />
              <img src="/photos/WebAPI.png" alt="" className="skillsLogo w-10 h-10 sm:w-12 sm:h-12 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
            </div>

            {/* Faded Background Text */}
            <div className="skillFadedText absolute inset-0 flex items-center justify-center z-0 text-[100px] sm:text-[140px] lg:text-[160px] font-black text-white/[0.02] uppercase tracking-widest pointer-events-none select-none">
              Skills
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}