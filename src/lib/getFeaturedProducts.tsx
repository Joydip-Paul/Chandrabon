// import { baseUrl } from "./config";

export type Product = {
  id: string;
  name: string;
  thumb: string;
  price: number;
  in_stock?:boolean;
  currency?:string;
};

export type ApiResponse<T> ={
    statusCode: number;
    success: boolean;
    message: string;
    timestamp: string;
    data: T;
}

export async function getAllFeaturedProducts(): Promise<Product[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/data/featuredProducts.json`, {
    cache: "no-store",
  });

  const json: ApiResponse<Product[]> =await response.json();
  return json.data;
}

