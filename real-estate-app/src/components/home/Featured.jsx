import React from "react";
import { FaBed, FaBath,FaRulerCombined } from "react-icons/fa"; // Reduced icons
import home from "../../assets/home.jpg"; // Example image, replace with dynamic data

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Villa in LA",
    price: "$1,250,000",
    image: home,
    location: "Los Angeles, CA",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 7000

  },
  {
    id: 2,
    title: "Modern Apartment in NYC",
    price: "$850,000",
    image: home,
    location: "New York, NY",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 7000
  },
  {
    id: 3,
    title: "Beachfront House in Miami",
    price: "$2,100,000",
    image: home,
    location: "Miami, FL",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 7000
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-20">
        <h4 className="font-bold text-center text-blue-400">
            Recent
        </h4>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Properties
        </h2>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{property.title}</h3>
                <p className="text-gray-600">{property.location}</p>

                {/* Price + Property Details (Icons) in One Row */}
                <div className="flex items-center justify-between mt-4 text-gray-700">
                  <p className="text-blue-600 font-bold text-lg">{property.price}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FaBed className="text-black" />
                      <span>{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBath className="text-black" />
                      <span>{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaRulerCombined className="text-black" />
                        <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="/properties"
            className="bg-blue-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
