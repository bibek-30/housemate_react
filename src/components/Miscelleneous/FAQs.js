import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleClick}>{question}</button>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

const FaqList = () => {
  const faqs = [
    {
      id: 1,
      question: "Can I cancel my room reservation?",
      answer:
        "Yes, you can cancel your room reservation. Please review our cancellation policy for more information on cancellation fees and deadlines.",
    },
    {
      id: 2,
      question: "How do I check-in to my room?",
      answer:
        "To check-in to your room, you can simply come to our reception desk and provide your booking information. We will provide you with a key and directions to your room.",
    },
    {
      id: 3,
      question: " What amenities are included in the room",
      answer:
        "Our rooms come with various amenities, such as free Wi-Fi, television, and toiletries. You can view the full list of amenities for each room type on our website.",
    },
    {
      id: 6,
      question: " What amenities are included in the room",
      answer:
        "Our rooms come with various amenities, such as free Wi-Fi, television, and toiletries. You can view the full list of amenities for each room type on our website.",
    },
    {
      id: 4,
      question: " Can I request a specific room location or view",
      answer:
        "Yes, you can request a specific room location or view, depending on availability. Please contact our customer support team to request a specific room.",
    },
    {
      id: 5,
      question: "What is your pet policy?",
      answer:
        "We may allow pets in certain rooms for an additional fee. Please review our pet policy for more information.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white shadow overflow-hidden rounded-lg"
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {faq.question}
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <div className="prose max-w-none">
                  <p className="text-base leading-5 text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaqList;
