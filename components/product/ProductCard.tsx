import React from "react";
import { Product } from "@/types/product";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 p-4 flex flex-col group hover:shadow-lg transition-all duration-300 relative">
      <div className="text-[10px] text-gray-400 font-medium mb-1 truncate">
        Bin Bakar Electronics
      </div>
      <h3 className="text-sm font-medium text-[#034E53] line-clamp-1 mb-4 h-10">
        {product.title}
      </h3>

      <Link href={`/products/${product.id}`}>
        <div className="h-40 flex items-center justify-center mb-6 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="mt-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-400 line-through">
            RS. {(product.price * 105).toFixed(0)}
          </span>
          <span className="text-[#47C2C7]">
            RS. {(product.price * 100).toFixed(0)}
          </span>
        </div>
        <button className="w-full bg-[#15ADB7] cursor-pointer text-white py-2 text-sm rounded hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2">
          Add to cart
        </button>
        
      </div>
    </div>
  );
};

export default ProductCard;
