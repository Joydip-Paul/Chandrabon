import Image from "next/image";
import products from "@/../public/data/products.json";
import { notFound } from "next/navigation";

interface Product {
  id: string;
  name: string;
  price: number;
  thumb: string;
}

interface ProductsProps {
  params: {
    id: string;
  };
}

export default function ProductDetails({ params }: ProductsProps) {
  const { id } = params;

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
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[400px]">
            <Image
              src={product.thumb}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-green-600 font-semibold mb-6">
              Price: ৳{product.price}
            </p>
            <p className="text-gray-600 mb-8">
              This is a beautiful Moniputi sharee. Perfect for any occasion and
              crafted with care.
            </p>
            {/* <button className="main-btn">
            Order Now
          </button> */}

            <a
              href={`https://wa.me/8801346893953?text=Hello, I want to order: ${encodeURIComponent(
                product.name
              )} (ID: ${product.id})`}
              target="_blank"
              rel="noopener noreferrer"
              className="main-btn w-full block text-center"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD inject */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
