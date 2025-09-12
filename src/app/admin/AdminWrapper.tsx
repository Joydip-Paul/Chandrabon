"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function AdminWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin && !isLoginPage) {
      router.replace("/admin/login");
    }

    setLoading(false);
  }, [pathname, router, isLoginPage]);

  if (loading) return null;

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header onMenuClick={() => setIsOpen(true)} />
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <main>{children}</main>
    </>
  );
}
