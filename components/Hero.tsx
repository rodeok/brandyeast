"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=2000&q=80"
          alt="Background hero"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Overlay gradient (optional aesthetic touch) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 -z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-6 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Empowering <span className="text-[#FFD700]">Brands</span> to Grow Online
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          We help startups and businesses build scalable digital experiences that
          captivate and convert.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#2E2D64] hover:bg-[#3A2CA0] text-white px-8 py-3 rounded-full transition">
            Get Started
          </button>
          <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-full transition">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
}
