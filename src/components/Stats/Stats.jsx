import React from "react";

const Stats = () => {
  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "200+", label: "Premium Tools" },
    { number: "4.9", label: "Rating" },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${
                index !== stats.length - 1
                  ? "md:border-r md:border-white/30"
                  : ""
              }`}
            >
              {/* Number */}
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.number}
              </h3>
              {/* Label */}
              <p className="text-purple-100 text-lg md:text-xl font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
