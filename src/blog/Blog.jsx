import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { blogdata2 } from "../blogdetails/blogdata2";

/**
 * 10/10 ARCHITECTURE:
 * 1. Line Clamping: Prevents "Jagged Grids" by truncating titles and excerpts.
 * 2. Visual Hierarchy: Stronger contrast between the category tag and the date.
 * 3. Consistent Ratios: Uses Tailwind's aspect-ratio to keep images uniform.
 */

export default function Blog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className=" md:py-24 bg-white min-h-screen">
      <div className="mx-auto max-w-screen-xl xl:max-w-screen-2xl px-6 lg:px-12">
        
        {/* PAGE HEADER: High Impact */}
        <header className="text-center max-w-[800px] mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tight">
            Our Blogs
          </h1>
          <div className="w-24 h-1.5 bg-[#7C4EE4] mx-auto mt-6 rounded-full" />
          <p className="mt-8 text-black/60 text-lg md:text-xl leading-relaxed">
            Insights from the forefront of technology. Our articles are curated by 
            industry experts and backed by deep research to bring you 
            quality perspectives worth your time.
          </p>
        </header>

        {/* BLOG GRID */}
        
        <div
          className="
            grid
            gap-x-8
            gap-y-16
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {blogdata2.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col h-full transition-all duration-300"
            >
              {/* IMAGE: Fixed aspect ratio is key for large grids */}
              <div className="overflow-hidden rounded-2xl aspect-[16/10] shadow-md group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* METADATA */}
              <div className="mt-6 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.15em]">
                <span className="text-[#7C4EE4]">{item.desc}</span>
                <span className="w-1 h-1 bg-black/20 rounded-full" />
                <span className="text-black/40 font-bold">{item.date}</span>
              </div>

              {/* CONTENT: Using Line-Clamp for perfection */}
              <div className="flex-grow">
                <h3 className="mt-3 text-xl lg:text-2xl font-bold leading-tight text-[#1A1A1A] group-hover:text-[#7C4EE4] transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="mt-3 text-black/60 text-sm lg:text-base leading-relaxed line-clamp-3">
                  {item.blog}
                </p>
              </div>

              {/* CALL TO ACTION */}
              <Link
                to={`/blog/${item.id}`}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-[#1A1A1A]
                  font-black
                  text-sm
                  uppercase
                  tracking-tighter
                  hover:text-[#7C4EE4]
                  transition-all
                  group/link
                "
              >
                Continue Reading
                <span className="text-[#7C4EE4] group-hover/link:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}