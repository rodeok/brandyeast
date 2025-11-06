"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function AboutPage() {
  return (
    <main className="w-full bg-white text-[#1A1A1A]">
        <Navbar/>
{/* HERO SECTION */}
<section className="w-full bg-[#3E406A] h-[520px] flex flex-col justify-center items-center text-center px-6">
  <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
    <span className="text-[#94D27C]">Building Legacies,</span>{" "}
    Not Just Brands
  </h1>

  <p className="mt-4 max-w-2xl text-white text-sm md:text-base opacity-90">
    At Brandyex, we transform brands into long-lasting legacies. 
    We craft timeless brand identity systems that elevate businesses 
    and communicate depth that lasts beyond surface-level branding.
  </p>
</section>


      {/* ABOUT CARDS */}
      <section className="py-20 flex flex-col items-center gap-12 px-6">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border p-6 flex gap-4">
            <div className="w-24 h-24 relative rounded-md overflow-hidden">
              {/* <Image
                src="/images/brandid.jpg" // replace
                alt="Workspace"
                fill
                className="object-cover"
              /> */}
            </div>
            <p className="text-sm leading-relaxed">
              We believe great branding begins with understanding your story — your legacy. Every brand has an origin
              worth shaping and presenting to the world.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F3FFE9] border border-[#C7EEC2] rounded-xl p-6 text-center">
            <h3 className="font-semibold mb-2 text-lg">Our Mission</h3>
            <p className="text-sm max-w-md mx-auto leading-relaxed">
              To transform brands into legacies that inspire, influence, and remain timeless.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-[#F3FFE9] border border-[#C7EEC2] rounded-xl p-6 text-center max-w-lg">
          <h3 className="font-semibold mb-2 text-lg">Our Philosophy</h3>
          <p className="text-sm leading-relaxed">
            We design brands that speak beyond aesthetics — brands that resonate with meaning, purpose and vision.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#3E406A] text-white text-center py-16 px-6">
        <h2 className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto">
          Discover How Brandyex Transforms Brands Into Legacies With Holistic, Impactful Branding Solutions.
        </h2>

        <button className="mt-8 bg-white text-[#3E406A] px-6 py-3 rounded-full font-medium shadow transition hover:opacity-80">
          Let’s Talk
        </button>
      </section>
    <Footer/>
    </main>
  );
}
