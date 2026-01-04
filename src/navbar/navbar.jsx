import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/Blog" },
    { name: "Blog Show", path: "/Blogshow" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-black/5">
      <nav
        className="
          max-w-[1280px]
          2xl:max-w-[1440px]
          3xl:max-w-[1600px]
          mx-auto
          h-[80px]
          2xl:h-[90px]
          px-4
          md:px-6
          2xl:px-10
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-[34px] h-[34px] 2xl:w-[38px] 2xl:h-[38px]">
            <img
              src="/Vector.png"
              alt="Zarrin logo"
              className="absolute top-0 left-0 w-[30px] 2xl:w-[34px]"
            />
            <img
              src="/Vector (1).png"
              alt=""
              className="absolute top-[6px] left-[2px] w-[30px] 2xl:w-[34px]"
            />
          </div>

          <span
            className="
              text-[24px]
              2xl:text-[26px]
              font-semibold
              tracking-tight
              text-black
              group-hover:opacity-80
              transition
            "
          >
            Zarrin
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 2xl:gap-12">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                relative
                text-[15px]
                2xl:text-[16px]
                font-medium
                transition
                ${
                  isActive
                    ? "text-black"
                    : "text-black/60 hover:text-black"
                }
                `
              }
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}

          <button className="p-2 rounded-full hover:bg-black/5 transition">
            <Search size={18} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-black/5 transition"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${open ? "max-h-[320px]" : "max-h-0"}
        `}
      >
        <div className="bg-white px-6 py-4 flex flex-col gap-4 border-t">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-[16px] font-medium text-black/80 hover:text-black"
            >
              {item.name}
            </Link>
          ))}

          <button className="flex items-center gap-2 pt-2 text-black/70">
            <Search size={18} />
            Search
          </button>
        </div>
      </div>
    </header>
  );
}
