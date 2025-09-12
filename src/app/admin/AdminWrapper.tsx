"use client";

import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { usePathname } from "next/navigation";

export default function AdminWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Login page e header/sidebar hide
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <>
      <Header onMenuClick={() => setIsOpen(true)} />
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <main className="pt-20">{children}</main>
    </>
  );
}
