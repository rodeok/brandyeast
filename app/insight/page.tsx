// app/insights/page.tsx
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandInsights() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        <Navbar/>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-indigo-900 text-center">
            Brand Insights
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/images/brandid.jpg"
          alt="Person thinking about branding"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white max-w-md">
          <Image
            src="/images/lbnnn.png"
            alt="LBN Realtors"
            width={140}
            height={140}
            className="mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">LBN Realtors Blog</h2>
          <p className="text-sm opacity-90">
            Insights on real estate branding, market trends, and property marketing strategies.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-3xl mx-auto flex gap-3">
          <input
            type="text"
            placeholder="Search articles..."
            className="flex-1 px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition shadow-md">
            Search
          </button>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition group cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition">
                    Read Now
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3E406A] py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Discover Expert Insights And Tips On Branding And Legacy Building With Brandybast’s Blog.
          </h2>
          <Link
            href="/"
            className="inline-flex items-center mt-6 px-10 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition shadow-xl"
          >
            Visit Blog
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
      <Footer/>
    </div>

  );
}

// Sample data
const articles = [
  {
    title: "How To Create A Brand That Stands The Test Of Time",
    excerpt: "Learn the foundational principles of building a timeless brand identity that resonates across generations.",
    image: "/images/blog.jpg",
  },
  {
    title: "The Power Of Visual Identity In Real Estate Marketing",
    excerpt: "Discover how strong visuals can transform property listings and attract premium clients.",
    image: "/images/blog.jpg",
  },
  {
    title: "5 Common Branding Mistakes Realtors Make",
    excerpt: "Avoid these costly errors that could damage your professional reputation and client trust.",
    image: "/images/blog.jpg",
  },
  {
    title: "Building Trust Through Consistent Brand Messaging",
    excerpt: "Master the art of consistent communication across all platforms to win lifelong clients.",
    image: "/images/blog.jpg",
  },
  {
    title: "How To Protect Your Real Estate Brand Online",
    excerpt: "Essential strategies to safeguard your digital presence and intellectual property.",
    image: "/images/blog.jpg",
  },
  {
    title: "The Future Of Branding In Property Development",
    excerpt: "Emerging trends that will shape how developers connect with tomorrow’s buyers.",
    image: "/images/blog.jpg",
  },
];