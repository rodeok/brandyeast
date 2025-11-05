'use client';
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#3d4457] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
           <div className="flex items-center gap-2">
  <Image
    src="/images/logo.png"
    alt="brandyeast logo"
    width={140}
    height={140}
    className="rounded-md bg-white p-1"
  />
</div>


            <div>
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300 text-sm">+2349085933508</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Facebook</h3>
              <p className="text-gray-300 text-sm">@mybrandyeast</p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 text-sm">brandyeastinc@gmail.com</p>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Brandyeast Inc | All Rights Reserved
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms & condition
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Site credit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
