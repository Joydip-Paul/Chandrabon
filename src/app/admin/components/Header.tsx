import Image from "next/image";
import React from "react";

export default function Header({onMenuClick}:{onMenuClick: () => void}) {
  return (
    <header className="fixed top-0 z-50 bg-amber-950 w-full">
      <div className="container">
        <div className="flex justify-between align-middle py-4">
          <div className="w-[100px] h-[40px] relative">
            <Image
              src="/img/main-logo.png"
              alt="Chandrabon Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <button className="border border-white flex align-middle gap-2 px-3 py-2 cursor-pointer" onClick={onMenuClick}>
            <h3 className="text-white leading-[1.4]">Menu</h3>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          </div>
      </div>
    </header>
  );
}
