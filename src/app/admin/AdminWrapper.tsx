"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function AdminWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("isAdmin");
    setIsAdmin(storedAdmin === "true");
  }, []);

  return (
    <>
      {isAdmin && <Header onMenuClick={() => setIsOpen(true)} />}

      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <main>{children}</main>
    </>
  );
}
