"use client";

import { useEffect, useState } from "react";

type Stats = {
  orders: number;
  products: number;
};

export default function Overview() {
  const [stats, setStats] = useState<Stats>({ orders: 0, products: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = {
          orders: 124,
          products: 36,
        };
        setStats(data);
      } catch (error) {
        console.error("Failed to load stats", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="container pt-25">
      <h1 className="text-2xl font-bold mb-6">
        {greeting}, Admin 👋
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Orders */}
          <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Orders
            </h2>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {stats.orders}
            </p>
          </div>

          {/* Products */}
          <div className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-gray-700">
              Total Products
            </h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {stats.products}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
