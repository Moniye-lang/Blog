import React from "react";
import { data } from "./homedata";
import { Link } from "react-router-dom";

/**
 * 10/10 UX STRATEGY:
 * 1. Visual Anchor: The "Featured" post uses a horizontal layout to break the grid pattern.
 * 2. Card Consistency: Ensuring all images have the same aspect ratio to prevent a "jagged" grid.
 * 3. Typography: Using a darker #1A1A1A for titles to improve readability against the white background.
 */

export default function Recents() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] 2xl:max-w-[1440px] 3xl:max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-[36px] md:text-[48px] font-black text-[#1A1A1A] tracking-tight">
              Our Recent Posts
            </h2>
            <div className="w-20 h-1.5 bg-[#7C4EE4] rounded-full" />
          </div>

          <Link
            to="/blog"
            className="
              group flex items-center gap-2
              h-[50px] px-8 rounded-full
              bg-[#7C4EE4] text-white font-bold
              hover:bg-[#1A1A1A] transition-all duration-300
              shadow-lg shadow-[#7C4EE4]/20
            "
          >
            View all posts
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </header>

        {/* FEATURED POST (Horizontal Spotlight) */}
        <div className="group relative grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-24 p-6 sm:p-0 rounded-3xl transition-all">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/Container (2).png"
              alt="Featured post"
              className="
                w-full h-[300px] sm:h-[400px] lg:h-[450px]
                object-cover transition-transform duration-700
                group-hover:scale-105
              "
            />
          </div>

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase mb-4">
              <span className="text-[#7C4EE4]">Development</span>
              <span className="w-1 h-1 bg-black/20 rounded-full" />
              <span className="text-black/40">14 March 2023</span>
            </div>

            <h3 className="text-[28px] lg:text-[40px] font-bold leading-[1.2] text-[#1A1A1A] mb-6">
              How to make a game look more attractive with new VR & AI technology
            </h3>

            <p className="text-black/60 text-lg leading-relaxed mb-8 max-w-[550px]">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. We’re committed 
              to making AI accessible to everyone.
            </p>

            <Link
              to="/blog"
              className="
                h-[52px] px-10 rounded-full
                border-2 border-[#7C4EE4] text-[#7C4EE4]
                font-bold hover:bg-[#7C4EE4] hover:text-white
                transition-all duration-300
              "
            >
              Read Featured Story
            </Link>
          </div>
        </div>

        {/* POSTS GRID (The "Wall" of content) */}
        
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <article key={item.id} className="flex flex-col group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-6 shadow-md">
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-wider mb-3">
                <span className="text-[#7C4EE4]">{item.desc}</span>
                <span className="text-black/30">{item.date}</span>
              </div>

              <h4 className="text-[22px] font-bold text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#7C4EE4] transition-colors">
                {item.title}
              </h4>

              <p className="text-black/60 text-[15px] leading-relaxed line-clamp-3 mb-6">
                {item.blog}
              </p>

              <Link
                to={`/blog/${item.id}`}
                className="
                  mt-auto flex items-center gap-2
                  text-[#1A1A1A] font-black text-sm
                  uppercase tracking-tighter
                  hover:text-[#7C4EE4] transition-colors
                "
              >
                Learn More 
                <span className="text-[#7C4EE4] group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}