import Image from "next/image";
import React from "react";

type Partner = {
  id: number;
  name: string;
  src: string; // relative path under /public or external URL
  alt?: string;
};

const partners: Partner[] = [
  { id: 1, name: "Ice Hub", src: "/images/icehub.jpg", alt: "Ice Hub logo" },
  { id: 2, name: "Nehvora", src: "/images/nehvora.jpg", alt: "Nehvora logo" },
  { id: 3, name: "Yeasted", src: "/images/yeasted.png", alt: "Yeasted logo" },
  { id: 4, name: "Markee Tate", src: "/images/markee.png", alt: "Markee Tate logo" },
  { id: 5, name: "Goshen", src: "/images/goshen.jpg", alt: "Goshen logo" },
  { id: 6, name: "Sedar", src: "/images/sedam.jpg", alt: "Sedar logo" },
];

export default function PartnersSection({ items = partners }: { items?: Partner[] }) {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">
            Our Partners
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg sm:text-xl">
            Collaborating with industry leaders to deliver
            <br className="hidden sm:block" /> exceptional results
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((p) => (
            <article
              key={p.id}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200 flex items-center justify-center"
              aria-label={`Partner ${p.name}`}>
              <div className="w-full h-56 sm:h-56 md:h-64 flex items-center justify-center">
                {/* Card inner with rounded corners like the design in the screenshot */}
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                  {/* Using a square container so logos stay centered and keep consistent size */}
                  <div className="w-44 h-44 sm:w-48 sm:h-48 relative flex items-center justify-center">
                    {/* Use next/image for best performance. If you use external urls, add them to next.config.js domain list */}
                    <Image
                      src={p.src}
                      alt={p.alt ?? p.name}
                      fill
                      sizes="(max-width: 640px) 160px, 192px"
                      style={{ objectFit: "contain" }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
