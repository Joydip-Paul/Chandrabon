import { baseUrl } from "./config";

export interface Product {
  id: number;
  name: string;
  thumb: string;
  price: string;
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${baseUrl}/data/products.json`);
  return response.json();
}

