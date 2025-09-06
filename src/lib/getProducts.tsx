// import { baseUrl } from "./config";

export interface Product {
  id: string;
  name: string;
  thumb: string;
  price: string;
}

// export async function getProducts(): Promise<Product[]> {
//   const response = await fetch(`${baseUrl}/data/products.json`);
//   return response.json();
// }

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/data/products.json`, {
    cache: "no-store",
  });
  return response.json();
}


