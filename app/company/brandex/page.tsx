"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function ExperiencePage() {
  return (
    <>
    <Navbar/>
    <main className="w-full">
 
      {/* HERO SECTION */}
      <section className="w-full grid md:grid-cols-2 bg-[#3E406A] text-white">
        {/* Text */}
        <div className="flex flex-col justify-center px-8 py-20 max-w-xl mx-auto">
          <h1 className="text-4xl font-semibold leading-tight">
            Every Touchpoint, Every Detail, Imprinted With Legacy.
          </h1>
          <p className="mt-4 text-sm opacity-90 leading-relaxed">
            Elevate your brand expression with comprehensive product design and high-quality production services from Brandyex.
          </p>

          <ul className="mt-6 space-y-3 text-sm opacity-90">
            <li>• Product Design & Development: Thoughtful, quality-driven product design that aligns with your brand story.</li>
            <li>• Printing & Production: We help you create printed or branded items that serve brand loyalty & lasting recall.</li>
            <li>• Promotional Materials: On-brand items that reinforce recognition everywhere they appear.</li>
          </ul>

          <button className="mt-8 bg-white text-[#3E406A] px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Learn More →
          </button>
        </div>

        {/* Image */}
        <div className="relative h-[420px] md:h-auto">
          <Image
            src="/images/brandid.jpg" // <--- replace with your real hero image
            alt="Brand production example"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Project 1 */}
          <div>
            <div className="relative h-56 rounded-lg overflow-hidden shadow-sm border">
              <Image
                src="/images/lbnreal.jpg"  // replace
                alt="LBN Realtors"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-medium mt-4">LBN Realtors</p>
            <p className="text-sm text-gray-600">August 2024</p>
          </div>

          {/* Project 2 */}
          <div>
            <div className="relative h-56 rounded-lg overflow-hidden shadow-sm border bg-white flex items-center justify-center">
              <Image
                src="/images/markee.png" // replace
                alt="Markee Tate"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <p className="font-medium mt-4">Markee Tate</p>
            <p className="text-sm text-gray-600">February 2025</p>
          </div>

          {/* Project 3 */}
          <div>
            <div className="relative h-56 rounded-lg overflow-hidden shadow-sm border bg-white flex items-center justify-center">
              <Image
                src="/images/yeasted.png"
                alt="Yeasted Legals"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <p className="font-medium mt-4">Yeasted Legals</p>
            <p className="text-sm text-gray-600">May 2023</p>
          </div>

          {/* Project 4 */}
          <div>
            <div className="relative h-56 rounded-lg overflow-hidden shadow-sm border">
              <Image
                src="/images/lbn.jpg"
                alt="LBN Boxcovers"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-medium mt-4">LBN Boxcovers</p>
            <p className="text-sm text-gray-600">August 2024</p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="w-full flex justify-center mt-14">
          <button className="bg-[#2E8B57] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            See More Projects
          </button>
        </div>
      </section>

    </main>
    <Footer/>
    </>
  );
}
