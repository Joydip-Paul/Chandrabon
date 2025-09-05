import Link from "next/link";
import React from "react";
import { getProducts, Product } from "../../lib/getProducts";
import Image from "next/image";

const Page = async () => {
  const data: Product[] = await getProducts();
  console.log(data);

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-8">Products</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
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
                <p className="text-gray-600 mb-4">{item.price}</p>

                <button className="main-btn w-full">
                  <Link href={`/products/${item.id}`}>Order Now</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
