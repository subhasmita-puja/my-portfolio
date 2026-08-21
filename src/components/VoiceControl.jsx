"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Map every voice command keyword group to a section's DOM id.
// Add/remove keywords here if you want the mic to understand more phrases.
const COMMANDS = [
  { id: "hero", label: "Myself", keywords: ["home", "hero", "myself", "top", "yourself"] },
  { id: "about", label: "About", keywords: ["about", "about me", "who are you"] },
  { id: "skills", label: "Skills", keywords: ["skill", "skills", "tech stack"] },
  { id: "experience", label: "Experience", keywords: ["experience", "work experience", "work history", "career"] },
  { id: "projects", label: "Projects", keywords: ["project", "projects", "portfolio", "show projects"] },
  { id: "services", label: "Services", keywords: ["service", "services", "what do you offer"] },
  { id: "contactMe", label: "Contact", keywords: ["contact", "contact me", "get in touch", "email"] },
];

function matchCommand(transcript) {
  const text = transcript.toLowerCase();
  return COMMANDS.find((cmd) => cmd.keywords.some((kw) => text.includes(kw)));
}

// The capsule + arc mic glyph, reused for both the floating button and the overlay.
function MicGlyph({ className }) {
  return (
    <svg viewBox="0 0 100 140" className={className} fill="none">
      <rect x="30" y="4" width="40" height="72" rx="20" fill="currentColor" />
      <path
        d="M14 58a36 36 0 0 0 72 0"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <line x1="50" y1="94" x2="50" y2="116" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <line x1="30" y1="128" x2="70" y2="128" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

// Equalizer-style bars that bounce while listening, purely decorative.
function WaveformBars({ active }) {
  const bars = [0.4, 0.9, 0.6, 1, 0.5, 0.8, 0.45];
  return (
    <div className="flex items-end justify-center gap-1 h-6">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full bg-gradient-to-t from-fuchsia-400 via-purple-400 to-sky-400"
          animate={
            active
              ? { height: [`${h * 24}%`, "100%", `${h * 40}%`, "70%", `${h * 24}%`] }
              : { height: "20%" }
          }
          transition={{
            repeat: active ? Infinity : 0,
            duration: 0.9 + i * 0.07,
            ease: "easeInOut",
          }}
          style={{ height: "20%" }}
        />
      ))}
    </div>
  );
}

