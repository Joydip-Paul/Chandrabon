"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LogoutButton from "../logout/logout";

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b px-4 py-2">
              <h2 className="text-lg font-semibold">Admin Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded hover:bg-gray-100 transition cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col gap-3 p-4">
              <li>
                <Link
                  href="/admin"
                  onClick={onClose}
                  className="block border px-4 py-3 hover:bg-gray-50 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/products"
                  onClick={onClose}
                  className="block border px-4 py-3 hover:bg-gray-50 transition"
                >
                  Products
                </Link>
              </li>

                <LogoutButton />
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
