"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function BrandProductionPage() {
  return (
    <main className="w-full">
     <Navbar/>
      {/* HERO SECTION */}
      <section className="w-full grid md:grid-cols-2 bg-[#3E406A] text-white">
        {/* Text Side */}
        <div className="flex flex-col justify-center px-8 py-20 max-w-xl mx-auto">
          <h1 className="text-4xl font-semibold leading-tight">
            Global Presence, Growth Mindset.
          </h1>

          <p className="mt-4 text-sm opacity-90 leading-relaxed">
            Enhance your brand’s engagement with strategic social media and brand scaling services from Brandyex, ensuring global presence.
          </p>

          <ul className="mt-6 space-y-3 text-sm opacity-90 leading-relaxed">
            <li>• Global Presence Growth: We help scale your brand’s international visibility.</li>
            <li>• Digital Brand Systems: Build branding structures that remain consistent everywhere.</li>
            <li>• Media Deployment Strategies: Efficient and purposeful media placements that reinforce recognition.</li>
            <li>• Team Training & Development: Equipping your team to represent and expand your messaging.</li>
          </ul>

          <button className="mt-8 bg-white text-[#3E406A] px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Learn More →
          </button>
        </div>

        {/* Image Side */}
        <div className="relative h-[420px] md:h-auto">
          <Image
            src="/images/brandid.jpg"  // Replace with your real image
            alt="Brand strategy demonstration"
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
            <div className="relative h-56 border rounded-lg overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/images/yeasted.png" // replace
                alt="Yeasted"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <p className="font-medium mt-4">Yeasted</p>
            <p className="text-sm text-gray-600">February 2025</p>
          </div>

          {/* Project 2 */}
          <div>
            <div className="relative h-56 border rounded-lg overflow-hidden bg-white flex items-center justify-center">
              <Image
                src="/images/sedam.jpg" // replace
                alt="SEDAR Federal Credit Union"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <p className="font-medium mt-4">SEDAR Federal Credit Union</p>
            <p className="text-sm text-gray-600">August 2024</p>
          </div>

          {/* Project 3 */}
          <div>
            <div className="relative h-56 rounded-lg overflow-hidden shadow-sm border">
              <Image
                src="/images/lbn.jpg" // replace
                alt="LBN Realtors"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-medium mt-4">LBN Realtors</p>
            <p className="text-sm text-gray-600">June 2024</p>
          </div>

          {/* Project 4 */}
          <div>
            <div className="relative h-56 rounded-lg overflow-hidden shadow-sm border bg-white flex items-center justify-center">
              <Image
                src="/images/kamma.png"
                alt="ESOMA"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <p className="font-medium mt-4">KAMMA</p>
            <p className="text-sm text-gray-600">January 2025</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full flex justify-center mt-14">
          <button className="bg-[#2E8B57] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            See More Projects
          </button>
        </div>
      </section>
  <Footer/>
    </main>
  );
}
