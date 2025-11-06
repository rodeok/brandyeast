"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  const projects = [
    {
      title: "Goshen Supermart Identity Design",
      date: "October 2024",
      image: "/images/goshen.jpg",
    },
    {
      title: "SEDAM Federal Credit Card Union",
      date: "August 2024",
      image: "/images/sedam.jpg",
    },
    {
      title: "Nehvora Design",
      date: "April 2024",
      image: "/images/nehvora.jpg",
    },
    {
      title: "Kamma Design",
      date: "January 2025",
      image: "/images/kamma.png",
    },
  ];

  return (
    <main className="w-full min-h-screen">
      <Navbar/>
      {/* HERO SECTION */}
      <section className="w-full grid md:grid-cols-2">
        {/* Left Text Section */}
        <div
          className="flex flex-col justify-center p-10 md:p-20"
          style={{ backgroundColor: "#3E406A" }}
        >
          <h1 className="text-4xl font-semibold leading-tight text-white">
            Your Legacy <br />
            Starts With Your <br />
            Identity
          </h1>

          <p className="mt-4 max-w-md text-white/90">
            Discover your brand's legacy through meaningful identity exploration
            and intentional design craftsmanship.
          </p>

          <Link
            href="#projects"
            className="mt-6 inline-block w-fit px-1 py-1 text-sm rounded-md transition text-[#3E406A] bg-white hover:bg-gray-100"
          >
            Learn More →
          </Link>
        </div>

        {/* Right Image Section with Overlay & Glass Card */}
        <div className="relative h-[450px] md:h-auto flex items-center justify-center p-6">
          <Image
            src="/images/brandid.jpg"
            alt="Brand Identity Studio Workspace"
            fill
            className="object-cover"
          />

          {/* Overlay tint */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "#3E406A8F" }}
          ></div>

          {/* Glass Info Box */}
          <div className="relative z-10 max-w-md bg-white/10 backdrop-blur-lg border border-white/40 rounded-xl p-6 text-white leading-relaxed">
            <p className="text-sm md:text-base mb-4">
              Our Brand Identity service begins with in-depth strategy sessions to
              uncover your brand&apos;s true essence—your &quot;legacy worth.&quot; 
              From this foundation, we craft a world-class visual identity that is 
              both powerful and timeless. Our designs aren&apos;t just beautiful; 
              they&apos;re purpose-built to represent you for years to come.
            </p>

            <p className="font-semibold">Identity Discovery Sessions:</p>
            <p className="text-sm md:text-base mb-4">
              Strategic workshops to identify your brand&apos;s core values and legacy potential.
            </p>

            <p className="font-semibold">Visual Identity Creation:</p>
            <p className="text-sm md:text-base">
              Logo, color palette, typography, and more, all crafted to reflect a lasting impression.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section id="projects" className="w-full max-w-6xl mx-auto py-20 px-5">
        <div className="grid md:grid-cols-2 gap-14">
          {projects.map((p, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-[320px] h-[320px] relative shadow-sm border rounded-lg overflow-hidden bg-white">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 font-medium" style={{ color: "#3E406A" }}>
                {p.title}
              </p>
              <p className="text-sm text-gray-500">{p.date}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/projects"
            className="px-6 py-3 rounded-md transition"
            style={{ backgroundColor: "#3E406A", color: "white" }}
          >
            See More Projects
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
