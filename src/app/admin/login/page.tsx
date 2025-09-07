"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function AdminLogin() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/data/login.json");
    const data = await res.json();

    if(mobile === data.mobile && password === data.password){
        localStorage.setItem("isAdmin", "true");
        router.push('/admin');
    }
    else {
        setError("Invalid credentials");
    }
    console.log("Login");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200 px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-xl font-bold mb-6 text-center">Admin Login</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <button
            type="submit"
            className="main-btn w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
