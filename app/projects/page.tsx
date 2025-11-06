// app/projects/page.tsx
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function ProjectsPage() {
  const projects = [
    {
      name: "Goshen Supermart",
      date: "October 2024",
      url: "https://goshensupermart.com",
      img: "/images/goshen.jpg",
    },
    {
      name: "SEDAR Federal Credit Union",
      date: "August 2024",
      url: "https://redarfcu.org",
      img: "/images/sedam.jpg",
    },
    {
      name: "Nehvora",
      date: "July 2024",
      url: "https://nehvora.com",
      img: "/images/nehvora.jpg",
    },
    {
      name: "Kamma",
      date: "May 2024",
      url: "https://karma.io",
      img: "/images/kamma.png",
    },
    // === 8 NEW ONES BELOW ===
    {
      name: "Markee Tate",
      date: "March 2025",
      url: "https://markeetate.com",
      img: "/images/markee.png",
    },
    {
      name: "Yeasted Legals",
      date: "January 2025",
      url: "https://yeastedlegals.law",
      img: "/images/yeasted.png",
    },
    {
      name: "LBN Realtors",
      date: "December 2024",
      url: "https://lbnrealtors.com",
      img: "/images/lbnreal.jpg",
    },
    {
      name: "Foundation Coeur Beni",
      date: "November 2024",
      url: "https://coeurbeni.org",
      img: "/images/found.png",
    },
    // {
    //   name: "Nexlify Tech",
    //   date: "September 2024",
    //   url: "https://nexlify.io",
    //   img: "/logos/nexlify.png",
    // },
    // {
    //   name: "Solaris Energy",
    //   date: "June 2024",
    //   url: "https://solaris.energy",
    //   img: "/logos/solaris.png",
    // },
    // {
    //   name: "Bloom & Berry",
    //   date: "April 2024",
    //   url: "https://bloomberry.shop",
    //   img: "/logos/bloomberry.png",
    // },
    // {
    //   name: "Quantum Leap Labs",
    //   date: "February 2024",
    //   url: "https://quantumleap.labs",
    //   img: "/logos/quantum.png",
    // },
  ];

  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            
          </h1>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Logo */}
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    src={project.img}
                    alt={`${project.name} logo`}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500">{project.date}</p>

                  <Link
                    href={project.url}
                    target="_blank"
                    className="inline-block mt-3 px-5 py-2 bg-[#3E406A] text-white text-sm font-medium rounded-lg hover:bg-[#2e304f] transition"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#3E406A] text-white font-semibold rounded-full hover:bg-[#2e304f] transition shadow-lg"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}