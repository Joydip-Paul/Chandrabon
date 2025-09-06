import { getAllFeaturedProducts } from "@/lib/getFeaturedProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function FeaturedProducts() {
  const featuredProductList = await getAllFeaturedProducts();

  console.log(featuredProductList);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-8">
          Featured Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProductList.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-neutral-200 rounded-sm overflow-hidden"
            >
              <div className="relative w-full h-60">
                <Image
                  src={item.thumb}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">Price: {item.price}</p>

                {/* {item?.in_stock ? (
                  <Link href="/products">
                    <button className="main-btn w-full">Order Now</button>
                  </Link>
                ) : (
                  <div className="main-btn cursor-auto bg-gray-600">Stock out</div>
                )} */}

                {item?.in_stock ? (
                  <a
                    href={`https://wa.me/8801346893953?text=Hello, I want to order: ${encodeURIComponent(
                      item.name
                    )} (ID: ${item.id})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="main-btn w-full block text-center"
                  >
                    Order Now
                  </a>
                ) : (
                  <div className="main-btn cursor-auto bg-gray-600">
                    Stock out
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-20">
          <Link href="/products">
            <button className="main-btn main-btn-transparent">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
