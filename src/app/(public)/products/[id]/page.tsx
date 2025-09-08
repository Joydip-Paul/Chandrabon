import Image from "next/image";
import products from "@/../public/data/products.json";
import { notFound } from "next/navigation";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import AlsoLike from "@/components/AlsoLike";

interface Product {
  id: string;
  name: string;
  description:string;
  price: number;
  thumb: string;
}

interface ProductsProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetails({ params }: ProductsProps) {
  const { id } = await params;

  const product = (products as Product[]).find(
    (item) => item.id === String(id)
  );

  if (!product) {
    return notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://chandrabon.vercel.app${product.thumb}`,
    description: "Authentic handloom Monipuri Sharee from Sylhet weavers.",
    brand: {
      "@type": "Brand",
      name: "Chandrabon",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BDT",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `https://chandrabon.vercel.app/products/${product.id}`,
    },
  };

  return (
    <>
      <div className="container py-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="relative w-full h-[500px] bg-gray-100">
            <Image
              src={product.thumb}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
            <p className="text-lg">
              {product.description}
            </p>

            <div className="mt-5 flex justify-between gap-3 py-6 items-center">
              <p className="text-2xl text-green-700 font-semibold">
                ৳ {product.price}
              </p>

              <div className="flex items-center border max-w-max">
                <button className="px-3 py-2">-</button>
                <span className="px-4">1</span>
                <button className="px-3 py-2">+</button>
              </div>
            </div>

            <div className="divide-y border-t border-b mb-6">
              <button className="w-full text-left py-3 font-medium">
                Product Code <span className="float-right">#{product.id}</span>
              </button>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/8801346893953?text=Hello, I want to order: ${encodeURIComponent(
                  product.name
                )} (ID: ${product.id})`}
                target="_blank"
                rel="noopener noreferrer"
                className="main-btn flex-1 text-center"
              >
                ORDER NOW
              </a>
              <button className="border px-4 py-3">
                <FaHeart />
              </button>
              {/* <button className="border px-4 py-3 rounded">
                <FaShareAlt />
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD inject */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <div className="border-t border-border mt-20">
          <AlsoLike />
        </div>
    </>
  );
}
