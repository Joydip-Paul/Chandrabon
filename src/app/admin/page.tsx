"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Overview from "./components/overview";

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <>
      <Overview />
    </>
  );
}
