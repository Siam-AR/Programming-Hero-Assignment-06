import React from "react";
import { Play } from "lucide-react";
import bannerImage from "../../assets/images/banner.png";
import CircleLogo from "../CircleLogo";

const Hero = () => {
  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section */}
          <div className="flex flex-col space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex w-fit">
              <span className="flex items-center px-4 py-2 gap-1 bg-purple-100 text-purple-600 text-sm font-semibold rounded-full space-x-2">
                <CircleLogo />
                <span>New: AI-Powered Tools Available</span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Supercharge Your Digital Workflow
            </h1>

            {/* Paragraph */}
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                Explore Products
              </button>

              <button className="btn btn-outline border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                <Play className="h-5 w-5" fill="currentColor" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={bannerImage}
              alt="Digital workflow visualization"
              className="w-full max-w-lg lg:max-w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
