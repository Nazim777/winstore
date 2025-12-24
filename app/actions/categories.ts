"use server";

import { Category } from "@/types/category";
import { safeFetch } from "@/utils/api";

const BASE = process.env.NEXT_PUBLIC_BASE_API_URL;

export const getCategories = async (): Promise<Category[]> => {
  const data = await safeFetch<Category[]>(`${BASE}/products/categories`);
  return data ?? [];
};
