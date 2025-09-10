"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddProduct from "./product-add";

export default function ProductListPage() {
  const products = [
    {
      id: "1ce334343",
      name: "Monipuri Sharee Premium",
      desc: "Handloom authentic sharee from Sylhet weavers",
      price: 2500,
      image: "/img/products/s1.jpeg",
      productCode: "1cf2000",
    },
    {
      id: "23ddsf32343",
      name: "Cotton Monipuri Sharee",
      desc: "Lightweight cotton, perfect for daily wear",
      price: 1800,
      image: "/img/products/s2.jpeg",
      productCode: "2cf2000",
    },
    {
      id: "1cefsaddd334343",
      name: "Monipuri Sharee Premium",
      desc: "Handloom authentic sharee from Sylhet weavers",
      price: 2500,
      image: "/img/products/s8.jpeg",
      productCode: "3cf2000",
    },
    {
      id: "23ddsf3d2343",
      name: "Cotton Monipuri Sharee",
      desc: "Lightweight cotton, perfect for daily wear",
      price: 1800,
      image: "/img/products/s3.jpeg",
      productCode: "4cf2000",
    },
    {
      id: "1ce43234343",
      name: "Monipuri Sharee Premium",
      desc: "Handloom authentic sharee from Sylhet weavers",
      price: 2500,
      image: "/img/products/s5.jpeg",
      productCode: "5cf2000",
    },
    {
      id: "23ddgaed32343",
      name: "Cotton Monipuri Sharee",
      desc: "Lightweight cotton, perfect for daily wear",
      price: 1800,
      image: "/img/products/s9.jpeg",
      productCode: "6cf2000",
    },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="py-3">
        <div className="container">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Product List</h3>
            <button className="main-btn" onClick={() => setIsDrawerOpen(true)}>
              + Add Product
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {products.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-border hover:shadow-md transition p-4 flex flex-col"
              >
                <div className="relative w-full h-42 mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                <h2 className="text-sm font-medium text-gray-700 bg-gray-100 px-2 py-1 border border-gray-300 rounded-sm mb-2 truncate">
                  <span className="font-bold">Product Code:</span>{" "}
                  {item.productCode}
                </h2>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{item.desc}</p>

                <div className="mt-auto flex justify-between items-center">
                  <p className="text-xl font-bold text-green-700">
                    ৳ {item.price}
                  </p>
                  <div className="flex gap-2">
                    <button
                      className="p-2 rounded bg-blue-50 cursor-pointer"
                      title="Edit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 112.828 2.828L11.828 13.83a2 2 0 01-1.414.586H9v-2.414zM5 19h14"
                        />
                      </svg>
                    </button>

                    <button
                      className="p-2 rounded bg-red-50 cursor-pointer"
                      title="Delete"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4a1 1 0 011 1v1H9V4a1 1 0 011-1z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AddProduct
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
