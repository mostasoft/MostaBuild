"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "John Anderson",
      role: "Construction Manager",
      image: "/WhatsApp Image 2025-10-04 at 07.39.26_e6dbc65f.jpg",
      text: "Their team is incredibly professional and efficient. The project was completed on time and the quality exceeded expectations!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Thompson",
      role: "Project Engineer",
      image: "/WhatsApp Image 2025-10-04 at 07.39.26_e6dbc65f.jpg",
      text: "Amazing experience working with them. Excellent communication and outstanding service throughout the process.",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Harris",
      role: "Industrial Consultant",
      image: "/WhatsApp Image 2025-10-04 at 07.39.26_e6dbc65f.jpg",
      text: "Highly reliable and professional team. I’d definitely recommend their services to anyone in the industry.",
      rating: 4,
    },
  ];

  return (
    <section
      className="w-full py-20 bg-fixed bg-center bg-cover relative"
      style={{ backgroundImage: "url('/Construction Assets.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center text-white">
        {/* Section Heading */}
        <div className="mb-14">
          <h5 className="text-yellow-400 font-semibold uppercase tracking-wider mb-2">
            Testimonials
          </h5>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            What Our <span className="text-yellow-400">Clients Say</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base">
            We are proud to have worked with top professionals who trust us to
            deliver excellence in every project.
          </p>
        </div>

        {/* Reviews Grid (unchanged layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-5">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover h-20 w-20 border-4 border-yellow-400"
                />
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              <p className="text-gray-200 italic mb-6 leading-relaxed">
                “{review.text}”
              </p>

              <h3 className="text-lg font-bold text-yellow-400">
                {review.name}
              </h3>
              <p className="text-sm text-gray-300">{review.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
