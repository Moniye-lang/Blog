import React from "react";
import { data } from "./homedata";
import { Link } from "react-router-dom";

export default function Recents() {
  return (
    <section className="py-24 bg-white">
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
        {/* Section Header */}
        <div className="flex items-center justify-between mb-14">
          <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#333]">
            Our Recent Posts
          </h2>

          <Link
            to="/blog"
            className="
              h-[42px]
              px-6
              rounded-full
              bg-[#7C4EE4]
              text-white
              font-medium
              flex
              items-center
              justify-center
              hover:bg-black
              transition
            "
          >
            View all
          </Link>
        </div>

        {/* Featured Post */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <img
            src="/Container (2).png"
            alt="Featured post"
            className="
              w-full
              h-[260px]
              sm:h-[340px]
              md:h-[400px]
              object-cover
              rounded-2xl
            "
          />

          <div>
            <div className="flex items-center gap-4 text-sm mb-3">
              <span className="font-semibold text-[#7C4EE4] uppercase">
                Development
              </span>
              <span className="text-black/40">14 March 2023</span>
            </div>

            <h3 className="text-[24px] sm:text-[30px] font-semibold leading-snug">
              How to make a game look more attractive with new VR & AI technology
            </h3>

            <p className="mt-4 text-black/70 leading-relaxed max-w-[520px]">
              Google has been investing in AI for many years and bringing its
              benefits to individuals, businesses and communities. Whether it’s
              publishing state-of-the-art research or building helpful products,
              we’re committed to making AI accessible to everyone.
            </p>

            <Link
              to="/blog"
              className="
                inline-flex
                mt-6
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
                justify-center 
                items-center
              "
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <article
              key={item.id}
              className="group cursor-pointer"
            >
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

              <h4 className="mt-2 text-[20px] font-semibold leading-snug">
                {item.title}
              </h4>

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
