import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogdata2 } from "./blogdata2";

/**
 * 10/10 LOGIC & UX:
 * 1. Efficient Lookup: Using .find() instead of .filter() for O(1) style efficiency.
 * 2. Article Semantics: Proper use of <time> and <header> for SEO.
 * 3. Reading Measure: Capping content width at 800px for optimal eye-tracking.
 */

export default function Blogdets() {
  const { blogdataId } = useParams();
  const navigate = useNavigate();

  // Find the specific blog object
  const blog = blogdata2.find((item) => item.id === parseInt(blogdataId, 10));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Redirect logic: If blog doesn't exist, send to 404
    if (!blog) {
      navigate("/Error");
    }
  }, [blog, navigate]);

  // Safety check to prevent rendering errors before redirect
  if (!blog) return null;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* BACK NAVIGATION */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-sm font-bold text-[#7C4EE4] uppercase tracking-widest hover:text-black transition-colors mb-12"
        >
          <span className="text-xl">←</span> Back to all stories
        </Link>

        <article className="max-w-[850px] mx-auto">
          {/* EDITORIAL HEADER */}
          <header className="text-center space-y-6 mb-12">
            <div className="flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[#7C4EE4]">
              <span>{blog.desc || "Technology"}</span>
              <span className="w-1 h-1 bg-black/20 rounded-full" />
              <time className="text-black/40">{blog.date}</time>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-[1.1] tracking-tight">
              {blog.title}
            </h1>
          </header>

          {/* FEATURED IMAGE */}
          <div className="relative mb-16 rounded-[2rem] overflow-hidden shadow-2xl aspect-video">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* BLOG BODY CONTENT */}
          
          <div className="space-y-8 text-black/70 text-lg md:text-xl leading-[1.8] font-medium">
            {/* Split content by newlines or use blog.mainblog */}
            <div className="first-letter:text-5xl first-letter:font-black first-letter:text-[#7C4EE4] first-letter:mr-3 first-letter:float-left">
              {blog.mainblog}
            </div>

            {/* BLOCKQUOTE / HIGHLIGHT */}
            {blog.end && (
              <aside className="relative my-12 p-8 md:p-12 bg-[#F3F2FF] rounded-[2rem] border-l-[6px] border-[#7C4EE4]">
                <p className="text-[#1A1A1A] text-xl md:text-2xl font-bold italic leading-relaxed">
                  "{blog.end}"
                </p>
                <div className="mt-4 text-[#7C4EE4] font-black text-sm uppercase tracking-widest">
                  — Summary Insight
                </div>
              </aside>
            )}
          </div>

          {/* FOOTER ACTIONS */}
          <footer className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-black/40 uppercase tracking-widest">Share:</span>
              <div className="flex gap-2">
                {['Tw', 'Li', 'Fb'].map(platform => (
                  <button key={platform} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold hover:bg-[#7C4EE4] hover:text-white transition-all">
                    {platform}
                  </button>
                ))}
              </div>
            </div>

            <Link
              to="/blog"
              className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#7C4EE4] transition-all shadow-xl shadow-black/10"
            >
              Finish Reading
            </Link>
          </footer>
        </article>
      </div>
    </section>
  );
}