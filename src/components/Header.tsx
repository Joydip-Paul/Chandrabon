"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header className="sticky top-0 z-50 bg-white">
  <div className="container mx-auto flex justify-between items-center py-4 px-6">
    <Link href="/" className="text-2xl font-bold text-gray-800">
      Chandrabon
    </Link>

    <nav className="hidden md:flex space-x-6">
      <Link href="/about" className="hover:text-blue-600">
        About Us
      </Link>
      <Link href="/contact" className="hover:text-blue-600">
        Contact
      </Link>
      <Link href="/products" className="hover:text-blue-600">
        Products
      </Link>
    </nav>

    <button
      className="md:hidden focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <svg
        className="w-6 h-6 text-gray-800"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  </div>

  {isOpen && (
    <nav className="md:hidden bg-gray-50 shadow-md px-6 py-4 space-y-3">
      <Link
        href="/about"
        className="block hover:text-blue-600"
        onClick={() => setIsOpen(false)}
      >
        About Us
      </Link>
      <Link
        href="/contact"
        className="block hover:text-blue-600"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </Link>
      <Link
        href="/products"
        className="block hover:text-blue-600"
        onClick={() => setIsOpen(false)}
      >
        Products
      </Link>
    </nav>
  )}
</header>

  );
}
