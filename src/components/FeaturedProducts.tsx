import Image from "next/image";
import React from "react";

const products = [
  {
    id: 1,
    name: "Classic Burger",
    price: "$8.99",
    image: "/img/p1.webp",
  },
  {
    id: 2,
    name: "Cheese Shake",
    price: "$4.99",
    image: "/img/p2.webp",
  },
  {
    id: 3,
    name: "Fries Combo",
    price: "$6.50",
    image: "/img/p3.webp",
  },
  {
    id: 4,
    name: "Classic Burger",
    price: "$8.99",
    image: "/img/p4.webp",
  },
  {
    id: 5,
    name: "Cheese Shake",
    price: "$4.99",
    image: "/img/p5.webp",
  },
  {
    id: 6,
    name: "Fries Combo",
    price: "$6.50",
    image: "/img/p6.webp",
  },
  {
    id: 7,
    name: "Cheese Shake",
    price: "$4.99",
    image: "/img/p7.webp",
  },
  {
    id: 8,
    name: "Fries Combo",
    price: "$6.50",
    image: "/img/p8.webp",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          Featured Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-neutral-200 rounded-sm overflow-hidden"
            >
              <div className="relative w-full h-68">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.price}</p>

                <button className="w-full bg-gray-800 border-0 text-sm text-white px-6 py-3">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
