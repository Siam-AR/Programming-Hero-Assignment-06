import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import ProductCard from "../components/PurchasePage/ProductCard";
import CartItem from "../components/PurchasePage/CartItem";
import Tabs from "../components/PurchasePage/Tabs";
import productsData from "../data/products.json";

const PurchasePage = () => {
  // State management
  const [activeTab, setActiveTab] = useState("products"); // 'products' or 'cart'
  const [cart, setCart] = useState([]); // Array of products in cart

  // Add product to cart (prevent duplicates)
  const handleAddToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  // Remove product from cart
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Checkout: Clear cart
  const handleCheckout = () => {
    setCart([]);
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // Check if product is already in cart
  const isProductInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Digital Tools
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
          cartCount={cart.length}
        />

        {/* Products Tab */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                isInCart={isProductInCart(product.id)}
              />
            ))}
          </div>
        )}

        {/* Cart Tab */}
        {activeTab === "cart" && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Cart
              </h2>

              {/* Empty Cart State */}
              {cart.length === 0 && (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Your cart is empty</p>
                </div>
              )}

              {/* Cart Items */}
              {cart.length > 0 && (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onRemove={handleRemoveFromCart}
                      />
                    ))}
                  </div>

                  {/* Total */}
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between items-center text-xl font-bold text-gray-900">
                      <span>Total:</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  >
                    Proceed To Checkout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PurchasePage;
