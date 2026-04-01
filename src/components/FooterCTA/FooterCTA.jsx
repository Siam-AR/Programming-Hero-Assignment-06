import React from "react";
import { IoIosCamera } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const FooterCTA = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Templates", href: "#" },
      { name: "Integrations", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Community", href: "#" },
      { name: "Contact", href: "#" },
    ],
  };

  return (
    <>
      <section className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Ready To Transform Your Workflow?
          </h2>

          <p className="text-purple-50 text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-10">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Explore Products
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-white/10">
              View Pricing
            </button>
          </div>

          <p className="text-purple-100 text-sm opacity-80">
            14-day free trial - No credit card required - Cancel anytime
          </p>
        </div>
      </section>

      <footer className="bg-slate-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
            <div className="lg:col-span-1">
              <h3 className="text-white text-2xl font-bold mb-4">DigiTools</h3>
              <p className="text-gray-400 leading-relaxed">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">
                Social Links
              </h4>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
                  aria-label="YouTube"
                >
                  <IoIosCamera />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                Copyright 2026 Digitools. All rights reserved.
              </p>

              <div className="flex flex-wrap gap-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
