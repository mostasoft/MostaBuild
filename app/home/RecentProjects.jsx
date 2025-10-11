"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RecentProjects() {
  const allProjects = [
    { title: "Steel Production", image: "/download.jpg", category: "Industry" },
    { title: "Factory Automation", image: "/Common Causes of Factory Machinery Breaking Down.jpg", category: "Automation" },
    { title: "Industrial Assembly", image: "/SCARA robots.jpg", category: "Industry" },
    { title: "Worker Collaboration", image: "/d81d1194-037f-402b-9590-7ad55ab5f525.jpg", category: "Management" },
    { title: "Smart Construction", image: "/download.jpg", category: "Construction" },
    { title: "Energy Optimization", image: "/SCARA robots.jpg", category: "Technology" },
    { title: "AI Monitoring System", image: "/Common Causes of Factory Machinery Breaking Down.jpg", category: "Automation" },
    { title: "AI Monitoring System", image: "/download.jpg", category: "Automation" },
  ];

  const [filter, setFilter] = useState("All");

  const categories = ["All", "Industry", "Automation", "Construction", "Management", "Technology"];

  const filteredProjects =
    filter === "All" ? allProjects : allProjects.filter((p) => p.category === filter);

  return (
    <section className="bg-yellow-400 text-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 tracking-tight">
          RECENT <span className="text-white drop-shadow">PROJECTS</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Explore our latest industrial and automation projects that showcase our innovation,
          efficiency, and commitment to excellence.
        </p>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold border transition-all duration-300 ${
                filter === cat
                  ? "bg-gray-900 text-yellow-400 border-gray-900"
                  : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center">
                <h3 className="text-lg font-bold text-yellow-400 mb-3">{project.title}</h3>
                <button className="px-5 py-2 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
                  Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
