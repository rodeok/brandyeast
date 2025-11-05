"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const navItems = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#" },
        { label: "UI/UX Design", href: "#" },
        { label: "Consulting", href: "#" },
      ],
    },
    {
      title: "Case Studies",
      links: [
        { label: "E-commerce", href: "#" },
        { label: "Healthcare", href: "#" },
        { label: "Finance", href: "#" },
      ],
    },
    {
      title: "Insight",
      links: [
        { label: "Blog", href: "#" },
        { label: "Guides", href: "#" },
        { label: "News", href: "#" },
      ],
    },
  ];

  return (
    <nav className="bg-white shadow-sm w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="brandyeast logo"
            width={140}
            height={140}
            className="rounded-md"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium relative">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 hover:text-[#3A2CA0] transition"
              >
                {item.title}
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    activeDropdown === item.title ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-lg py-2"
                  >
                    {item.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="block px-4 py-2 hover:bg-gray-100 text-sm"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <button className="bg-[#2E2D64] text-white px-5 py-2 rounded-full hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-md px-6 py-4 space-y-4"
          >
            {navItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="flex items-center justify-between w-full text-gray-700"
                >
                  {item.title}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      activeDropdown === item.title ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="pl-4 mt-2 space-y-2 text-gray-600 text-sm"
                    >
                      {item.links.map((link) => (
                        <Link key={link.label} href={link.href} className="block">
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <button className="bg-[#2E2D64] w-full text-white py-2 rounded-full hover:opacity-90 transition">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
