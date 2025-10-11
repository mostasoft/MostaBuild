"use client";

import { useState, useEffect } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/House construction site.jpg",
    "/ContractorClicks_com.jpg",
    "/Construction Phase.jpg",
  ];

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Improving Factory Efficiency with Automation",
      desc: "Learn how automation is revolutionizing modern industries by reducing costs and increasing precision.",
    },
    {
      id: 2,
      title: "Top 5 Safety Practices in Industrial Workspaces",
      desc: "Safety is critical in factories. Explore key strategies to maintain a safe and efficient environment.",
    },
    {
      id: 3,
      title: "The Future of Green Energy in Manufacturing",
      desc: "Discover how renewable energy is reshaping the manufacturing sector worldwide.",
    },
  ];

  const handleSearch = () => {
    const results = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute bg-black/20 inset-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[90vh] px-6 sm:px-10">
        <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          We provide the best{" "}
          <span className="text-yellow-400">Industrial</span> <br />
          Services worldwide
        </h1>

        <p className="text-gray-200 text-base sm:text-lg lg:text-xl mb-8 max-w-2xl">
          An unknown printer took a galley of type and scrambled it to make a
          type specimen book.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-lg bg-white rounded-lg overflow-hidden shadow-md mb-10">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 text-gray-700 outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-yellow-500 hover:bg-yellow-600 px-5 flex items-center justify-center transition"
          >
            <FaSearch className="text-white text-xl" />
          </button>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-md transition">
            About us
          </button>
          <button className="bg-transparent border border-white text-white hover:bg-yellow-500 hover:border-yellow-500 hover:text-white font-semibold px-6 py-3 rounded-md transition">
            Explore
          </button>
        </div>
      </div>

      {/* Slider Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white p-3 sm:p-4 rounded-md shadow-md transition z-20"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-white p-3 sm:p-4 rounded-md shadow-md transition z-20"
      >
        <FaChevronRight />
      </button>

      {/* Blog Section */}
      <div className="relative z-10 bg-yellow-300 w-full py-16 px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Latest <span className="text-yellow-500">Blog Posts</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {(searchResults.length > 0 ? searchResults : blogPosts).map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-6 text-left"
            >
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.desc}</p>
              <button className="text-yellow-500 font-semibold hover:text-yellow-600">
                Read More →
              </button>
            </div>
          ))}
        </div>

        {searchResults.length === 0 && query && (
          <p className="text-center text-gray-500 mt-8">
            No blog posts found for "{query}"
          </p>
        )}
      </div>
    </section>
  );
}
