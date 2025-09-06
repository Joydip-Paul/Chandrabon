import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen grid md:grid-cols-2">
      {/* Left side fixed image */}
      <div className="relative hidden md:block">
        <div className="fixed top-0 left-0 w-1/2 h-screen">
          <Image
            src="/img/contact/contact.png"
            alt="Contact"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right side scrollable content */}
      <div className="flex flex-col justify-start px-8 py-16 bg-white overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-6">
          We are always here to help you. Reach out to us anytime:
        </p>

        <ul className="space-y-4 mb-12">
          <li>
            <span className="font-semibold">Phone: </span>
            <a
              href="tel:+8801712345678"
              className="text-blue-800 hover:underline"
            >
              +880 1712-345678
            </a>
          </li>
          <li>
            <span className="font-semibold">Facebook: </span>
            <a
              href="https://facebook.com/chandrabon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:underline"
            >
              facebook.com/chandrabon
            </a>
          </li>

          <li>
            <span className="font-semibold">Email: </span>
            <a
              href="mailto:hello.chandrabon@gmail.com"
              className="text-blue-800 hover:underline"
            >
              hello.chandrabon@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
