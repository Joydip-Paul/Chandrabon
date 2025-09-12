import ProductGrid from "@/app/(public)/components/productGrid";
import { getProducts, Product } from "@/lib/getProducts";

export default async function Page() {
  const data: Product[] = await getProducts();
  return (
    <div className="container py-6">
      <h3 className="text-center text-2xl font-semibold text-gray-800 mb-10 mt-6">
        All Products
      </h3>
      <ProductGrid products={data} />
    </div>
  );
}
