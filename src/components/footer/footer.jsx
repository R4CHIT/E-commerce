import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 px-6 md:px-20 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="logo2.png" alt="Logo" className="h-20 w-20 object-cover" />
            <h1 className="text-2xl font-bold text-amber-500">MasterCheif</h1>
          </div>
          <p className="text-gray-600">
            Deliciousness delivered to your door, fast & fresh.
          </p>
          <div className="flex gap-4 mt-4 text-gray-700">
            <a href="https://www.facebook.com/rachit.tiwari.619206" target="blank">
              <FaFacebookF className="hover:text-amber-500 cursor-pointer text-xl" />
            </a>
            <FaInstagram className="hover:text-amber-500 cursor-pointer text-xl" />
            <FaTwitter className="hover:text-amber-500 cursor-pointer text-xl" />
            <FaGithub className="hover:text-amber-500 cursor-pointer text-xl" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-amber-500 cursor-pointer">Home</li>
            <li className="hover:text-amber-500 cursor-pointer">About</li>
            <li className="hover:text-amber-500 cursor-pointer">Contact</li>
            <li className="hover:text-amber-500 cursor-pointer">Pricing</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
          <p className="text-gray-600">Email: support@mastercheif.com</p>
          <p className="mt-2 text-gray-600">Phone: +977-9769211045</p>
          <p className="mt-2 text-gray-600">Location: Rajakochautara, Ward'32'</p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2025 MasterCheif. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
