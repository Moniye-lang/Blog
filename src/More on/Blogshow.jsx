import React from "react";
import { data } from "./data";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blogshow() {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 2xl:px-10 space-y-12">
        {/* Blog Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex gap-4 text-sm text-[#333] font-bold">
            <span>DEVELOPMENT</span>
            <span>16 March 2023</span>
          </div>
          <h1 className="text-[32px] sm:text-[40px] font-bold text-[#333]">
            How to make a Game look more attractive with New VR & AI Technology
          </h1>
        </div>

        {/* Main Image */}
        <div className="flex justify-center">
          <img
            src="Container (2).png"
            alt="Blog Main"
            className="w-full sm:w-[80%] md:w-[70%] rounded-xl object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="space-y-6 text-black/80 text-[17px] leading-relaxed max-w-[900px] mx-auto">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam,
            maiores. Totam mollitia sed quaerat vitae impedit in. Repellendus
            repudiandae quod quia reiciendis ipsam ab magnam dolorum quibusdam
            aliquam nobis deleniti, illum quas labore libero! Dolorem nisi ipsum
            aliquam quis voluptatum qui nostrum? Sequi, quis quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe
            eligendi exercitationem sit eveniet doloremque libero ducimus quod,
            voluptas obcaecati consequatur illo dolorem cum rem. Soluta quas
            expedita debitis corrupti ducimus minus doloribus eum, exercitationem
            ad dignissimos eaque explicabo reprehenderit delectus ipsam
            consequuntur voluptatibus totam?
          </p>

          {/* Highlight / Quote */}
          <div className="flex items-start gap-4 bg-[#F3F2FF] border-l-4 border-[#7C4EE4] px-6 py-4 rounded-md">
            <div className="w-[8px] h-[100px] bg-[#7C4EE4]"></div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              neque eos aliquid architecto repellat debitis non quisquam provident
              repellendus aspernatur.
            </p>
          </div>
          <p className="font-bold text-right">- Pedro Domingos</p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vitae
            esse nulla doloribus ipsa unde aliquid doloremque aspernatur
            voluptatem, atque sint soluta! Eos quas autem excepturi rerum
            expedita quo laudantium odio! Itaque aperiam sapiente perferendis
            temporibus aut eligendi mollitia aspernatur vitae, dicta dolore cum
            quisquam soluta id ab obcaecati.
          </p>

          <div className="flex justify-center">
            <img
              src="Image.png"
              alt="Blog Secondary"
              className="w-full sm:w-[80%] md:w-[60%] rounded-xl object-cover"
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero
            eos velit nesciunt! Inventore perspiciatis nulla iure expedita velit
            voluptates ex repudiandae, reprehenderit enim voluptas quod ipsa? Iusto
            vel iure at adipisci nulla ex, ducimus, aliquam minus.
          </p>
        </div>

        {/* Popular Posts Section */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <h3 className="text-[32px] sm:text-[40px] font-medium text-[#333]">
              Popular Posts
            </h3>
            <Link
              to="/blog"
              className="bg-[#7C4EE4] text-white px-6 py-2 rounded-full font-medium hover:bg-black transition"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <div key={item.id} className="group">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[220px] object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <span className="font-semibold text-[#7C4EE4] uppercase">
                    {item.desc}
                  </span>
                  <span className="text-black/40">{item.date}</span>
                </div>
                <h4 className="mt-2 text-[20px] font-semibold">{item.title}</h4>
                <p className="text-black/70 text-[15px] leading-relaxed mt-2">
                  {item.blog}
                </p>
                <Link
                  to={`/blog/${item.id}`}
                  className="inline-block mt-4 text-[#7C4EE4] font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Blogs Button */}
        <div className="mt-12">
          <Link
            to="/blog"
            className="inline-block px-6 py-3 rounded-full bg-[#7C4EE4] text-white font-medium hover:bg-black transition"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
