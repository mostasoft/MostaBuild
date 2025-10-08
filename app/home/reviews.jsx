"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "John Anderson",
      role: "Construction Manager",
      image: "/review1.jpg", // replace with actual images
      text: "Their team is incredibly professional and efficient. The project was completed on time and the quality exceeded expectations!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Thompson",
      role: "Project Engineer",
      image: "/review2.jpg",
      text: "Amazing experience working with them. Excellent communication and outstanding service throughout the process.",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Harris",
      role: "Industrial Consultant",
      image: "/review3.jpg",
      text: "Highly reliable and professional team. I’d definitely recommend their services to anyone in the industry.",
      rating: 4,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <div className="mb-14">
          <h5 className="text-yellow-500 font-semibold uppercase tracking-wider mb-2">
            Testimonials
          </h5>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What Our <span className="text-yellow-500">Clients Say</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">
            We are proud to have worked with top professionals who trust us to
            deliver excellence in every project.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-5">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover border-4 border-yellow-500"
                />
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-6 leading-relaxed">
                “{review.text}”
              </p>

              <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
