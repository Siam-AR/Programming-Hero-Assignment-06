import React from "react";

const Tabs = ({ activeTab, onTabChange, cartCount }) => {
  return (
    <div className="flex justify-center gap-4 mb-12">
      {/* Products Tab */}
      <button
        onClick={() => onTabChange("products")}
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
          activeTab === "products"
            ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Products
      </button>

      {/* Cart Tab */}
      <button
        onClick={() => onTabChange("cart")}
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
          activeTab === "cart"
            ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Cart {cartCount > 0 && `(${cartCount})`}
      </button>
    </div>
  );
};

export default Tabs;
