import { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import properties from "../Properties";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Buy/Sidebar";

const Buy = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ bedrooms: "", priceRange: "" });

  const filteredProperties = properties.filter(property =>
    (property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filters.bedrooms ? property.bedrooms === Number(filters.bedrooms) : true) &&
    (filters.priceRange ? property.price <= Number(filters.priceRange) : true)
  );

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar filters={filters} setFilters={setFilters} />
      <div className="flex-1 pl-60"> {/* Added padding to prevent overlap */}
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="max-w-6xl mx-auto p-6">
          {/* <h1 className="text-4xl font-bold text-center mb-8">Find Your Dream Home</h1> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">No properties found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
