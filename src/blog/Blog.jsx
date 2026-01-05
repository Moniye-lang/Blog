import React from "react";
import { Link } from "react-router-dom";
import { blogdata2 } from "../blogdetails/blogdata2";
import { useEffect } from "react";

export default function Blog() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  return (
    <section className="py-10 bg-white">
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
        {/* Page Header */}
        <div className="text-center max-w-[720px] mx-auto mb-20">
          <h1 className="text-[32px] sm:text-[40px] font-semibold text-[#333]">
            Our Blogs
          </h1>

          <p className="mt-4 text-black/70 text-[16px]">
            Find all our blogs here. Our articles are written by well-known
            writers and backed by deep research to bring you high-quality
            insights worth reading.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogdata2.map((item) => (
            <article key={item.id} className="group">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="
                    w-full
                    h-[220px]
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              <div className="mt-4 flex items-center gap-4 text-sm">
                <span className="font-semibold text-[#7C4EE4] uppercase">
                  {item.desc}
                </span>
                <span className="text-black/40">{item.date}</span>
              </div>

              <h3 className="mt-2 text-[20px] font-semibold leading-snug">
                {item.title}
              </h3>

              <p className="mt-2 text-black/70 text-[15px] leading-relaxed">
                {item.blog}
              </p>

              <Link
                to={`/blog/${item.id}`}
                className="
                  inline-block
                  mt-4
                  text-[#7C4EE4]
                  font-medium
                  hover:underline
                "
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
