const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-30 border-t border-gray-200 text-sm">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold">Estate Heaven</h2>
          <p className="mt-4 text-gray-600">Helping you find the perfect place to call home.</p>
        </div>
        
        {/* Navigation Links */}
        <div>
          <h3 className="text-2xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-5">
            <li><a href="/buy" className="hover:text-blue-800 transition">Buy</a></li>
            <li><a href="/sell" className="hover:text-blue-800 transition">Sell</a></li>
            <li><a href="/about" className="hover:text-blue-800 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-800 transition">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p className="mt-4 text-gray-600">Email: contact@estateheaven.com</p>
          <p className="text-gray-600">Phone: (123) 456-7890</p>
          <p className="mt-6">
            <a href="#" className="text-blue-800 hover:underline">Facebook</a> | 
            <a href="#" className="text-blue-800 hover:underline"> Twitter</a> | 
            <a href="#" className="text-blue-800 hover:underline"> Instagram</a>
          </p>
        </div>
        
        {/* Additional Info */}
        <div>
          <h3 className="text-2xl font-semibold">Our Services</h3>
          <ul className="mt-4 space-y-5">
            <li><a href="/mortgage" className="hover:text-blue-800 transition">Mortgage Assistance</a></li>
            <li><a href="/valuation" className="hover:text-blue-800 transition">Property Valuation</a></li>
            <li><a href="/consulting" className="hover:text-blue-800 transition">Real Estate Consulting</a></li>
            <li><a href="/legal" className="hover:text-blue-800 transition">Legal Advice</a></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-600 mt-12 text-md">
        &copy; {new Date().getFullYear()} Estate Heaven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
