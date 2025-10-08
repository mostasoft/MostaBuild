"use client"

// components/SupportButton.js

export default function SupportButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="flex items-center gap-2 bg-yellow-400 text-black font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
        onClick={() => alert("Support coming soon!")}
      >
        🛠️ Support
      </button>
    </div>
  );
}