export default function VoiceControl() {
  const [supported, setSupported] = useState(true);
  const [listening, setListening] = useState(false);
  const [statusText, setStatusText] = useState("Listening...");
  const [toast, setToast] = useState(null);
  const recognitionRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  const speak = useCallback((message) => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1.15;
    utterance.volume = 0.85;

    const assignVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(
        (v) =>
          v.lang.startsWith("en") &&
          /female|zira|samantha|google us english/i.test(v.name)
      );
      utterance.voice = femaleVoice || voices.find((v) => v.lang.startsWith("en"));
      window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
      assignVoice();
    } else {
      window.speechSynthesis.onvoiceschanged = assignVoice;
    }
  }, []);

  const showToast = useCallback((message, duration = 2000) => {
    clearTimeout(toastTimeoutRef.current);
    setToast(message);
    toastTimeoutRef.current = setTimeout(() => setToast(null), duration);
  }, []);

  const runCommand = useCallback(
    (transcript) => {
      const cmd = matchCommand(transcript);

      if (!cmd) {
        setStatusText("Try again");
        showToast("Command not recognized", 1800);
        speak("Sorry, I didn't catch that. Please try again.");
        return;
      }

      const el = document.getElementById(cmd.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      setStatusText(`Going to ${cmd.label}`);
      showToast(`✓ ${cmd.label}`, 1600);
      speak(`Command Executed to ${cmd.label} Section Succesfully`);
    },
    [showToast, speak]
  );

  useEffect(() => {
    const SpeechRecognition =
      typeof window !== "undefined" &&
      (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
      setStatusText("Listening...");
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      runCommand(transcript);
    };

    recognition.onerror = () => {
      setStatusText("Try again...");
      showToast("Voice error, try again", 1800);
    };

    recognition.onend = () => {
      setTimeout(() => setListening(false), 900);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.onstart = null;
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
    };
  }, [runCommand, showToast]);

  const handleMicClick = () => {
    if (!recognitionRef.current || listening) return;
    try {
      recognitionRef.current.start();
    } catch {
      // Ignore "already started" errors from double clicks
    }
  };

  if (!supported) return null;

  // Shared aurora gradient used by the button halo and the overlay rings.
  const auroraGradient =
    "conic-gradient(from 0deg, #4AB1F1 0%, #A855F7 25%, #D946EF 50%, #DC2430 75%, #4AB1F1 100%)";

  return (
    <>
      {/* Floating mic button */}
      <div className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-[1000]">
        {/* Idle breathing halo */}
        {!listening && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ background: auroraGradient, filter: "blur(10px)" }}
            animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.9, 1.15, 0.9] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        )}

        <motion.button
          onClick={handleMicClick}
          aria-label="Activate voice navigation"
          title="Click and say a section name: about, skills, experience, projects, services, contact"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          animate={
            listening
              ? { scale: [1, 1.1, 1], boxShadow: ["0 0 20px rgba(217,70,239,0.5)", "0 0 40px rgba(217,70,239,0.85)", "0 0 20px rgba(217,70,239,0.5)"] }
              : { scale: 1 }
          }
          transition={{ repeat: listening ? Infinity : 0, duration: 1.1, ease: "easeInOut" }}
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-[0_0_20px_rgba(217,70,239,0.5)]"
        >
          {/* Rotating gradient ring border */}
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ background: auroraGradient }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
          {/* Inner glass fill so only a ring of gradient shows */}
          <span className="absolute inset-[3px] rounded-full bg-[#0a0a0a]/90 backdrop-blur-md" />

          <MicGlyph className="relative z-10 w-5 h-7 sm:w-6 sm:h-8 text-white drop-shadow-[0_0_6px_rgba(217,70,239,0.8)]" />
        </motion.button>
      </div>

      {/* Small toast, e.g. "✓ Projects" */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-24 right-5 sm:bottom-28 sm:right-8 z-[1000] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-purple-600 shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen listening overlay, aurora rings + mic + equalizer */}
      <AnimatePresence>
        {listening && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-lg"
          >
            {/* Ambient background pulse */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(168,85,247,0.15), transparent 60%)",
              }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
       
              {/* Middle ring, counter-rotating */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute inset-6 rounded-full opacity-60 blur-[1px]"
                style={{
                  background: auroraGradient,
                  WebkitMask: "radial-gradient(circle, transparent 66%, black 70%)",
                  mask: "radial-gradient(circle, transparent 66%, black 70%)",
                }}
              />
              {/* Inner pulsing ring */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="absolute inset-14 rounded-full opacity-70"
                style={{
                  background: auroraGradient,
                  WebkitMask: "radial-gradient(circle, transparent 60%, black 70%)",
                  mask: "radial-gradient(circle, transparent 60%, black 70%)",
                }}
              />

              {/* Center glass sphere with mic glyph */}
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="relative z-10 flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_30px_rgba(217,70,239,0.5)]"
              >
                <MicGlyph className="w-9 h-12 sm:w-10 sm:h-14 text-white/90 drop-shadow-[0_0_10px_rgba(217,70,239,0.7)]" />
              </motion.div>
            </div>

            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mt-8 text-white text-xl sm:text-2xl font-semibold tracking-wide drop-shadow-[0_0_12px_rgba(217,70,239,0.7)]"
            >
              {statusText}
            </motion.p>

            <div className="mt-4">
              <WaveformBars active={listening} />
            </div>

            <p className="mt-6 text-white/45 text-xs sm:text-sm tracking-wide text-center px-6">
              Say: about &middot; skills &middot; experience &middot; projects &middot; services &middot; contact
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}