// app/contact/page.tsx
import { Phone, Mail, Facebook } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function ContactPage() {
  return (
    <>
 <Navbar/>
      {/* Hero Section */}
      <section className="bg-[#3E406A] text-white min-h-screen flex flex-col">
        {/* Navigation */}
  
       
        
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            
          </h1>
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg leading-relaxed text-gray-200">
                Ready to Start Building Your Legacy? Reach Out to BrandVault Today.<br /><br />
                We’re here to help you protect, grow, and elevate your brand. Whether you’re just starting out or looking to scale your legacy, our team is ready to guide you. Get in touch today, and let’s build something extraordinary together. Your brand’s future starts here.
              </p>
            </div>

            {/* Right Form Card */}
            <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 text-[#3E406A]">Get in Touch</h3>
              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3E406A] transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3E406A] transition"
                />
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3E406A] transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-full font-semibold hover:bg-green-700 transition shadow-lg"
                >
                  Book A Call
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-5 h-5 text-[#3E406A]" />
                  <span>+234 903 015 7028</span>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-5 h-5 text-[#3E406A]" />
                  <span>brandyeastinc@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Facebook className="w-5 h-5 text-[#3E406A]" />
                  <span>@mybrandyeast</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer/>
      </section>
    </>
  );
}