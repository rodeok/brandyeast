// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-gradient-to-br #3E406A via-blue-800 to-indigo-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0">
            {/* <Image
              src="/hero-bg.jpg" // Replace with your actual image
              alt="Background"
              fill
              className="object-cover"
              priority
            /> */}
          </div>

          <div className="relative container mx-auto px-6 py-24 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Safeguard Your Brand’s Legacy With Comprehensive Protection.
              </h1>
              <p className="text-lg lg:text-xl mb-8 text-blue-100">
                Protect your brand’s future with our cutting-edge trademark monitoring, 
                enforcement, and renewal services. Stay ahead of infringements and 
                secure your intellectual property with confidence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition shadow-lg"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center px-8 py-4 border-2 border-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">
              {/* LBN Realtors */}
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                  <Image
                    src="/images/lbnreal.jpg"
                    alt="LBN Realtors"
                    width={160}
                    height={160}
                    className="mx-auto"
                  />
                </div>
                <p className="mt-4 text-gray-700 font-medium">LBN Realtors</p>
              </div>

              {/* Fondation Coeur Beni */}
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                  <Image
                    src="/images/found.png"
                    alt="Fondation Coeur Beni"
                    width={160}
                    height={160}
                    className="mx-auto"
                  />
                </div>
                <p className="mt-4 text-gray-700 font-medium">Fondation Coeur Beni</p>
              </div>

              {/* Xemio */}
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                  <Image
                    src="/images/kamma.png"
                    alt="Xemio"
                    width={160}
                    height={160}
                    className="mx-auto"
                  />
                </div>
                <p className="mt-4 text-gray-700 font-medium">Kamma</p>
              </div>

              {/* SEDM United */}
              <div className="text-center">
                <div className="bg-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                  <Image
                    src="/images/sedr.jpg"
                    alt="SEDM United World Vision"
                    width={160}
                    height={160}
                    className="mx-auto"
                  />
                </div>
                <p className="mt-4 text-gray-700 font-medium text-sm">SEDAR federal credit card union</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link
                href="#"
                className="inline-flex items-center px-10 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition shadow-lg"
              >
                See More Projects
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
}