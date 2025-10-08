// components/CTA.js

export default function CTA() {
  return (
    <section className="bg-yellow-400 text-black py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Industrial Project?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Get in touch with our team of experts to bring your vision to life. From planning to execution — we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-black text-white rounded font-semibold hover:bg-gray-800 transition"
          >
            Contact Us
          </a>
          <a
            href="/projects"
            className="px-6 py-3 border-2 border-black text-black font-semibold rounded hover:bg-black hover:text-white transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
