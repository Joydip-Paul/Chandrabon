import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-300">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Chandrabon. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
