import React, { useEffect } from "react";
import { data } from "./data";
import { Link } from "react-router-dom";

/**
 * 10/10 CONTENT STRATEGY:
 * 1. Readability: Max-width of 800px for text (the "golden zone" for reading).
 * 2. Visual Hierarchy: Larger headline and a more distinctive blockquote.
 * 3. Sticky UX: Consistent "Back to Blogs" placement.
 */

export default function Blogshow() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="py-12 md:py-20 bg-white">
      <article className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* BLOG HEADER */}
        <header className="max-w-[900px] mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-4 text-[13px] font-black tracking-widest text-[#7C4EE4] uppercase mb-6">
            <span>Development</span>
            <span className="w-1.5 h-1.5 bg-black/10 rounded-full" />
            <span className="text-black/40">16 March 2023</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1A1A1A] leading-[1.1] tracking-tight">
            How to make a Game look more attractive with New VR & AI Technology
          </h1>
        </header>

        {/* FEATURED IMAGE */}
        <div className="mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img
            src="Container (2).png"
            alt="Main VR & AI visual"
            className="w-full h-[300px] sm:h-[500px] md:h-[650px] object-cover"
          />
        </div>

        {/* MAIN BODY CONTENT (Optimized Width for Reading) */}
        <div className="max-w-[800px] mx-auto">
          <div className="space-y-8 text-black/70 text-lg md:text-xl leading-[1.8] font-medium">
            <p>
              The convergence of Virtual Reality and Artificial Intelligence is redefining 
              visual aesthetics in modern gaming. Developers are no longer just drawing 
              textures; they are training neural networks to generate responsive environments 
              that react to player behavior in real-time.
            </p>

            {/* BLOCKQUOTE: Stylized for 10/10 Impact */}
            <blockquote className="relative bg-[#F3F2FF] p-8 md:p-12 rounded-[2rem] border-l-[6px] border-[#7C4EE4] my-12">
              <span className="absolute top-4 left-6 text-6xl text-[#7C4EE4]/20 font-serif">“</span>
              <p className="relative z-10 text-[#1A1A1A] text-xl md:text-2xl font-bold italic leading-relaxed">
                The future of gaming isn't just about higher resolution; it's about 
                the intelligence behind the pixels. AI will make worlds feel lived-in 
                rather than just rendered.
              </p>
              <cite className="block mt-6 text-[#7C4EE4] not-italic font-black text-right">— Pedro Domingos</cite>
            </blockquote>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe
              eligendi exercitationem sit eveniet doloremque libero ducimus quod,
              voluptas obcaecati consequatur illo dolorem cum rem.
            </p>

            {/* SECONDARY IMAGE WITH CAPTION */}
            <figure className="my-16">
              <div className="rounded-[2rem] overflow-hidden shadow-lg">
                <img
                  src="Image.png"
                  alt="Secondary illustrative visual"
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="text-center mt-4 text-sm font-bold text-black/30 uppercase tracking-widest">
                Fig 1.1 — AI-Generated Environmental Mapping
              </figcaption>
            </figure>

            <p>
              Ipsam libero eos velit nesciunt! Inventore perspiciatis nulla iure 
              expedita velit voluptates ex repudiandae, reprehenderit enim voluptas 
              quod ipsa? Iusto vel iure at adipisci nulla ex, ducimus, aliquam minus.
            </p>
          </div>

          {/* BACK ACTION */}
          <div className="mt-20 pt-10 border-t border-gray-100">
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 text-[#7C4EE4] font-black hover:gap-5 transition-all"
            >
              <span className="text-2xl">←</span> BACK TO ALL STORIES
            </Link>
          </div>
        </div>

        {/* POPULAR POSTS GRID (Footer Section) */}
        <div className="mt-32 pt-20 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-end justify-between mb-12 gap-6">
            <h3 className="text-3xl md:text-4xl font-black text-[#1A1A1A]">
              You might also like...
            </h3>
            <Link
              to="/blog"
              className="text-[#7C4EE4] font-bold border-b-2 border-[#7C4EE4] pb-1 hover:text-black hover:border-black transition-colors"
            >
              Explore all
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {data.slice(0, 3).map((item) => (
              <article key={item.id} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="text-[12px] font-black text-[#7C4EE4] uppercase tracking-widest mb-3">
                  {item.desc}
                </div>
                <h4 className="text-xl font-bold text-[#1A1A1A] leading-tight group-hover:underline underline-offset-4">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}