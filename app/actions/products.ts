"use server";

import { Product } from "@/types/product";
import { safeFetch } from "@/utils/api";

const BASE = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getAllProducts = async () =>
  safeFetch<Product[]>(`${BASE}/products`);
export const getProductById = async (id: string) =>
  safeFetch<Product>(`${BASE}/products/${id}`);
export const getProductsByCategory = async (cat: string) =>
  safeFetch<Product[]>(`${BASE}/products/category/${cat}`);
