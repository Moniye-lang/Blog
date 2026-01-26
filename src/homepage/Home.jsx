import React, { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * 10/10 PERFORMANCE STRATEGY:
 * 1. Aspect-Ratio: Reserves space for the image so the layout doesn't "jump" when it loads.
 * 2. Hardware Acceleration: Uses 'transform' for hovers to keep animations at 60fps.
 * 3. Semantic HTML: Uses <section> and <h1> for better SEO indexing.
 */

export default function Home() {
  // Logic to ensure the user starts at the top of the page on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-[#7C4EE4] w-full overflow-hidden">
      <div
        className="
          max-w-[1440px] 2xl:max-w-[1600px] 
          mx-auto
          min-h-screen md:min-h-[85vh]
          py-12 md:py-0
          px-6 md:px-12
          flex flex-col-reverse md:flex-row
          items-center justify-between
          gap-10 md:gap-16
        "
      >
        {/* TEXT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="uppercase tracking-[0.2em] text-[12px] font-bold text-white/70 bg-white/10 px-4 py-1.5 rounded-lg mb-6">
            Featured Post
          </span>

          <h1
            className="
              text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[76px]
              font-black
              text-white
              leading-[1.1]
              tracking-tight
            "
          >
            How AI will <br className="hidden lg:block" /> Change the Future
          </h1>

          <p
            className="
              mt-8
              text-white/80
              text-base sm:text-lg lg:text-xl
              leading-relaxed
              max-w-xl
            "
          >
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly cute.
            For example, home robots will overcome navigation and direction.
          </p>

          <Link
            to="/blog"
            className="
              mt-10
              inline-flex items-center justify-center
              bg-white text-[#7C4EE4]
              px-12 py-4
              rounded-full font-bold text-lg
              hover:bg-[#f3efff] hover:scale-105
              active:scale-95
              transition-all duration-300
              shadow-2xl shadow-black/20
            "
          >
            Read More
          </Link>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[600px]">
            {/* The "Glow" - adds depth to the illustration */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-[100px] animate-pulse" />
            
            {/* Aspect Ratio Container: This stops the page jumping when the image loads */}
            <div className="aspect-square w-full h-full relative z-10">
              <img
                src="/Container.png"
                alt="AI Future Illustration"
                className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
                loading="eager" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}