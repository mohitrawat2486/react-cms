import React, { useState } from "react";

// Types
interface FAQItem {
  question: string;
  answer: string;
}

interface Category {
  category: string;
  faqs: FAQItem[];
}

// Component
export default function FaqList({ data }: { data: Category[] }) {
  const [activeCategory, setActiveCategory] = useState(data[0]?.category || "");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const currentCategory = data.find((cat) => cat.category === activeCategory);

  return (
    <div className="flex flex-col md:flex-row gap-6 min-h-120">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4">
        <ul className="bg-white text-black p-4 rounded space-y-2">
          {data.map((item) => (
            <li
              key={item.category}
              className={`cursor-pointer px-2 py-2 text-sm rounded border border-gray-300 hover:bg-gray-100 ${activeCategory === item.category ? "bg-gray-200 font-semibold" : ""
                }`}
              onClick={() => {
                setActiveCategory(item.category);
                setExpandedIndex(null); // reset expanded on category change
              }}
            >
              {item.category}
            </li>
          ))}
        </ul>

      </aside>

      {/* FAQ content */}
      <div className="flex-1 space-y-4">
        <h2 className="text-xl font-bold text-blue-800">{activeCategory}</h2>

        {currentCategory?.faqs.length ? (
          currentCategory.faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border p-4 rounded shadow-sm hover:shadow-md transition"
            >
              <div
                className="cursor-pointer text-gray-800 font-medium flex justify-between items-center"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                {faq.question}
                <span className="text-blue-600">
                  {expandedIndex === index ? "-" : "+"}
                </span>
              </div>
              {expandedIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No FAQs available in this category.</p>
        )}
      </div>
    </div>
  );
}
