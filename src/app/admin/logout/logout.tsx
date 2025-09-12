"use client";
import { MdLogout } from "react-icons/md";

export default function LogoutButton() {

  return (
    <button className="flex gap-2 items-center text-md border px-4 py-3 hover:bg-amber-950 hover:text-white transition-all">
      <MdLogout size={20}/>
      Logout
    </button>
  );
}
