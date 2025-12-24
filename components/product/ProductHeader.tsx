import React from "react";
import { Product } from "@/types/product";
import { Star } from "lucide-react";

const ProductHeader = React.memo(({ product }: { product: Product }) => {
  return (
    <div className="mb-6">
      <span className="text-win-primary uppercase text-xs font-bold tracking-widest">
        {product.category}
      </span>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        {product.title}
      </h1>
      <div className="flex items-center gap-4 mt-4">
        <div className="flex text-yellow-400 text-sm">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < Math.floor(product.rating.rate) ? "fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="text-gray-400 text-sm">({product.rating.count} reviews)</span>
      </div>
    </div>
  );
});

export default ProductHeader;
