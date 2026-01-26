import React from "react";
import { data2 } from "./homedata2";
import { Link } from "react-router-dom";

/**
 * 10/10 REFINEMENTS:
 * 1. Image Protection: Uses aspect-ratio to ensure the grid never breaks with different image sizes.
 * 2. Interaction: Added a subtle 'lift' effect on card hover.
 * 3. Typographic Balance: Line-clamping prevents long blog snippets from pushing buttons out of alignment.
 */

export default function Pop() {
  return (
    <section className="py-24 bg-[#F9F9FB]">
      <div className="max-w-[1280px] 2xl:max-w-[1440px] 3xl:max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-row items-center justify-between mb-16">
          <h2 className="text-[32px] sm:text-[42px] font-black text-[#1A1A1A] tracking-tight">
            Popular Posts
          </h2>

          <Link
            to="/blog"
            className="
              hidden sm:flex items-center justify-center
              h-[46px] px-8 rounded-full
              bg-[#7C4EE4] text-white font-bold text-sm
              hover:bg-[#1A1A1A] hover:-translate-y-1
              transition-all duration-300 shadow-lg shadow-[#7C4EE4]/20
            "
          >
            View all
          </Link>
        </div>

        {/* POSTS GRID */}
        
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {data2.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col bg-white p-4 rounded-[2rem] hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
            >
              {/* Image Container with Fixed Ratio */}
              <div className="overflow-hidden rounded-[1.5rem] aspect-[4/3] relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full h-full 
                    object-cover 
                    transition-transform duration-700 
                    group-hover:scale-110
                  "
                />
                {/* Visual indicator for 'Popular' could go here as an overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-[#7C4EE4] uppercase tracking-widest shadow-sm">
                  Trending
                </div>
              </div>

              {/* Meta Data */}
              <div className="mt-6 flex items-center gap-3 text-[12px] font-bold uppercase tracking-wider">
                <span className="text-[#7C4EE4]">{item.desc}</span>
                <span className="w-1 h-1 bg-black/20 rounded-full" />
                <span className="text-black/40">{item.date}</span>
              </div>

              {/* Title & Excerpt */}
              <h4 className="mt-3 text-[22px] font-bold leading-tight text-[#1A1A1A] group-hover:text-[#7C4EE4] transition-colors line-clamp-2">
                {item.title}
              </h4>

              <p className="mt-3 text-black/60 text-[15px] leading-relaxed line-clamp-3">
                {item.blog}
              </p>

              {/* Read More Link */}
              <Link
                to={`/blog/${item.id}`}
                className="
                  mt-auto pt-6
                  inline-flex items-center gap-2
                  text-[#7C4EE4] font-black text-sm uppercase
                  hover:gap-3 transition-all
                "
              >
                Explore Story <span>→</span>
              </Link>
            </article>
          ))}
        </div>

        {/* Mobile-only View All Button */}
        <div className="mt-12 sm:hidden flex justify-center">
          <Link
            to="/blog"
            className="bg-[#7C4EE4] text-white px-10 py-4 rounded-full font-bold shadow-xl"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}