"use client";

import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.replace("/admin/login");
  };

  return (
    <button onClick={handleLogout} className="flex gap-2 items-center text-md border px-4 py-3 hover:bg-amber-950 hover:text-white transition-all">
      <MdLogout size={20}/>
      Logout
    </button>
  );
}
