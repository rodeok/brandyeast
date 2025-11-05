import React from 'react';

export default function HeroSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Text and Buttons */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Building Legacies, Not<br />Just Brands
          </h1>
          <p className="text-lg leading-relaxed max-w-xl">
            At Brandyeast, we believe in branding with an endpoint in mind: legacy. We&apos;re a full-service branding agency dedicated to helping businesses and organizations create brands with lasting value and impact. Our approach is holistic, encompassing not just business and corporate branding but also city and territorial branding, event branding (like statement weddings), and product branding.
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#418902] text-white font-medium px-8 py-3 rounded-full hover:bg-[#357202] transition-colors">
              More About Us →
            </button>
            <button className="bg-gray-900 text-white font-medium px-8 py-3 rounded-full hover:bg-gray-800 transition-colors border border-gray-700">
              Book A Call →
            </button>
          </div>
        </div>

        {/* Right Side: Cards Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Card 1: Brand Protection */}
          <div className="bg-indigo-900 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
              {/* Placeholder for shield-check icon */}
              <span className="text-blue-600 text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-semibold">Brand Protection</h3>
          </div>

          {/* Card 2: Brand Identity */}
          <div className="bg-indigo-900 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
              {/* Placeholder for id-card icon */}
              <span className="text-blue-600 text-2xl">🪪</span>
            </div>
            <h3 className="text-xl font-semibold">Brand Identity</h3>
          </div>

          {/* Card 3: Brand Expression */}
          <div className="bg-indigo-900 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
              {/* Placeholder for user-speaking icon */}
              <span className="text-blue-600 text-2xl">🗣️</span>
            </div>
            <h3 className="text-xl font-semibold">Brand Expression</h3>
          </div>

          {/* Card 4: Brand Management */}
          <div className="bg-indigo-900 rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
              {/* Placeholder for hand-gear icon */}
              <span className="text-blue-600 text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold">Brand Management</h3>
          </div>
        </div>
      </div>
    </section>
  );
}