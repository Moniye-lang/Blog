import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { blogdata2 } from "./blogdata2";

export default function Blogdets() {
  const [err, setErr] = useState(false);
  const { blogdataId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Find blog based on ID
  const blogs = blogdata2.filter((item) => item.id === parseInt(blogdataId, 10));

  // Redirect if blog doesn't exist
  useEffect(() => {
    if (blogs.length === 0) {
      setErr(true);
      navigate("/Error");
    }
  }, [blogs, navigate]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[900px] mx-auto px-4 md:px-6 2xl:px-10">
        {err ? (
          <div className="text-center text-red-500 text-xl">
            Blog not found! Redirecting...
          </div>
        ) : (
          blogs.map((blog) => (
            <article key={blog.id} className="space-y-12 relative">
              {/* Title */}
              <h1 className="text-[32px] sm:text-[40px] font-bold text-[#333] text-center">
                {blog.title}
              </h1>

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full sm:w-[80%] md:w-[70%] rounded-xl object-cover"
                />
              </div>

              {/* Main Content */}
              <div className="prose max-w-full mx-auto text-[17px] text-black/80 leading-relaxed">
                {blog.mainblog}
              </div>

              {/* Highlighted Section */}
              {blog.end && (
                <div className="mt-10 bg-[#F3F2FF] border-l-4 border-[#7C4EE4] px-6 py-4 rounded-md text-[17px] sm:text-[18px]">
                  {blog.end}
                </div>
              )}

              <hr className="border-black/20" />

              {/* Back to Blogs Button */}
              <div className="mt-10">
                <Link
                  to="/blog"
                  className="
                    inline-block
                    px-6
                    py-3
                    rounded-full
                    bg-[#7C4EE4]
                    text-white
                    font-medium
                    hover:bg-black
                    transition
                  "
                >
                  ← Back to Blogs
                </Link>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
