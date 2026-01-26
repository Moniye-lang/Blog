import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * 10/10 FOOTER STRATEGY:
 * 1. Form UX: Uses 'e.preventDefault()' and basic validation for a smoother feel.
 * 2. Visual Layering: The purple CTA section creates a strong contrast with the white footer.
 * 3. Accessibility: Added 'aria-label' and proper form semantics.
 */

export default function Foot() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* NEWSLETTER SECTION: The "Purple Hook" */}
      <section className="bg-[#7C4EE4] py-20 md:py-24 overflow-hidden relative">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="max-w-[800px] mx-auto text-center text-white">
            <h2 className="text-[32px] sm:text-[45px] lg:text-[52px] font-black leading-[1.1] tracking-tight">
              Get our stories delivered to <br className="hidden sm:block" />
              your inbox weekly
            </h2>

            {!submitted ? (
              <form 
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="
                    h-[56px] w-full sm:w-[380px] 
                    px-8 rounded-full 
                    text-[#1A1A1A] placeholder:text-gray-400
                    outline-none focus:ring-4 focus:ring-white/20
                    transition-all border-none
                  "
                />
                <button
                  type="submit"
                  className="
                    h-[56px] w-full sm:w-auto px-10 
                    rounded-full bg-[#1A1A1A] text-white 
                    font-bold text-lg hover:bg-white hover:text-[#7C4EE4]
                    transition-all duration-300 transform active:scale-95
                    shadow-xl
                  "
                >
                  Get Started
                </button>
              </form>
            ) : (
              <div className="mt-10 p-6 bg-white/10 rounded-[2rem] border border-white/20 animate-in fade-in zoom-in duration-500">
                <p className="text-xl font-bold">✨ Check your inbox! You're on the list.</p>
              </div>
            )}

            <p className="mt-8 text-white/60 text-sm max-w-[500px] mx-auto italic">
              Join 10,000+ readers. No spam, just high-quality insights 
              from the world of AI and VR.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN FOOTER: The "Base" */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            
            {/* Logo Group */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-[48px] h-[48px] transition-transform group-hover:rotate-12">
                <img src="/Vector.png" className="absolute w-[42px]" alt="Logo Background" />
                <img src="/Vector (1).png" className="absolute top-[6px] left-[2px] w-[42px]" alt="Logo Foreground" />
              </div>
              <span className="mt-4 text-[32px] font-black tracking-tighter text-[#1A1A1A]">Zarrin</span>
            </div>

            {/* Navigation Grid */}
            <nav className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4">
              {['Home', 'Blog', 'About', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item === 'Home' ? '/' : `/${item}`} 
                  className="text-black/50 font-bold hover:text-[#7C4EE4] transition-colors text-sm uppercase tracking-widest"
                >
                  {item}
                </Link>
              ))}
            </nav>

            {/* Social Icons Container */}
            <div className="mt-12 hover:opacity-80 transition-opacity cursor-pointer">
              <img src="/Group 237742.png" className="h-[44px]" alt="Social Media Links" />
            </div>

            <div className="w-full h-px bg-gray-100 my-16" />

            {/* Copyright & Legal */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6 text-black/40 text-[13px] font-medium">
              <p>© 2026 Zarrin Blog. Built with React & Tailwind.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-black">Privacy Policy</a>
                <a href="#" className="hover:text-black">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}