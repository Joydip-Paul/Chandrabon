"use client";

import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import { Product } from "@/lib/getProducts";
import MainButton from "./mainButton";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <>
      <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-neutral-200 overflow-hidden transition relative"
          >
            <div className="relative w-full h-40 sm:h-60 overflow-hidden group">
              <Image
                src={item.thumb}
                alt={item.name}
                fill
                className="object-cover transform group-hover:scale-110 transition duration-500"
              />

              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow text-red-500 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition duration-300">
                <FaRegHeart className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 sm:p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 truncate">
                {item.name}
              </h3>
              <p className="text-gray-600 mb-4">৳ {item.price}</p>

              <MainButton
                url={`/products/${item.id}`}
                label="Order Now"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
