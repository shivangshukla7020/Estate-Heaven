import React from "react";
import { FaHome, FaHandshake, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaHome className="text-4xl text-blue-200" />,
    title: "Wide Range of Properties",
    description: "We offer a variety of listings to match your needs, from luxury homes to budget-friendly apartments.",
  },
  {
    id: 2,
    icon: <FaHandshake className="text-4xl text-blue-200" />,
    title: "Trusted by Thousands",
    description: "Our reputation is built on trust, transparency, and dedicated service to our clients.",
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-4xl text-blue-200" />,
    title: "Secure & Hassle-Free",
    description: "We ensure a smooth and secure transaction process, making your home-buying experience stress-free.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-lg mb-10">
          Discover the advantages of working with us for your real estate needs.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white text-gray-900 p-6 rounded-xl shadow-lg flex flex-col items-center space-y-4">
              <div className="bg-blue-800 p-4 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
