import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <section className="bg-[#7C4EE4]">
      <div
        className="
          max-w-[1280px] 2xl:max-w-[1440px] 3xl:max-w-[1600px]
          mx-auto
         min-h-[auto] 
         md:min-h-[80vh]
         py-12 sm:py-16 md:py-0
          px-4 md:px-6 2xl:px-10
          flex flex-col-reverse md:flex-row
          items-center
          gap-2 md:gap-12
        "       
      >
        {/* Text Content */}
        <div className="text-white w-full md:w-[50%] text-center md:text-left">
          <span className="uppercase tracking-widest text-[13px] text-white/80">
            Featured Post
          </span>

          <h1
            className="
              mt-4
              text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] 2xl:text-[60px]
              font-semibold
              leading-tight
              tracking-tight
            "
          >
            How AI will <br className="hidden sm:block" /> Change the Future
          </h1>

          <p
            className="
              mt-4 sm:mt-6
              text-white/90
              text-[14px] sm:text-[15px] md:text-[16px]
              leading-relaxed
              max-w-full
              mx-auto md:mx-0
            "
          >
            The future of AI will see home robots having enhanced intelligence,
            increased capabilities, and becoming more personal and possibly cute.
            For example, home robots will overcome navigation and direction.
          </p>

          <Link
            to="/blog"
            className="
              mt-6 sm:mt-8
              inline-flex items-center justify-center
              bg-white text-[#7C4EE4] font-medium
              w-[140px] sm:w-[160px] h-[40px] sm:h-[44px]
              rounded-full
              hover:bg-[#E0D4FF] hover:text-[#7C4EE4]
              transition
              mx-auto md:mx-0
            "
          >
            Read More
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center w-full md:w-[50%]">
          <img
            src="/Container.png"
            alt="AI illustration"
            className="
              w-[200px] sm:w-[260px] md:w-[360px] lg:w-[420px] 2xl:w-[480px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
