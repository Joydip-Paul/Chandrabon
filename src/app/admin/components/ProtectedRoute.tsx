"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (!isAdmin && window.location.pathname !== "/admin/login") {
      router.replace("/admin/login");
    }
  }, [router]);

  return <>{children}</>;
}
