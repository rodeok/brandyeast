// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function CaseStudies() {
  return (
    <>
    {/* <Navbar/> */}
    <div className="w-full">
      
      {/* Hero Section */}
<section className="bg-[#3E406A] text-white py-20 px-6 text-center">
  <div className="mx-auto max-w-3xl">

    {/* Updated Gradient Button */}
    <div
      className="mx-auto mb-8 flex items-center justify-center text-[#3E406A] font-medium"
      style={{
        width: "383px",
        height: "80.71px",
        padding: "18.99px",
        borderRadius: "23.74px",
        gap: "7.91px",
        background: "linear-gradient(90deg, #B3BDDD 0%, #F4F6FA 100%)",
      }}
    >
      Branding Case Studies
    </div>

    <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
      Explore our case studies to see how Brandyeast has helped clients build
      impactful, lasting brands.
    </h1>

    <p className="text-sm md:text-base mt-6 opacity-90 leading-relaxed">
      See How We’ve Built Legacies with Our Clients. Dive into our case studies
      to see Brandyeast in action, where we’ve transformed brands with strategic
      identity creation, meaningful visual expression, brand protection, and
      effective implementation. Discover the brands that have partnered with us
      to achieve not just business success but lasting significance.
    </p>
  </div>
</section>


      {/* Grid Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Replace images with your real assets */}
          <div className="border rounded-md overflow-hidden hover:scale-[1.01] transition">
            <img
              src="/images/imaaa.jpg"
              alt="Y Brand Mockup"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="border rounded-md flex items-center justify-center bg-black">
            <img
              src="/images/yola.jpg"
              alt="Jola Logo"
              className="max-w-[70%] object-contain"
            />
          </div>

          <div className="border rounded-md overflow-hidden hover:scale-[1.01] transition flex items-center justify-center bg-white">
            <img
              src="/images/sedam.jpg"
              alt="Sedar Logo"
              className="max-w-[60%] object-contain"
            />
          </div>

          <div className="border rounded-md overflow-hidden hover:scale-[1.01] transition flex items-center justify-center bg-white">
            <img
              src="/images/goshen.jpg"
              alt="Goshen Logo"
              className="max-w-[60%] object-contain"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    </>
  );
}
