import home from '../../assets/home.png';

const Hero = () => {
    return (
      <section 
        className="relative w-full h-screen bg-white flex items-center justify-center"
      >
        <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {/* Left Side - Catchy Text & Buttons */}
          <div className="flex flex-col justify-center text-gray-800 space-y-6 px-20">
            <h1 className="text-4xl md:text-6xl font-bold">
              Find Your Dream Property Today!
            </h1>
            <p className="text-lg md:text-xl">
              Browse our listings and discover the perfect home for you.
            </p>
            <div className="space-x-4">
              <a href="/buy" className="bg-blue-800 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">Buy Now</a>
              <a href="/sell" className="bg-transparent border border-gray-800 text-gray-800 px-6 py-3 rounded-lg text-lg hover:bg-gray-800 hover:text-white transition">Sell</a>
            </div>
          </div>
  
          {/* Right Side - Image */}
          <div className="flex items-center justify-center">
            <img src={home} alt="Home" className="w-80 h-100 object-cover " />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
