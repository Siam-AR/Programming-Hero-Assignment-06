import React from "react";
import { Check } from "lucide-react";
import pricingData from "../../data/pricing.json";

const Pricing = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="w-10/12 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className={`relative h-full rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl flex flex-col ${
                plan.isPopular
                  ? "bg-gradient-to-br from-purple-600 to-indigo-600 text-white md:scale-105 md:-mt-4 md:mb-4"
                  : "bg-gray-50 text-gray-900"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-purple-900 text-sm font-bold px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`text-2xl md:text-3xl font-bold mb-2 ${
                  plan.isPopular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className={`mb-6 ${
                  plan.isPopular ? "text-purple-100" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-4xl md:text-5xl font-bold ${
                    plan.isPopular ? "text-white" : "text-gray-900"
                  }`}
                >
                  ${plan.price}
                </span>
                <span
                  className={`text-lg ${
                    plan.isPopular ? "text-purple-100" : "text-gray-600"
                  }`}
                >
                  /Month
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.isPopular ? "text-green-300" : "text-green-600"
                      }`}
                    />
                    <span
                      className={
                        plan.isPopular ? "text-purple-50" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-auto w-full font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg ${
                  plan.isPopular
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
