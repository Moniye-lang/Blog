import React, { useState, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

/**
 * 10/10 UX STRATEGY:
 * 1. Scroll Lock: Disables background scrolling when the mobile menu is active.
 * 2. Visual Polish: Uses backdrop-blur and thin borders for a modern "Glassmorphism" look.
 * 3. Accessibility: Improved aria-labels and keyboard navigation.
 */

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close on Escape & Handle Scroll Lock
  useEffect(() => {
    const closeOnEscape = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    
    if (open) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Blog Show", path: "/blogshow" },
  ];

  return (
    <>
      {/* HEADER: Sticky & Blurry */}
      <header className="sticky top-0 z-[100] backdrop-blur-md bg-white/80 border-b border-gray-100 transition-all duration-300">
        <nav className="mx-auto max-w-[1440px] px-6 md:px-12 h-[72px] flex items-center justify-between">
          
          {/* LOGO: Animated on Hover */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 transition-transform group-hover:scale-110">
              <img src="/Vector.png" alt="Zarrin Logo" className="absolute w-8" />
              <img
                src="/Vector (1).png"
                alt=""
                className="absolute top-[5px] left-[2px] w-8 opacity-80"
              />
            </div>
            <span className="text-2xl font-black text-[#1A1A1A] tracking-tighter">
              Zarrin
            </span>
          </Link>

          {/* DESKTOP NAV: Spacing and Indicators */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative py-2 text-sm font-bold uppercase tracking-widest transition-all
                    ${isActive 
                        ? "text-[#7C4EE4] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#7C4EE4]" 
                        : "text-black/50 hover:text-[#7C4EE4]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="w-px h-6 bg-gray-200" /> {/* Divider */}

            <button
              aria-label="Search"
              className="p-2.5 rounded-full bg-gray-50 text-[#1A1A1A] hover:bg-[#7C4EE4] hover:text-white transition-all duration-300"
            >
              <Search size={18} strokeWidth={3} />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-[110] p-2 text-[#1A1A1A]"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* MOBILE OVERLAY & SIDEBAR */}
      <div 
        className={`fixed inset-0 z-[90] transition-all duration-500 ${open ? "visible" : "invisible"}`}
      >
        {/* Backdrop Backdrop */}
        <div 
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
        />

        {/* Sidebar Container */}
        
        <aside
          className={`
            absolute top-0 right-0 h-full w-[85%] max-w-[400px] 
            bg-white shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.3)]
            flex flex-col p-8 pt-24
            transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="space-y-8">
            {navLinks.map((item, idx) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={({ isActive }) =>
                  `block text-3xl font-black tracking-tighter transition-all
                  ${open ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}
                  ${isActive ? "text-[#7C4EE4]" : "text-[#1A1A1A] hover:pl-2"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-auto border-t pt-10">
            <button className="flex items-center gap-4 w-full p-4 rounded-2xl bg-gray-50 text-[#7C4EE4] font-bold">
              <Search size={24} />
              Search Articles...
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}