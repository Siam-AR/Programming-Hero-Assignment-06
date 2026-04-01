import React from "react";
import { User, Package, Rocket } from "lucide-react";

const Steps = () => {
  const stepsData = [
    {
      id: "01",
      icon: User,
      title: "Create Account",
      description:
        "Sign up for free in seconds. No credit card required to get started.",
    },
    {
      id: "02",
      icon: Package,
      title: "Choose Products",
      description:
        "Browse our catalog and select the tools that fit your needs.",
    },
    {
      id: "03",
      icon: Rocket,
      title: "Start Creating",
      description:
        "Download and start using your premium tools immediately.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="w-10/12 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stepsData.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="relative bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Step Number Badge */}
                <div className="absolute top-4 right-4 bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.id}
                </div>

                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-purple-600" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
