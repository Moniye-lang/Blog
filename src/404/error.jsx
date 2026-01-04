import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-[#7C4EE4] rounded-xl shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-[100px] sm:text-[120px] font-bold text-white">404</h1>
        <p className="text-white text-lg mt-4">
          Oops! The page you are looking for does not exist. <br />
          Try refreshing or go back to Home.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-white text-[#7C4EE4] font-semibold hover:bg-black hover:text-white transition"
          >
            Go to Home
          </Link>
          <Link
            to="/blog"
            className="px-6 py-3 rounded-full bg-white text-[#7C4EE4] font-semibold hover:bg-black hover:text-white transition"
          >
            Go to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
