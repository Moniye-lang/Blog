import React from "react";
import { Link } from "react-router-dom";

export default function Highlight() {
  return (
    <section className="py-24 bg-[#F9F9FB]">
      <div
        className="
          max-w-[1280px]
          2xl:max-w-[1440px]
          3xl:max-w-[1600px]
          mx-auto
          px-4
          md:px-6
          2xl:px-10
        "
      >
        {/* Image */}
        <div className="relative">
          <img
            src="/Container (1).png"
            alt="VR and AI"
            className="
              w-full
              h-[260px]
              sm:h-[340px]
              md:h-[420px]
              2xl:h-[480px]
              object-cover
              rounded-2xl
            "
          />

          {/* Overlay Card */}
          <div
            className="
              relative
              md:absolute
              md:right-10
              md:-bottom-16
              bg-white
              rounded-2xl
              shadow-xl
              p-6
              sm:p-8
              md:p-10
              max-w-[520px]
            "
          >
            <div className="flex items-center gap-4 text-sm">
              <span className="font-semibold text-[#7C4EE4] uppercase">
                Development
              </span>
              <span className="text-black/40">14 March 2023</span>
            </div>

            <h3 className="mt-4 text-[22px] sm:text-[26px] font-semibold leading-snug">
              How to make a game look more attractive with new VR & AI technology
            </h3>

            <p className="mt-4 text-black/70 text-[15px] leading-relaxed">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research or building helpful products,
              we’re committed to making AI accessible to everyone.
            </p>

            <Link
            to="/blog"
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                h-[44px]
                px-6
                rounded-full
                border-2
                border-[#7C4EE4]
                text-[#7C4EE4]
                font-medium
                hover:bg-[#7C4EE4]
                hover:text-white
                transition
              "
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
