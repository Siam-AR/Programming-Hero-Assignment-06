import React from "react";
import { X } from "lucide-react";
import productIcons from "../../utils/productIcons";

const CartItem = ({ item, onRemove }) => {
  const iconSrc = productIcons[item.icon];

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      {/* Left: Icon + Details */}
      <div className="flex items-center gap-4">
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={`${item.title} icon`}
            className="h-10 w-10 object-contain shrink-0"
          />
        ) : (
          <div className="text-3xl">{item.icon}</div>
        )}
        <div>
          <h4 className="font-semibold text-gray-900">{item.title}</h4>
          <p className="text-gray-600 text-sm">${item.price}</p>
        </div>
      </div>

      {/* Right: Remove Button */}
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 hover:text-red-700 font-semibold text-sm transition-colors duration-200 flex items-center gap-1"
      >
        <X className="w-4 h-4" />
        Remove
      </button>
    </div>
  );
};

export default CartItem;
