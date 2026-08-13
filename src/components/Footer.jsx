"use client";

export default function Footer() {
  const scrollToHero = (e) => {
    e.preventDefault();
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#0a0a0a] pt-16 pb-6 flex flex-col items-center justify-center relative z-20">
      <div className="flex flex-col items-center w-full px-4">
        
        {/* Main Name / Logo with Link to Hero */}
        <a 
          href="#hero" 
          onClick={scrollToHero}
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 border-b-2 border-white/40 pb-1 mb-6 hover:opacity-80 transition-opacity cursor-pointer"
        >
          Subhasmita Sahoo
        </a>

        {/* Subtitle */}
        <p className="text-white/80 font-medium text-lg mb-8">
          Thanks for visiting ❤️
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mb-16">
          {/* GitHub */}
          <a 
            href="https://github.com/subhasmita-puja" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub Profile" 
            className="text-white/70 hover:text-fuchsia-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" title="GitHub Profile">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/subhasmita-sahoo-puja/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn Profile" 
            className="text-white/70 hover:text-fuchsia-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" title="LinkedIn Profile">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          {/* Telegram */}
          <a 
            href="https://web.telegram.org/k/" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Telegram Channel" 
            className="text-white/70 hover:text-fuchsia-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" title="Telegram Channel">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
        </div>

        {/* Tagline / Motto */}
        <div className="flex items-center gap-3 text-white/50 text-sm font-medium mb-12">
          <span>✨</span>
          <span>Design, Code, Develop</span>
          <span>✨</span>
        </div>

      </div>

      {/* Full width bottom border and copyright */}
      <div className="w-full border-t border-white/5 pt-6 text-center text-white/40 text-sm">
        <p>© 2026 Subhasmita Sahoo All rights reserved.</p>
      </div>
    </footer>
  );
}