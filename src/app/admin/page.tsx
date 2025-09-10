"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Overview from "./components/overview";

export default function AdminDashboard() {
  const router = useRouter();
  const [loggedIn, setIsLoggedIn]=useState(false);

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/admin/login");
    }
    else {
      setIsLoggedIn(true);
    }
  }, [router]);

  if(!loggedIn){
    <div>Loading...</div>
  }

  return (
    <>
      <Overview />
    </>
  );
}
