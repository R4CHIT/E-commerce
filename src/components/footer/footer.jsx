import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 px-6 md:px-20 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <div
  className="text-2xl md:text-3xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500"
  onClick={() => navigate("/")}
>
  PhoneBazaar
</div>

          <p className="text-gray-600">
            Your favorite mobile phones, delivered fast and safe.
          </p>
          <div className="flex gap-4 mt-4 text-gray-700">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer text-xl" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 cursor-pointer text-xl" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400 cursor-pointer text-xl" />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-800 cursor-pointer text-xl" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            <li className="hover:text-blue-600 cursor-pointer">Products</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-600">Email: support@phonebazaar.com</p>
          <p className="mt-2 text-gray-600">Phone: +977-9769211045</p>
          <p className="mt-2 text-gray-600">Location: Rajakochautara, Ward 32</p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2025 PhoneBazaar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
