"use client";

import {
  FaIndustry,
  FaTools,
  FaHardHat,
  FaTruck,
} from "react-icons/fa";

export default function Services2() {
  const services = [
    {
      id: 1,
      icon: <FaIndustry className="text-5xl text-yellow-500 mb-4" />,
      title: "Industrial Construction",
      desc: "We deliver innovative industrial construction solutions that meet modern standards with precision and reliability.",
    },
    {
      id: 2,
      icon: <FaTools className="text-5xl text-yellow-500 mb-4" />,
      title: "Mechanical Engineering",
      desc: "Providing state-of-the-art mechanical systems that enhance efficiency and reduce downtime in factories.",
    },
    {
      id: 3,
      icon: <FaHardHat className="text-5xl text-yellow-500 mb-4" />,
      title: "Civil Engineering",
      desc: "From foundation to finish, we design and build durable infrastructure for industrial growth.",
    },
    {
      id: 4,
      icon: <FaTruck className="text-5xl text-yellow-500 mb-4" />,
      title: "Logistics & Supply",
      desc: "Streamlining the supply chain with dependable transport and distribution solutions across the globe.",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <div className="mb-14">
          <h5 className="text-yellow-500 font-semibold uppercase tracking-wider mb-2">
            What We Do
          </h5>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">
            We are proud to offer high-quality industrial services with a focus
            on innovation, reliability, and excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 hover:bg-white border border-gray-100 hover:border-yellow-500 transition-all duration-300 rounded-xl shadow-sm hover:shadow-xl p-8 flex flex-col items-center text-center group"
            >
              <div className="mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
              <div className="mt-5 w-10 h-[3px] bg-yellow-500 group-hover:w-16 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
