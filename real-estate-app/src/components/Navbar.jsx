import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();
  const isBuyPage = location.pathname === "/buy";
  const pages = ["Home", "Buy", "Sell", "Rent", "Agents", "Contact"];

  return (
    <nav className="w-full bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Show logo on all pages EXCEPT Buy */}
        {!isBuyPage && (
          <div className="">
            <span className="font-bold"><span className="text-xl">E</span>STATE </span>
            HE<span className="text-2xl">A</span>VEN
          </div>
        )}

        <div className="flex items-center space-x-6">
          {/* Search bar only on Buy page */}
          {isBuyPage && (
            <input
              type="text"
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 w-64 border-b-2  border-gray-300 focus:ring-0 outline-none transition-all duration-200 mr-40"
            />
          )}

          {/* Navigation Links (excluding the current page) */}
          <ul className="flex space-x-6 text-gray-800 font-medium">
            {pages.map((item) => {
              const path = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
              return location.pathname !== path ? (
                <li key={item}>
                  <Link to={path} className="hover:text-blue-600 cursor-pointer transition-colors">
                    {item}
                  </Link>
                </li>
              ) : null;
            })}
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <Link to="/login" className="text-gray-800 px-4 py-2 hover:text-blue-600 transition-colors">
            Login
          </Link>
          <Link to="/signup" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
