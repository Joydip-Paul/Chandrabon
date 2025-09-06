import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <div className="w-full bg-[#f5f8ff] min-h-screen py-22">
      <div className="container  grid md:grid-cols-2 gap-8 items-center">
        {/* Left side content */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-700 mb-6 max-w-lg">
            Email, call, or connect with us to learn more about{" "}
            <span className="font-semibold">Chandrabon</span> and our authentic
            Manipuri sarees.
          </p>

          <ul className="space-y-4 mb-10">
            <li>
              <span className="font-semibold">Email: </span>
              <a
                href="mailto:hello.chandrabon@gmail.com"
                className="text-blue-600 hover:underline"
              >
                hello.chandrabon@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone: </span>
              <a
                href="tel:++8801346893953"
                className="text-blue-600 hover:underline"
              >
                +880 1346-893953
              </a>
            </li>
            <li>
              <span className="font-semibold">Facebook: </span>
              <a
                href="https://www.facebook.com/chandrabon.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                facebook.com/chandrabon.shop
              </a>
            </li>
          </ul>

          {/* Extra info blocks */}
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <p>
                Our team is available to address any concerns or queries you
                have, around the clock.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Feedback & Suggestions</h3>
              <p>
                We value your feedback and continuously work with our artisans
                to improve Chandrabon.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Media Inquiries</h3>
              <p>
                For press-related questions, please contact us at{" "}
                <span className="text-blue-600">media@chandrabon.com</span>.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p>
                Come see how our sarees are made at our local weaving centers in
                Sylhet, Bangladesh.
              </p>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          <Image
            src="/img/contact/contact.png"
            alt="Contact Visual"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
