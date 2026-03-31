import React from "react";
import { Check } from "lucide-react";

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  // Badge color mapping
  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Best Seller":
        return "bg-orange-100 text-orange-600";
      case "Popular":
        return "bg-blue-100 text-blue-600";
      case "New":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col">
      {/* Badge */}
      <div className="flex justify-between items-start mb-4">
        <div className="text-4xl">{product.icon}</div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${getBadgeColor(
            product.badge
          )}`}
        >
          {product.badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {product.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 flex-grow">
        {product.description}
      </p>

      {/* Price */}
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">
          ${product.price}
        </span>
        <span className="text-gray-600 text-sm">
          /{product.type === "monthly" ? "Mo" : "One-Time"}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button
        onClick={() => onAddToCart(product)}
        disabled={isInCart}
        className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
          isInCart
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:scale-105 hover:shadow-lg"
        }`}
      >
        {isInCart ? "Already in Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;
