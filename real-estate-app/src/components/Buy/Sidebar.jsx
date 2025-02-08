import { useState } from "react";
import { FaMapMarkerAlt, FaHome, FaCheck } from "react-icons/fa";

const Sidebar = ({ filters, setFilters }) => {
  const [minPrice, setMinPrice] = useState(filters.minPrice || 0);
  const [maxPrice, setMaxPrice] = useState(filters.maxPrice || 1000000);
  const [location, setLocation] = useState(filters.location || "");
  const [bedrooms, setBedrooms] = useState(filters.bedrooms || "");
  const [bathrooms, setBathrooms] = useState(filters.bathrooms || "");
  const [sqft, setSqft] = useState(filters.sqft || "");
  const [propertyType, setPropertyType] = useState(filters.propertyType || "");
  const [amenities, setAmenities] = useState(filters.amenities || []);

  const toggleAmenity = (amenity) => {
    setFilters((prev) => {
      const newAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: newAmenities };
    });
  };

  return (
    <div className="w-60 h-screen bg-white shadow p-4 fixed left-0 top-0 overflow-y-auto ">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Price Range */}
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-medium">Price Range</label>
        <div className="flex justify-between text-xs text-gray-600">
          <span>${minPrice.toLocaleString()}</span>
          <span>${maxPrice.toLocaleString()}</span>
        </div>
        <input type="range" min="0" max="1000000" step="10000" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="w-full cursor-pointer" />
       </div>

      {/* Location */}
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-medium flex items-center"><FaMapMarkerAlt className="mr-1 text-xs" /> Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter city" className="w-full p-1 border-b border-gray-300 text-sm outline-none focus:border-blue-500 transition-all duration-200" />
      </div>

      {/* Bedrooms */}
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-medium flex items-center"><FaHome className="mr-1 text-xs" /> Bedrooms</label>
        <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} className="w-full p-1 border-b border-gray-300 text-sm outline-none focus:border-blue-500 transition-all duration-200">
          <option value="">Any</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}+</option>
          ))}
        </select>
      </div>

      {/* Bathrooms */}
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-medium">Bathrooms</label>
        <select value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} className="w-full p-1 border-b border-gray-300 text-sm outline-none focus:border-blue-500 transition-all duration-200">
          <option value="">Any</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}+</option>
          ))}
        </select>
      </div>

      {/* Square Footage */}
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-medium">Sqft</label>
        <input type="number" value={sqft} onChange={(e) => setSqft(e.target.value)} placeholder="Min Sqft" className="w-full p-1 border-b border-gray-300 text-sm outline-none focus:border-blue-500 transition-all duration-200" />
      </div>

      {/* Property Type */}
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-medium">Property Type</label>
        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)} className="w-full p-1 border-b border-gray-300 text-sm outline-none focus:border-blue-500 transition-all duration-200">
          <option value="">Any</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Condo">Condo</option>
          <option value="Townhouse">Townhouse</option>
        </select>
      </div>

      {/* Amenities */}
      <div className="mb-3">
        <label className="block text-gray-700 text-sm font-medium">Amenities</label>
        <div className="grid grid-cols-2 gap-1 text-xs">
          {["Pool", "Gym", "Parking", "Garden", "Balcony"].map((amenity) => (
            <label key={amenity} className="flex items-center cursor-pointer">
              <input type="checkbox" checked={amenities.includes(amenity)} onChange={() => toggleAmenity(amenity)} className="hidden" />
              <div className={`w-4 h-4 border rounded flex items-center justify-center mr-1 ${amenities.includes(amenity) ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-400 text-gray-400'}`}>
                {amenities.includes(amenity) && <FaCheck className="text-xs" />}
              </div>
              {amenity}
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button onClick={() => setFilters({})} className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-medium py-2 rounded transition-all duration-200">
        Reset Filters
      </button>

      <div className="mt-10">
            <span className="font-bold"><span className="text-xl">E</span>STATE </span>
            HE<span className="text-2xl">A</span>VEN
      </div>
    </div>
  );
};

export default Sidebar;
