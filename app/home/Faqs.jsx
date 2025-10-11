"use client"
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer industrial solutions including automation, mechanical works, energy systems, and petroleum refinery support.",
  },
  {
    question: "Do you offer project consultation?",
    answer: "Yes, our expert engineers provide full consultation services before the execution of any project.",
  },
  {
    question: "Where are you located?",
    answer: "Our headquarters are based in Houston, Texas, but we operate globally with multiple partner locations.",
  },
  {
    question: "How can I get a quote?",
    answer: "You can contact us through our website or call us directly. We'll schedule a meeting and provide a detailed quote.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked <span className="text-yellow-400">Questions</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 border-b-3 border-b-yellow-300 rounded-lg p-4 shadow-sm"
            >
              <button
                className=" flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                {activeIndex === index ? (
                  <FiChevronUp className="text-xl text-yellow-400" />
                ) : (
                  <FiChevronDown className="text-xl text-yellow-400" />
                )}
              </button>
              
              {activeIndex === index && (
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
