"use client"

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={scrollToTop}
        className="flex items-center gap-2 bg-yellow-400 text-black font-bold px-5 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
      >
        <FiArrowUp className="text-xl" />
      </button>
    </div>
  ) : null;
}
