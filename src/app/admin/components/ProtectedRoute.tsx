'use client';
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if(!isAdmin){
        router.push("/admin/login");
    }
  }, [router]);
  return <>{children}</>;
}
