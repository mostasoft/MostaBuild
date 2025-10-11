// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-[#0b0f25] text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 - Company Info */}
        <div>
          <h3 className="text-xl text-yellow-500 font-semibold mb-4">MostaBuild</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            We provide industrial and factory solutions with world-class services and top-notch engineering expertise.
          </p>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Our Services</h3>
          <ul className="space-y-2 text-white text-sm">
            <li><a href="#" className="hover:text-yellow-400">Mechanical Works</a></li>
            <li><a href="#" className="hover:text-yellow-400">Power & Energy</a></li>
            <li><a href="#" className="hover:text-yellow-400">Petroleum Refinery</a></li>
            <li><a href="#" className="hover:text-yellow-400">Factory Automation</a></li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/projects" className="hover:text-yellow-400">Projects</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h3 className="text-xl text-yellow-500 font-semibold mb-4">Contact Us</h3>
          <ul className="text-white text-sm space-y-2">
            <li>📍 5523 Research Park Drive, Suite 110</li>
            <li>📞 +202 (5454) 547</li>
            <li>✉️ info@industrial.com</li>
            <li>⏰ Mon - Fri: 9:00am - 6:00pm</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Industrial Co. All rights reserved.
      </div>
    </footer>
  );
}
