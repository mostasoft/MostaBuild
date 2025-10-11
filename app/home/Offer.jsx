// components/WhatWeOffer.js

export default function WhatWeOffer() {
  const features = [
    {
      title: "Advanced Technology",
      desc: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      title: "Expert Engineers",
      desc: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      title: "Customer Support",
      desc: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      title: "Delivery On Time",
      desc: "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
       <div className="mb-12 flex flex-col md:flex-row items-center justify-center gap-8 px-6">
  {/* Left Side - Photo */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="/Construction Assets.jpg"
      alt="What We Offer"
      className="w-full max-w-md rounded-2xl shadow-md object-cover"
    />
  </div>

  {/* Right Side - Texts */}
  <div className="w-full md:w-1/2">
    <h2 className="text-3xl font-bold text-gray-900">WHAT WE OFFER</h2>
    <p className="mt-4 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <p className="mt-4 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <p className="mt-4 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <p className="mt-2 text-gray-600">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
    </p>
    <p className="mt-2 text-gray-600">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
    </p>
    <p className="mt-2 text-gray-600">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
    </p>
    <p className="mt-2 text-gray-600">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
    </p>
    <button className="mt-6 px-6 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300">
      Read More
    </button>
  </div>
</div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="p-4">
              <div className="mb-4 text-3xl text-yellow-500">
                {/* Placeholder icon: you can replace with actual icons (e.g., from Heroicons or FontAwesome) */}
                ⚙️
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
              <a href="#" className="text-yellow-500 mt-2 inline-block text-sm font-medium">
                Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
