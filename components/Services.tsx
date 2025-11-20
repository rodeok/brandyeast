"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
const services = [
  {
    title: "YEASTED STUDIOS",
    text: "This is the creative arm of Brandyeast, where ideas are conceptualized, designed, and developed into powerful brand visuals and stories, our core strengths include Brand identity design, website design, UI/UX, Creative direction, Content creation, Photography, Videography, and Motion designs.",
  },
  {
    title: "YEASTED PRINTS",
    text: "This is the printing and production arm, responsible for bringing brand expressions to life through physical and digital materials. Printing of branded items : shirts, banners, vehicles, stationery, packaging, signage, and other promotional materials.",
  },
  {
    title: "YEASTED MANAGERS",
    text: "This is the communication and management arm ensuring brands and their brand meanings stay consistent, from the internal environment of staff and company culture, to the external environment of their customers and other stakeholders, the brand must be understood in meaning across board.",
  },
  {
    title: "YEASTED LEGALS",
    text: "This is the protection and documentation arm ensuring that every brand built under Brandyeast is legally secured and recognized and protected, be it a name, or every other brand assets and interests.",
  },
];
export default function Navbar() {


  return (
    <section className="py-20 bg-[#F5F8EF] px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
        {services.map((item, i) => (
          <div key={i} className="bg-[#E9F6D1] p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-3">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.text}</p>
            <button className="bg-[#2E2D64] text-white px-4 py-2 rounded-md">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
