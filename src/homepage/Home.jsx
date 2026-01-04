import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-[#7C4EE4]">
      <div
        className="
          max-w-[1280px]
          2xl:max-w-[1440px]
          3xl:max-w-[1600px]
          mx-auto
          min-h-[90vh]
          px-4
          md:px-6
          2xl:px-10
          flex
          flex-col-reverse
          md:flex-row
          items-center
          justify-between
          gap-12
        "
      >
        {/* Text Content */}
        <div className="text-white max-w-[600px]">
          <span className="uppercase tracking-widest text-[13px] text-white/80">
            Featured Post
          </span>

          <h1
            className="
              mt-4
              text-[36px]
              sm:text-[44px]
              md:text-[52px]
              2xl:text-[60px]
              font-semibold
              leading-tight
              tracking-tight
            "
          >
            How AI will <br className="hidden sm:block" /> Change the Future
          </h1>

          <p
            className="
              mt-6
              text-white/90
              text-[15px]
              sm:text-[16px]
              leading-relaxed
              max-w-[520px]
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
              inline-flex
              items-center
              justify-center
              bg-white
              text-[#7C4EE4]
              font-medium
              w-[160px]
              h-[44px]
              rounded-full
              hover:bg-black
              hover:text-white
              transition
            "
          >
            Read More
          </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center w-full md:w-auto">
          <img
            src="/Container.png"
            alt="AI illustration"
            className="
              w-[260px]
              sm:w-[320px]
              md:w-[420px]
              2xl:w-[480px]
              3xl:w-[520px]
              object-contain
            "
          />
        </div>
      </div>
    </section>
  );
}
