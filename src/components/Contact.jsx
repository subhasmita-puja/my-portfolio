"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Sphere component matching the 3D look of the reference image
const Sphere = ({ size, position, delay = 0, duration = 20 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: [0.9, 1.05, 0.9],
        y: [0, -15, 10, -10, 0],
        x: [0, 10, -10, 10, 0],
      }}
      transition={{
        duration: duration,
        ease: "easeInOut",
        delay,
        repeat: Infinity,
      }}
      className="absolute rounded-full z-0 flex items-center justify-center"
      style={{
        width: size.width,
        height: size.height,
        ...position,
      }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-400 to-purple-500 shadow-[0_10px_30px_rgba(168,85,247,0.3)]"></div>
      <div className="absolute top-[12%] right-[15%] w-[40%] h-[40%] rounded-full bg-white/70 blur-[4px] md:blur-[6px]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[50%] rounded-full bg-black/20 blur-[10px]"></div>
    </motion.div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // Wait for the EmailJS script (loaded in layout.js) to attach to window
    const initEmailJS = () => {
      if (window.emailjs) {
        window.emailjs.init({ publicKey: "XzrA9PTwuxzaSsunN" });
      }
    };
    if (window.emailjs) {
      initEmailJS();
    } else {
      window.addEventListener("load", initEmailJS);
      return () => window.removeEventListener("load", initEmailJS);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    if (typeof window === "undefined" || !window.emailjs) {
      alert("Email service not available. Please contact directly at subhasmita4602@gmail.com");
      return;
    }

    setSending(true);

    window.emailjs
      .send("service_xbeh6nj", "template_yvev1t8", { name, email, subject, message })
      .then(() => {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        alert("Failed to send email. Please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section
      id="contactMe"
      className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center py-16 px-4"
    >
      {/* Floating sphere background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="relative w-full max-w-[900px] h-screen max-h-[900px]">
          <Sphere size={{ width: "40px", height: "40px" }} position={{ top: "15%", left: "22%" }} delay={1.5} duration={15} />
          <Sphere size={{ width: "180px", height: "180px" }} position={{ top: "35%", left: "15%" }} delay={0} duration={18} />
          <Sphere size={{ width: "90px", height: "90px" }} position={{ bottom: "15%", left: "20%" }} delay={2} duration={22} />
          <Sphere size={{ width: "120px", height: "120px" }} position={{ top: "12%", right: "28%" }} delay={1} duration={20} />
          <Sphere size={{ width: "160px", height: "160px" }} position={{ top: "38%", right: "12%" }} delay={3} duration={19} />
          <Sphere size={{ width: "280px", height: "280px" }} position={{ bottom: "-5%", right: "18%" }} delay={2.5} duration={25} />
          <Sphere size={{ width: "60px", height: "60px" }} position={{ top: "5%", left: "45%" }} delay={0.5} duration={16} />
          <Sphere size={{ width: "75px", height: "75px" }} position={{ top: "75%", left: "8%" }} delay={1.2} duration={21} />
          <Sphere size={{ width: "45px", height: "45px" }} position={{ bottom: "25%", right: "8%" }} delay={3.5} duration={14} />
          <Sphere size={{ width: "80px", height: "80px" }} position={{ top: "-2%", right: "10%" }} delay={2.8} duration={17} />
          <Sphere size={{ width: "35px", height: "35px" }} position={{ bottom: "40%", left: "40%" }} delay={4} duration={12} />
        </div>
      </div>

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-10"
      >
        <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r text-white/90 tracking-wide">
          Let&apos;s <span className="text-fuchsia-400">Connect!</span>
        </p>
          
      </motion.div>

      {/* Glass form container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] md:w-[560px] md:h-[560px] rounded-full relative z-10 flex flex-col items-center justify-center border border-white/10 shadow-2xl bg-white/10 backdrop-blur-md px-6"
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-[240px] sm:max-w-[300px] flex flex-col gap-3 sm:gap-4 relative z-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-9 sm:h-10 rounded-xl bg-white/20 border-none px-4 text-white text-sm placeholder:text-white/60 focus:bg-white/30 focus:outline-none transition-all"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-9 sm:h-10 rounded-xl bg-white/20 border-none px-4 text-white text-sm placeholder:text-white/60 focus:bg-white/30 focus:outline-none transition-all"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full h-9 sm:h-10 rounded-xl bg-white/20 border-none px-4 text-white text-sm placeholder:text-white/60 focus:bg-white/30 focus:outline-none transition-all"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={2}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl bg-white/20 border-none px-4 py-3 text-white text-sm placeholder:text-white/60 focus:bg-white/30 focus:outline-none transition-all resize-none"
            required
          ></textarea>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-full mt-1"
          >
            <button
              type="button"
              onClick={sendEmail}
              disabled={sending}
              className="group relative w-full h-9 sm:h-10 overflow-hidden bg-black/30 backdrop-blur-sm border border-fuchsia-400/80 rounded-full shadow-[0_0_10px_rgba(192,38,211,0.2)] hover:shadow-[0_0_20px_rgba(192,38,211,0.6)] disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <motion.div
                initial={{ height: "20%" }}
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fuchsia-600 to-purple-500 z-0"
              ></motion.div>
              <span className="relative z-10 flex items-center gap-2 text-white font-bold tracking-wider text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
                {sending ? "Sending..." : "Send"}
              </span>
            </button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}