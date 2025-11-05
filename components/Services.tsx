"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
const services = [
  {
    title: "Brand Protection",
    text: "We ensure your brand’s legacy is reflected in every product, package, and material with clear, consistent expressions across all touchpoints. From CAC registration to IP management, we safeguard your brand’s future.",
  },
  {
    title: "Brand Identity",
    text: "We don’t just build brands; we craft legacies. Our purpose-driven approach ensures your brand stands the test of time.",
  },
  {
    title: "Brand Expression",
    text: "Every touchpoint, every detail—imprinted with legacy. We ensure every expression of your brand is consistent and impactful.",
  },
  {
    title: "Brand Management",
    text: "We specialize in lasting brand legacies through effective digital and social management, fostering growth and sustained impact.",
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
