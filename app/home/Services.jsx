"use client";

import { FaIndustry, FaTools, FaHardHat, FaTruck } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <FaIndustry className="text-4xl text-yellow-500" />,
      title: "Industrial Construction",
      desc: "We provide expert construction and design services for factories, plants, and large-scale facilities.",
    },
    {
      id: 2,
      icon: <FaTools className="text-4xl text-yellow-500" />,
      title: "Mechanical Engineering",
      desc: "Our team ensures high-quality mechanical solutions with safety, efficiency, and reliability at the core.",
    },
    {
      id: 3,
      icon: <FaHardHat className="text-4xl text-yellow-500" />,
      title: "Civil Engineering",
      desc: "We build with precision — delivering strong, durable, and innovative infrastructure for industries worldwide.",
    },
    {
      id: 4,
      icon: <FaTruck className="text-4xl text-yellow-500" />,
      title: "Logistics & Supply",
      desc: "From transport to storage, we ensure timely and efficient supply chain management for your operations.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Our <span className="text-yellow-500">Services</span>
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          We deliver world-class industrial services with a commitment to quality, innovation, and excellence.
        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 border-t-4 border-yellow-500"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
