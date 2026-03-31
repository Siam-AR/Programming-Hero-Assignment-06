import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = ({ cartCount = 0 }) => {
  return (
    <div className="w-full border-b border-gray-300 bg-white">
      <div className="w-10/12 mx-auto relative flex items-center justify-between px-8 py-3 text-gray-900">
        <div className="flex-none">
          <a className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
            DigiTools
          </a>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-5.5">
          <a className="font-semibold hover:text-purple-500">Products</a>
          <a className="font-semibold hover:text-purple-500">Features</a>
          <a className="font-semibold hover:text-purple-500">Pricing</a>
          <a className="font-semibold hover:text-purple-500">Testimonials</a>
          <a className="font-semibold hover:text-purple-500">FAQ</a>
        </div>

        <div className="flex-none flex items-center space-x-4">
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-900" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <a className="font-semibold hover:text-purple-500">Login</a>

          <button className="btn btn-primary rounded-full px-4 py-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;