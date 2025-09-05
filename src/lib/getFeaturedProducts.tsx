import { baseUrl } from "./config";

export type Product = {
  id: number;
  name: string;
  thumb: string;
  price: string;
};

export default async function getAllFeaturedProducts(): Promise<Product[]> {
  const response = await fetch(`${baseUrl}/data/featuredProducts.json`);

  return response.json();
}
