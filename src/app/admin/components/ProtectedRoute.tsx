"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    const isLoginPage = pathname === "/admin/login";

    if (!isAdmin && !isLoginPage) {
      router.push("/admin/login");
    }
    if (isAdmin && isLoginPage) {
      router.push("/admin");
    }
  }, [pathname, router]);

  return <>{children}</>;
}
