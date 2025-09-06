"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-headerBg border-border">
      <div className="container">
        <div className="flex justify-between items-center py-4">
      <Link href="/" className="text-2xl font-bold text-gray-800">
      <div className="w-[100px] h-[40px] relative">
        <Image
          src="/img/main-logo.png"
          alt="Chandrabon Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>

          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="text-headerText">
              About Us
            </Link>
            <Link href="/contact" className="text-headerText">
              Contact
            </Link>
            <Link href="/products" className="text-headerText">
              Products
            </Link>
          </nav>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
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
