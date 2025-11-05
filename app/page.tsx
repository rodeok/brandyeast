import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Legacy from "@/components/Legacy";
import Testimonials from "@/components/Testimonials"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Legacy/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </div>
  );
}
