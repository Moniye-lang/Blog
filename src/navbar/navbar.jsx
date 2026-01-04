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
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/90 border-b border-black/5">
        <nav className="max-w-[1280px] 2xl:max-w-[1440px] mx-auto h-[80px] px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-[34px] h-[34px]">
              <img src="/Vector.png" alt="Zarrin" className="absolute w-[30px]" />
              <img
                src="/Vector (1).png"
                alt=""
                className="absolute top-[6px] left-[2px] w-[30px]"
              />
            </div>
            <span className="text-[24px] font-semibold text-black">
              Zarrin
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-[15px] font-medium transition ${
                    isActive
                      ? "text-black"
                      : "text-black/60 hover:text-[#7C4EE4]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <button className="p-2 rounded-full hover:bg-black/5 transition">
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* RIGHT Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-screen w-[280px]
          bg-white z-50
          transform transition-transform duration-300
          md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-5 h-[80px] border-b">
          <span className="text-[20px] font-semibold">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-black/5"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col px-6 pt-8 gap-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-[17px] font-medium transition ${
                  isActive
                    ? "text-[#7C4EE4]"
                    : "text-black/80 hover:text-[#7C4EE4]"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Search */}
          <button className="flex items-center gap-3 mt-6 text-black/70 hover:text-[#7C4EE4] transition">
            <Search size={20} />
            Search
          </button>
        </div>
      </aside>
    </>
  );
}
