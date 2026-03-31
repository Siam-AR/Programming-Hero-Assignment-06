import React from "react";
import { Circle } from "lucide-react";

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
      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Ready To Transform Your Workflow?
          </h2>

          {/* Subtext */}
          <p className="text-purple-50 text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-10">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <button className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Explore Products
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-white/10">
              View Pricing
            </button>
          </div>

          {/* Small Note */}
          <p className="text-purple-100 text-sm opacity-80">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Column 1 - About */}
            <div className="lg:col-span-1">
              <h3 className="text-white text-2xl font-bold mb-4">DigiTools</h3>
              <p className="text-gray-400 leading-relaxed">
                Premium digital tools for creators, professionals, and
                businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            {/* Column 2 - Product */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">
                Product
              </h4>
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

            {/* Column 3 - Company */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">
                Company
              </h4>
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

            {/* Column 4 - Resources */}
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
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
              aria-label="YouTube"
            >
              <svg
                className="w-5 h-5 text-white fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 text-white fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5 text-white fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-gray-400 text-sm">
                © 2026 Digitools. All rights reserved.
              </p>

              {/* Bottom Links */}
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
