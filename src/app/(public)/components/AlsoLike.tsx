import { getProducts, Product } from "@/lib/getProducts";
import ProductGrid from "./productGrid";

export default async function AlsoLike() {
  // সব product লোড
  const products: Product[] = await getProducts();

  // random shuffle করে ৪টা select
  const shuffled = products.sort(() => 0.5 - Math.random());
  const randomFour = shuffled.slice(0, 4);

  return (
    <section className="py-12">
      <div className="container">
        <h3 className="text-2xl font-bold text-center mb-8">YOU MAY ALSO LIKE</h3>
        <ProductGrid products={randomFour} />
      </div>
    </section>
  );
}
