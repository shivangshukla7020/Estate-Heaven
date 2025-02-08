import React from 'react';
import home from '../assets/home.jpg';
import googleIcon from '../assets/Icons/google2.png';

const Login = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={home} className="w-full h-full object-cover" alt="Background" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Login Box */}
      <div className="relative z-10 bg-white p-8 md:p-12 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Welcome Back</h2>
        <p className="text-gray-600 text-center mt-2">Sign in to access your dashboard.</p>

        {/* Login Form */}
        <form className="mt-6 space-y-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <a href="#" className="hover:text-blue-600">Forgot password?</a>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-800 text-white p-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Google Login Button */}
        <button className="mt-4 w-full bg-red-600 text-white p-3 rounded-lg flex items-center justify-center gap-3 hover:bg-red-500 transition cursor-pointer">
          <img src={googleIcon} alt="Google Logo" className="w-6 h-6" />
          Sign in with Google
        </button>

        {/* Sign-up Link */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="#" className="text-blue-600 font-medium hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
