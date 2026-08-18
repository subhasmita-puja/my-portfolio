"use client";

export default function Skills() {
  return (
    <section 
      id="skills" 
      className="relative w-full min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden py-12 md:py-20"
    >
      
      {/* Top Header Section */}
      <div className="text-center mb-12 md:mb-16 z-10 relative">
        <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 drop-shadow-[0_0_20px_rgba(217,70,239,0.8)]">
          Skills.
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Side - Glassmorphism Categorized List */}
<div className="order-2 lg:order-1 w-full bg-black/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
  <div className="flex flex-col gap-6 sm:gap-8">

    {/* Languages & Core */}
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">
        Languages & Core
      </div>

      <div className="w-px h-10 bg-gray-700/50"></div>

      <div className="w-2/3 flex flex-wrap items-center gap-3">
        <img src="/photos/HTML.png" alt="HTML" title="HTML" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/CSS.png" alt="CSS" title="CSS" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Javascript.svg" alt="JavaScript" title="JavaScript" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Typescript.svg" alt="TypeScript" title="TypeScript" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Python.png" alt="Python" title="Python" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
      </div>
    </div>

    {/* Frameworks */}
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">
        Frameworks
      </div>

      <div className="w-px h-10 bg-gray-700/50"></div>

      <div className="w-2/3 flex flex-wrap items-center gap-3">
        <img src="/photos/next.png" alt="Next.js" title="Next.js" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/react-native-logo.png" alt="React Native" title="React Native" className="h-7 w-auto object-contain bg-white/10 rounded p-0.5 hover:scale-110 transition-transform duration-300" />
      </div>
    </div>

    {/* Libraries & UI */}
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">
        Libraries & UI
      </div>

      <div className="w-px h-10 bg-gray-700/50"></div>

      <div className="w-2/3 flex flex-wrap items-center gap-3">
        <img src="/photos/React.png" alt="React" title="React" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Redux.svg" alt="Redux" title="Redux" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/zustand.ico" alt="Zustand" title="Zustand" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Three.js_Icon.png" alt="Three.js" title="Three.js" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/gsap.jpg" alt="GSAP" title="GSAP" className="h-7 w-auto object-contain rounded-full hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Tailwind.png" alt="Tailwind CSS" title="Tailwind CSS" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Bootstrap.svg" alt="Bootstrap" title="Bootstrap" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/MaterialUI.svg" alt="Material UI" title="Material UI" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/styled-components.webp" alt="Styled Components" title="Styled Components" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/framer.svg" alt="Framer Motion" title="Framer Motion" className="h-7 w-auto object-contain bg-white hover:scale-110 transition-transform duration-300" />
        <img src="/photos/nextauthjs.webp" alt="NextAuth.js" title="NextAuth.js" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/ChartJs.svg" alt="Chart.js" title="Chart.js" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
      </div>
    </div>

    {/* Backend */}
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">
        Backend
      </div>

      <div className="w-px h-10 bg-gray-700/50"></div>

      <div className="w-2/3 flex flex-wrap items-center gap-3">
        <img src="/photos/NodeJs.svg" alt="Node.js" title="Node.js" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Express.png" alt="Express.js" title="Express.js" className="h-7 w-auto object-contain bg-white/10 rounded p-0.5 hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Graphql.svg" alt="GraphQL" title="GraphQL" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/WebAPI.png" alt="Web APIs" title="Web APIs" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
      </div>
    </div>

    {/* Databases & Services */}
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">
        Databases & Services
      </div>

      <div className="w-px h-10 bg-gray-700/50"></div>

      <div className="w-2/3 flex flex-wrap items-center gap-3">
        <img src="/photos/MongoDB.svg" alt="MongoDB" title="MongoDB" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/firebase.webp" alt="Firebase" title="Firebase" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
      </div>
    </div>

    {/* Tools */}
    <div className="flex items-center gap-4 sm:gap-6">
      <div className="w-1/3 text-right text-gray-400 text-sm sm:text-base font-medium">
        Tools
      </div>

      <div className="w-px h-10 bg-gray-700/50"></div>

      <div className="w-2/3 flex flex-wrap items-center gap-3">
        <img src="/photos/Git.svg" alt="Git" title="Git" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Github.svg" alt="GitHub" title="GitHub" className="h-7 w-auto object-contain bg-white rounded-full hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Docker.svg" alt="Docker" title="Docker" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Vercel.svg" alt="Vercel" title="Vercel" className="h-7 w-auto object-contain rounded-full p-0.5 hover:scale-110 transition-transform duration-300" />
        <img src="/photos/Bash.svg" alt="Bash" title="Bash" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/figma.png" alt="Figma" title="Figma" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
        <img src="/photos/postman.png" alt="Postman" title="Postman" className="h-7 w-auto object-contain hover:scale-110 transition-transform duration-300" />
      </div>
    </div>

  </div>
</div>

        {/* Right Side - Grid Design mimicking the screenshot */}
        <div className="order-1 lg:order-2 w-full flex justify-center items-center relative">
          
          <div className="rightSkillContainer w-full flex flex-col items-center justify-center relative min-h-[460px] sm:min-h-[520px]">
            
            {/* Background Video Aura */}
           <div className="space2 absolute inset-0 flex justify-center items-center -translate-y-4 sm:-translate-y-6 scale-[1.7] sm:scale-150 mix-blend-screen pointer-events-none">
              <video autoPlay muted loop aria-hidden="true" className="w-full object-cover [mask-image:radial-gradient(circle_at_center,black_35%,transparent_70%)]">
                <source src="/videos/skills.webm" type="video/webm" />
              </video>
            </div>

            {/* Floating Logos - 5 Column Grid */}
            <div className="relative z-10 grid grid-cols-5 gap-x-3 gap-y-4 sm:gap-x-6 sm:gap-y-6 p-2 sm:p-4 w-full max-w-lg place-items-center -translate-y-6 sm:-translate-y-8">
              
              {/* Row 1 */}
              <img src="/photos/HTML.png" alt="HTML" title="HTML" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/CSS.png" alt="CSS" title="CSS" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Javascript.svg" alt="JavaScript" title="JavaScript" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/React.png" alt="React" title="React" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/NodeJs.svg" alt="Node.js" title="Node.js" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              
              {/* Row 2 */}
              <img src="/photos/next.png" alt="Next.js" title="Next.js" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg bg-white p-2 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              <img src="/photos/Redux.svg" alt="Redux" title="Redux" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Three.js_Icon.png" alt="Three.js" title="Three.js" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/gsap.jpg" alt="GSAP" title="GSAP" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg rounded" />
              <img src="/photos/Tailwind.png" alt="Tailwind CSS" title="Tailwind CSS" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              
              {/* Row 3 */}
              <img src="/photos/Bootstrap.svg" alt="Bootstrap" title="Bootstrap" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/MaterialUI.svg" alt="Material UI" title="Material UI" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Express.png" alt="Express.js" title="Express.js" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg bg-gray-400 rounded-full" />
              <img src="/photos/Git.svg" alt="Git" title="Git" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Typescript.svg" alt="TypeScript" title="TypeScript" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              
              {/* Row 4 */}
              <img src="/photos/Graphql.svg" alt="GraphQL" title="GraphQL" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/MongoDB.svg" alt="MongoDB" title="MongoDB" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Bash.svg" alt="Bash" title="Bash" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/ChartJs.svg" alt="Chart.js" title="Chart.js" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Vercel.svg" alt="Vercel" title="Vercel" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              
              {/* Row 5 - Centered using col-start-2 */}
              <img src="/photos/Docker.svg" alt="Docker" title="Docker" className="col-start-2 w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
              <img src="/photos/Github.svg" alt="GitHub" title="GitHub" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg bg-white rounded-full" />
              <img src="/photos/WebAPI.png" alt="Web APIs" title="Web APIs" className="w-10 h-10 sm:w-14 sm:h-14 object-contain hover:scale-125 transition-all duration-300 drop-shadow-lg" />
            </div>

            {/* Faded Background Text */}
            <div className="skillFadedText absolute inset-0 flex items-end justify-center sm:justify-end z-0 text-[85px] sm:text-[140px] lg:text-[160px] font-black text-white/[0.04] uppercase tracking-widest pointer-events-none select-none translate-y-4 sm:translate-y-12 sm:translate-x-12">
              Skill
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}