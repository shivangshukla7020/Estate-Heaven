import { useState, useEffect } from "react";
import PropertyCard from "../components/PropertyCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Buy/Sidebar";

const Buy = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000000,
    bedrooms: "",
    bathrooms: "",
    location: "",
    propertyType: "",
    amenities: [],
  });
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch properties from the backend API
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:3000/properties"); // Update if needed
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Filter properties based on search and filters
  const filteredProperties = properties.filter((property) => {
    const titleMatch = property.title?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false;
    const locationMatch = property.location?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false;

    const minPriceMatch = property.price >= (filters.minPrice || 0);
    const maxPriceMatch = property.price <= (filters.maxPrice || 1000000);

    const bedroomsMatch = filters.bedrooms ? property.bedrooms >= Number(filters.bedrooms) : true;
    const bathroomsMatch = filters.bathrooms ? property.bathrooms >= Number(filters.bathrooms) : true;

    const propertyTypeMatch = filters.propertyType ? property.propertyType === filters.propertyType : true;

    const amenitiesMatch =
      filters.amenities.length > 0
        ? filters.amenities.every((amenity) => property.amenities?.includes(amenity))
        : true;

    return titleMatch && locationMatch && minPriceMatch && maxPriceMatch && bedroomsMatch && bathroomsMatch && propertyTypeMatch && amenitiesMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar filters={filters} setFilters={setFilters} />
      <div className="flex-1 pl-60"> {/* Prevent overlap */}
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-4xl font-bold text-center mb-8">Find Your Dream Home</h1>
          {loading ? (
            <p className="text-center text-gray-600">Loading properties...</p>
          ) : filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No properties found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buy;
