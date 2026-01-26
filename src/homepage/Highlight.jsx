import React from "react";
import { Link } from "react-router-dom";

/**
 * 10/10 DESIGN STRATEGY:
 * 1. Overlap Logic: Uses 'md:translate-y-0' and negative margins to create a more 
 * dynamic floating effect that feels premium.
 * 2. Image Ratio: Fixed height on mobile but auto-scaling on desktop to prevent 
 * the "stretched" look.
 * 3. Interactions: Button scales and changes border color for a high-end feel.
 */

export default function Highlight() {
  return (
    <section className="py-20 md:py-32 bg-[#F9F9FB] overflow-visible">
      <div
        className="
          max-w-[1280px] 2xl:max-w-[1440px] 3xl:max-w-[1600px]
          mx-auto px-6 md:px-12
        "
      >
        <div className="relative flex flex-col items-center">
          
          {/* Main Hero Image */}
          <div className="w-full relative group overflow-hidden rounded-[2rem] shadow-2xl">
            {/* Subtle overlay gradient to make the image "pop" */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            
            <img
              src="/Container (1).png"
              alt="Immersive VR & AI Technology"
              className="
                w-full
                h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]
                object-cover
                transition-transform duration-700 group-hover:scale-105
              "
            />
          </div>

          {/* Floating Information Card */}
          <div
            className="
              relative
              z-20
              mt-[-60px] md:mt-0
              md:absolute
              md:right-12
              md:bottom-[-40px]
              lg:right-20
              bg-white/95
              backdrop-blur-md
              rounded-[2rem]
              shadow-[0_20px_50px_rgba(0,0,0,0.1)]
              p-8 sm:p-10 lg:p-12
              max-w-[90%] md:max-w-[550px]
              border border-white
              transition-all duration-300
              hover:shadow-[0_30px_60px_rgba(124,78,228,0.15)]
            "
          >
            {/* Metadata Bar */}
            <div className="flex items-center gap-4 text-[12px] sm:text-[14px] tracking-widest uppercase mb-6">
              <span className="font-black text-[#7C4EE4]">
                Development
              </span>
              <div className="w-1.5 h-1.5 bg-black/20 rounded-full" />
              <span className="text-black/50 font-medium">14 March 2023</span>
            </div>

            {/* Content Body */}
            <h3 className="text-[24px] sm:text-[32px] font-bold text-[#1A1A1A] leading-[1.2] mb-5">
              How to make a game look more attractive with new VR & AI technology
            </h3>

            <p className="text-black/60 text-[16px] sm:text-[17px] leading-relaxed mb-8">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research or building helpful products.
            </p>

            {/* Call to Action */}
            <Link
              to="/blog"
              className="
                inline-flex items-center justify-center
                h-[52px] px-10
                rounded-full
                border-2 border-[#7C4EE4]
                text-[#7C4EE4]
                text-lg font-bold
                hover:bg-[#7C4EE4]
                hover:text-white
                hover:scale-105
                active:scale-95
                transition-all duration-300
              "
            >
              Read Full Article
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}