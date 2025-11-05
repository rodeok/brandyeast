'use client';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#2d3142] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
          What our customers says
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-[#7b8fc7] rounded-[50px] transform rotate-3 translate-x-3 translate-y-3"></div>
            <div className="relative bg-[#f5f5f0] rounded-[50px] p-8 md:p-10 min-h-[400px] flex flex-col">
              <h3 className="text-[#6b9d3e] text-xl md:text-2xl font-bold mb-6">
                Engr, Chimaobi Samuel
              </h3>

              <div className="text-[#7b8fc7] text-7xl md:text-8xl font-serif leading-none mb-6">
                "
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                Brandyeast didn't just give us a logo – they built a brand that
                represents strength, structure, and legacy. Their understanding
                of construction branding helped Histice Builders reflect both
                innovation and heritage. Our brand presence today commands
                respect, thanks to them.
              </p>

              <p className="text-gray-700 font-semibold text-sm md:text-base">
                Founder, Histice Builders
              </p>
            </div>
          </div>

          <div className="relative md:-mt-8">
            <div className="absolute inset-0 bg-[#7b8fc7] rounded-[50px] transform -rotate-2 translate-x-3 translate-y-3"></div>
            <div className="relative bg-[#f5f5f0] rounded-[50px] p-8 md:p-10 min-h-[400px] flex flex-col">
              <h3 className="text-[#6b9d3e] text-xl md:text-2xl font-bold mb-6">
                Michèle Aka
              </h3>

              <div className="text-[#7b8fc7] text-7xl md:text-8xl font-serif leading-none mb-6">
                "
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                Brandyeast helped us communicate care and compassion
                through color, tone, and design. Their work made our cause
                more relatable and appealing to donors, volunteers, and the
                people we serve. It was more than branding – it was legacy
                expression.
              </p>

              <p className="text-gray-700 font-semibold text-sm md:text-base">
                Founder, Bien Être Foundation
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#7b8fc7] rounded-[50px] transform rotate-2 translate-x-3 translate-y-3"></div>
            <div className="relative bg-[#f5f5f0] rounded-[50px] p-8 md:p-10 min-h-[400px] flex flex-col">
              <h3 className="text-[#6b9d3e] text-xl md:text-2xl font-bold mb-6">
                Joy Michael
              </h3>

              <div className="text-[#7b8fc7] text-7xl md:text-8xl font-serif leading-none mb-6">
                "
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                Brandyeast helped us discover the soul of our brand. From
                positioning to naming, every step was intentional. Today,
                Nehvora stands as a beautiful blend of purpose and elegance –
                all because we had the right guide.
              </p>

              <p className="text-gray-700 font-semibold text-sm md:text-base">
                Founder, Nehvora
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
