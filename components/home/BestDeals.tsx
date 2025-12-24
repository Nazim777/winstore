import React, { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { ProductSkeleton } from "@/components/product/Skeleton";
import { getProductsByCategory } from "@/app/actions/products";
import Error from "../common/Error";
import CategoryList from "../category/CategoryList";
import { useFetch } from "@/hooks/useFetch";

const BestDeals: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const {
    data: products,
    loading,
    error,
  } = useFetch(() => getProductsByCategory(activeCategory!), [activeCategory]);

  return (
    <section className="py-12 px-4 md:px-12 bg-white border-t border-gray-100">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
        <h2 className="text-2xl font-bold">
          <span className="text-win-primary">Best</span> Deals
        </h2>
        <CategoryList
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
        ) : error ? (
          <Error errorMsg={error} />
        ) : products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full p-8 text-center text-gray-500 bg-gray-50 rounded-lg">
            No deals available.
          </div>
        )}
      </div>
    </section>
  );
};

export default BestDeals;
