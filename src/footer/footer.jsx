import React from "react";
import { Link } from "react-router-dom";

export default function Foot() {
  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <section className="bg-[#7C4EE4] py-24">
        <div
          className="
            max-w-[900px]
            mx-auto
            px-4
            text-center
            text-white
          "
        >
          <h2 className="text-[32px] sm:text-[40px] font-semibold leading-tight">
            Get our stories delivered from <br className="hidden sm:block" />
            us to your inbox weekly
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="
                h-[48px]
                w-full
                sm:w-[320px]
                px-4
                rounded-full
                text-black
                outline-none
              "
            />
            <button
              className="
                h-[48px]
                px-8
                rounded-full
                border
                border-white
                text-white
                font-medium
                hover:bg-white
                hover:text-[#7C4EE4]
                transition
              "
            >
              Get Started
            </button>
          </div>

          <p className="mt-6 text-white/80 text-[14px] leading-relaxed">
            Get a response tomorrow if you submit by 9pm today.
            If received after 9pm, you’ll get a response the following day.
          </p>
        </div>
      </section>

      {/* Footer Content */}
      <section className="py-20">
        <div
          className="
            max-w-[1280px]
            2xl:max-w-[1440px]
            3xl:max-w-[1600px]
            mx-auto
            px-4
            md:px-6
            2xl:px-10
            text-center
          "
        >
          {/* Logo */}
          <div className="flex flex-col items-center">
            <div className="relative w-[42px] h-[42px]">
              <img
                src="/Vector.png"
                alt="Zarrin logo"
                className="absolute top-0 left-0 w-[38px]"
              />
              <img
                src="/Vector (1).png"
                alt=""
                className="absolute top-[6px] left-[2px] w-[38px]"
              />
            </div>
            <span className="mt-3 text-[28px] font-semibold tracking-tight">
              Zarrin
            </span>
          </div>

          {/* Nav Links */}
          <nav className="mt-10 flex flex-wrap justify-center gap-8 text-black/70">
            <Link to="/" className="hover:text-black transition">Home</Link>
            <Link to="/Blog" className="hover:text-black transition">Blog</Link>
            <Link to="/Blogshow" className="hover:text-black transition">
              Blog Show
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center">
            <img
              src="/Group 237742.png"
              alt="Social icons"
              className="h-[40px] cursor-pointer"
            />
          </div>

          {/* Divider */}
          <hr className="my-12 border-black/10" />

          {/* Copyright */}
          <p className="text-black/50 text-sm">
            © 2023 Ideapeel Inc. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
